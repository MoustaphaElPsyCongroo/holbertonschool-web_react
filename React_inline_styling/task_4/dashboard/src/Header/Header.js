import logo from "../assets/logo.jpg";
import { StyleSheet, css } from "aphrodite";

function Header() {
  return (
    <header className={css(styles.header)}>
      <img className={css(styles.logo)} src={logo} alt="Holberton logo" />
      <h1>School dashboard</h1>
    </header>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    color: "#dc3749",
    fontWeight: "bold",
    fontFamily: "sans-serif",
    borderBottom: "4px #dc3749 solid",
  },
  logo: {
    height: "250px",
  },
});

export default Header;
