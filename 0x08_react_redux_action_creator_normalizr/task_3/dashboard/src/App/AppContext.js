import React from "react";

export const user = {
  email: "",
  password: "",
  isLoggedIn: false,
};

export const logOut = () => {};

export const UserContext = React.createContext({
  user,
  logOut,
});
