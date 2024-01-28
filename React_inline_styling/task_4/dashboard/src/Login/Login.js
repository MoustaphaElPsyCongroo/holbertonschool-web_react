import { StyleSheet, css } from "aphrodite";

function Login() {
  return (
    <>
      <p>Login to access the full dashboard</p>
      <form className={css(styles.small)}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <button type="submit">OK</button>
      </form>
    </>
  );
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
