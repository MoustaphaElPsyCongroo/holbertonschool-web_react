import logo from "../assets/logo.jpg";
import { StyleSheet, css } from "aphrodite";

function Header() {
  return (
    <>
      <img className={css(styles.logo)} src={logo} alt="Holberton logo" />
      <h1>School dashboard</h1>
    </>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: "250px",
  },
});

export default Header;
