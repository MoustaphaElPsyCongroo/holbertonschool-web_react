import React from "react";
import { StyleSheet, css } from "aphrodite";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import * as AppContext from "./AppContext";
import { getLatestNotification } from "../utils/utils";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: AppContext.user,
      logOut: this.logOut,
    };
  }

  handleDisplayDrawer = () => {
    this.setState({ displayDrawer: true });
  };

  handleHideDrawer = () => {
    this.setState({ displayDrawer: false });
  };

  logOutOnKeydown = (e) => {
    if (e.code === "KeyH") {
      if (e.ctrlKey) {
        e.preventDefault();
        alert("Logging you out");
        this.state.logOut();
      }
    }
  };

  logIn = (email, password) => {
    // I use setState's updater function to be guaranteed to have the correct
    // prevState, then use this prevState with spread operator to update every
    // mentionned key (equivalent of Object.assign({}, newValue))
    this.setState((prevState) => ({
      ...prevState,
      user: {
        ...prevState.user,
        email,
        password,
        isLoggedIn: true,
      },
    }));
  };

  logOut = () => {
    this.setState({
      user: {
        email: "",
        password: "",
        isLoggedIn: false,
      },
    });
  };

  componentDidMount() {
    window.addEventListener("keydown", this.logOutOnKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.logOutOnKeydown);
  }

  render() {
    const listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];

    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
    ];

    const userContextProvided = {
      user: this.state.user,
      logOut: this.state.logOut,
    };

    return (
      <AppContext.UserContext.Provider value={userContextProvided}>
        <Notifications
          listNotifications={listNotifications}
          displayDrawer={this.state.displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
        />
        <Header />
        <div className={css(styles.body)}>
          {this.state.user.isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login logIn={this.logIn} />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>Here are some fresh news.</p>
          </BodySection>
        </div>
        <footer className={css(styles.footer)}>
          <Footer />
        </footer>
      </AppContext.UserContext.Provider>
    );
  }
}

App.defaultProps = {};

App.propTypes = {};

const styles = StyleSheet.create({
  body: {
    fontFamily: "sans-serif",
    fontWeight: "normal",
    paddingTop: "3rem",
    paddingLeft: "3rem",
    paddingBottom: "53%",
    borderBottom: "4px #dc3749 solid",
  },
  footer: {
    textAlign: "center",
    fontStyle: "italic",
    fontFamily: "sans-serif",
  },
});

export default App;
