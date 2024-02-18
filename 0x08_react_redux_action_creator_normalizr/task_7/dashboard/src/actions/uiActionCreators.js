import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
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

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const loginRequest = (email, password) => {
  return async (dispatch) => {
    dispatch(login(email, password));

    let response;

    try {
      response = await fetch("../../dist/notifications.json");
    } catch (error) {
      dispatch(loginFailure());
      return;
    }

    dispatch(loginSuccess());
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
