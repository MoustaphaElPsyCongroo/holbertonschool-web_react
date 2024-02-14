import * as notifications from "../../notifications.json";
import { normalize, schema } from "normalizr";

export function getAllNotificationsByUser(userId) {
  const notificationsList = Object.values(notifications);
  return notificationsList
    .filter((notification) => notification.author?.id === userId)
    .map((remainingNotif) => remainingNotif.context);
}

const user = new schema.Entity("users");

const message = new schema.Entity("messages", {}, { idAttribute: "guid" });

const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

export const normalizedNotifications = normalize(notifications, [notification]);
