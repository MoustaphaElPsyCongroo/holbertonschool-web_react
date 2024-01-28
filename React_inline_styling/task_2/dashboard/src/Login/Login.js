import { StyleSheet } from "aphrodite";

function Login() {
  return (
    <>
      <p>Login to access the full dashboard</p>
      <form>
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
});

export default Login;
