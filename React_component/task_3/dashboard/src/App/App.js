import './App.css';
import React from 'react';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';


class App extends React.Component {
  logOutOnKeydown = (e) => {
    if (e.code === 'KeyH') {
      if (e.ctrlKey) {
        e.preventDefault();
        alert('Logging you out');
        this.props.logOut();
      }
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.logOutOnKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.logOutOnKeydown);
  }

  render() {
    const { isLoggedIn } = this.props;

    const listCourses = [
      {id: 1, name: "ES6", credit: 60},
      {id: 2, name: 'Webpack', credit: 20},
      {id: 3, name: 'React', credit: 40}
    ];

    const listNotifications = [
      {id: 1, type: 'default', value: 'New course available'},
      {id: 2, type: 'urgent', value: 'New resume available'},
      {id: 3, type: 'urgent', html: {__html: getLatestNotification()}}
    ];

    return (
      <>
        <Notifications listNotifications={listNotifications} />
        <header className="App-header">
          <Header />
        </header>
        <div className="App-body">
          {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
        </div>
        <footer className="App-footer">
          <Footer />
        </footer>
      </>
    );
  }

}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
}

export default App;
