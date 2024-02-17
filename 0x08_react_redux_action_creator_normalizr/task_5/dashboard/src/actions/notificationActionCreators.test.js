import {
  markAsRead,
  setNotificationFilter,
} from "./notificationActionCreators";
import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from "./notificationActionTypes";

describe("notificationActionCreators", () => {
  describe("markAsRead", () => {
    it("should return the right object", () => {
      expect(markAsRead(1)).toEqual({ type: MARK_AS_READ, index: 1 });
    });
  });

  describe("setNotificationFilter", () => {
    it("should return the right object", () => {
      expect(setNotificationFilter(NotificationTypeFilters.DEFAULT)).toEqual({
        type: SET_TYPE_FILTER,
        filter: NotificationTypeFilters.DEFAULT,
      });
    });
  });
});
