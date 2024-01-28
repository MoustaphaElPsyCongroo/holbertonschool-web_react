import React from "react";
import { StyleSheet, css } from "aphrodite";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PropTypes from "prop-types";
import { getLatestNotification } from "../utils/utils";

class App extends React.Component {
  logOutOnKeydown = (e) => {
    if (e.code === "KeyH") {
      if (e.ctrlKey) {
        e.preventDefault();
        alert("Logging you out");
        this.props.logOut();
      }
    }
  };

  componentDidMount() {
    window.addEventListener("keydown", this.logOutOnKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.logOutOnKeydown);
  }

  render() {
    const { isLoggedIn } = this.props;

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

    return (
      <>
        <Notifications listNotifications={listNotifications} />
        <Header />
        <div className={css(styles.body)}>
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>Here are some fresh news.</p>
          </BodySection>
        </div>
        <footer className={css(styles.footer)}>
          <Footer />
        </footer>
      </>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

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
