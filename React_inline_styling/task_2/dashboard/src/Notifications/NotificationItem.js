import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, css } from "aphrodite";

const NotificationItem = React.memo(function NotificationItem({
  type,
  html,
  value,
  markAsRead,
  id,
}) {
  const liProps = {
    "data-priority": type,
    ...(!value && { dangerouslySetInnerHTML: html }),
    className: css(type === "default" ? styles.default : styles.urgent),
  };

  return (
    <li {...liProps} onClick={() => markAsRead(id)}>
      {value}
    </li>
  );
});

NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => {},
  id: 0,
};

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  markAsRead: PropTypes.func,
};

const styles = StyleSheet.create({
  default: {
    color: "darkblue",
  },
  urgent: {
    color: "red",
  },
});

export default NotificationItem;
