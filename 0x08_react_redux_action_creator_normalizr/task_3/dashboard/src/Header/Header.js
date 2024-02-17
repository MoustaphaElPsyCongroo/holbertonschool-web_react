import React from "react";
import logo from "../assets/logo.jpg";
import { StyleSheet, css } from "aphrodite";
import { UserContext } from "../App/AppContext";

class Header extends React.Component {
  static contextType = UserContext;
  render() {
    return (
      <>
        <header className={css(styles.header)}>
          <img className={css(styles.logo)} src={logo} alt="Holberton logo" />
          <h1>School dashboard</h1>
        </header>
        {this.context?.user?.isLoggedIn && (
          <p id="logoutSection">
            Welcome {this.context.user.email} (
            <a href="#" onClick={this.context.logOut}>
              logout
            </a>
            )
          </p>
        )}
      </>
    );
  }
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
