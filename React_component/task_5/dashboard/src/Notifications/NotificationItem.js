import PropTypes from "prop-types";
import React from "react";

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

export default NotificationItem;
