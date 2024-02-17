import * as notifications from "../../notifications.json";
import { normalize, schema } from "normalizr";

const user = new schema.Entity("users");

const message = new schema.Entity("messages", {}, { idAttribute: "guid" });

const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

export const normalizedNotifications = normalize(notifications, [notification]);

export function getAllNotificationsByUser(userId) {
  const notifications = normalizedNotifications.entities.notifications;
  const messages = normalizedNotifications.entities.messages;
  const allNotificationsByUser = [];

  for (const notification in notifications) {
    if (notifications[notification].author === userId) {
      allNotificationsByUser.push(
        messages[notifications[notification].context]
      );
    }
  }
  return allNotificationsByUser;
}
