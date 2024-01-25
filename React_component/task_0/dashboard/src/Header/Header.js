import logo from '../assets/logo.jpg';
import './Header.css';


function Header() {
  return (
    <>
      <img src={logo} alt="Holberton logo" />
      <h1>School dashboard</h1>
    </>
  );
}

export default Header;
