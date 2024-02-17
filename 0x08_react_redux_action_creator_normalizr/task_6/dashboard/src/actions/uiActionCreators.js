import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from "./uiActionTypes";

export const login = (email, password) => ({
  type: LOGIN,
  user: { email, password },
});

export const loginThunkCaller = (email, password) => {
  return (dispatch) => {
    dispatch(login(email, password));
  };
};

export const logout = () => ({
  type: LOGOUT,
});

export const logoutThunkCaller = () => {
  return (dispatch) => {
    dispatch(logout());
  };
};

export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER,
});

export const displayNotificationDrawerThunkCaller = () => {
  return (dispatch) => {
    dispatch(displayNotificationDrawer());
  };
};

export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER,
});

export const hideNotificationDrawerThunkCaller = () => {
  return (dispatch) => {
    dispatch(hideNotificationDrawer());
  };
};
