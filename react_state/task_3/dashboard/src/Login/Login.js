import React from "react";
import { StyleSheet, css } from "aphrodite";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      enableSubmit: false,
    };
  }

  handleLoginSubmit = (event) => {
    event.preventDefault();
    this.props.logIn();
  };

  handleChangeEmail = (event) => {
    /* setState's callback function is guaranteed to execute AFTER the state
    has been updated (React batches and runs setState asynchronously to
    improve performances. Plus we should treat state as if it was immutable,
    so we should never expect to get up to date values), allowing me to "react"
    to the new state value. In modern React I would do
    useEffect (() => {}, [state_value]).
    state_value being a dependency there, useEffect's content would run only
    after it updated. */
    this.setState(
      { email: event.target.value },
      this.handleSubmitButtonDisableStatus
    );
  };

  handleChangePassword = (event) => {
    this.setState(
      { password: event.target.value },
      this.handleSubmitButtonDisableStatus
    );
  };

  handleSubmitButtonDisableStatus = () => {
    // Ensure submit button is disabled if one of the inputs is empty, enabled
    // otherwise
    if (this.state.email && this.state.password) {
      this.setState({ enableSubmit: true });
    } else if (this.state.email || this.state.password) {
      this.setState({ enableSubmit: false });
    }
  };

  render() {
    return (
      <>
        <p>Login to access the full dashboard</p>
        <form className={css(styles.small)} onSubmit={this.handleLoginSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChangeEmail}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChangePassword}
          />
          <input type="submit" value="OK" disabled={!this.state.enableSubmit} />
        </form>
      </>
    );
  }
}

const styles = StyleSheet.create({
  margin: 0,
  small: {
    "@media (max-width: 900px)": {
      ":nth-child(1n) > input": {
        display: "block",
      },
    },
  },
});

export default Login;
