import {
  login,
  logout,
  displayNotificatioNDrawer,
  hideNotificationDrawer,
} from "./uiActionCreators";

import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from "./uiActionTypes";

describe("uiActionCreators", () => {
  describe("login", () => {
    it("should return the right object", () => {
      expect(login("hello", "world")).toEqual({
        type: LOGIN,
        user: { email: "hello", password: "world" },
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
      expect(displayNotificatioNDrawer()).toEqual({
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
