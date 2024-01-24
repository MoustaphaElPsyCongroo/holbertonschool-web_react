import './App.css';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';


function App({ isLoggedIn }) {

  return (
    <>
      <Notifications />
      <header className="App-header">
        <Header />
      </header>
      <div className="App-body">
        {isLoggedIn ? <CourseList /> : <Login />}
      </div>
      <footer className="App-footer">
        <Footer />
      </footer>
    </>
  );
}

App.defaultProps = {
  isLoggedIn: false
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
}

export default App;
