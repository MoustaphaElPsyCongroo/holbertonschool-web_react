import logo from '../assets/logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from '../utils/utils'

function App() {
  return (
    <>
      <header className="App-header">
        <img src={logo} alt="Holberton logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label for="email">Email</label>
          <input type="email" id="email" name="email" />
          <label for="password">Password</label>
          <input type="password" id="password" name="password" />
          <button type="submit">OK</button>
        </form>
      </body>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </>
  );
}

export default App;
