import {
  login,
  loginRequest,
  loginSuccess,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginFailure,
} from "./uiActionCreators";

import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from "./uiActionTypes";
import fetchMock from "fetch-mock";
import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";

describe("uiActionCreators", () => {
  describe("login", () => {
    it("should return the right object", () => {
      expect(login("hello", "world")).toEqual({
        type: LOGIN,
        user: { email: "hello", password: "world" },
      });
    });
  });

  describe("loginRequest", () => {
    const mockStore = configureStore([thunk]);
    const API_URL = "../../dist/notifications.json";

    it("should dispatch the LOGIN and LOGIN_SUCCESS actions on success", () => {
      const store = mockStore({});
      fetchMock.mock(API_URL, 200);

      return store.dispatch(loginRequest("email", "password")).then(() => {
        const actions = store.getActions();
        expect(actions).toContainEqual(login("email", "password"));
        expect(actions).toContainEqual(loginSuccess());
        expect(actions).not.toContainEqual(loginFailure());

        fetchMock.restore();
      });
    });

    it("should dispatch the LOGIN and LOGIN_FAILURE actions on failure", () => {
      const store = mockStore({});
      fetchMock.mock(API_URL, { throws: "any error" });

      return store.dispatch(loginRequest("email", "password")).then(() => {
        const actions = store.getActions();
        expect(actions).toContainEqual(login("email", "password"));
        expect(actions).toContainEqual(loginFailure());
        expect(actions).not.toContainEqual(loginSuccess());

        fetchMock.restore();
      });
    });
  });

  describe("logout", () => {
    it("should return the right object", () => {
      expect(logout()).toEqual({ type: LOGOUT });
    });
  });

  describe("displayNotificationDrawer", () => {
    it("should return the right object", () => {
      expect(displayNotificationDrawer()).toEqual({
        type: DISPLAY_NOTIFICATION_DRAWER,
      });
    });
  });

  describe("hideNotificationDrawer", () => {
    it("should return the right object", () => {
      expect(hideNotificationDrawer()).toEqual({
        type: HIDE_NOTIFICATION_DRAWER,
      });
    });
  });
});
