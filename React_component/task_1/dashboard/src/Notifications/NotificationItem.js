import PropTypes from 'prop-types';

function NotificationItem({ type, html, value }) {
  const liProps = {
    "data-priority": type,
    ...(!value && {dangerouslySetInnerHTML: html})
  }

  return (
    <li
      {...liProps}
    >
      {value}
    </li>
  );
}

NotificationItem.defaultProps = {
  type: 'default'
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string
}

export default NotificationItem;
