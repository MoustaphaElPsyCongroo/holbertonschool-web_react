import './App.css';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


function App() {
  return (
    <>
      <Notifications />
      <header className="App-header">
        <Header />
      </header>
      <body className="App-body">
        <Login />
      </body>
      <footer className="App-footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
