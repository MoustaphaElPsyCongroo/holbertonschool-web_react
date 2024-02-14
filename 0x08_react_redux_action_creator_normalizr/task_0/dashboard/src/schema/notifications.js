import * as notifications from "../../notifications.json";

export function getAllNotificationsByUser(userId) {
  const notificationsList = Object.values(notifications);
  return notificationsList
    .filter((notification) => notification.author?.id === userId)
    .map((remainingNotif) => remainingNotif.context);
}
