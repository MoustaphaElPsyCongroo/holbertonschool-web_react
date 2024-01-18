function NotificationItem({ type, html, value }) {
  const liProps = {
    "data-priority": type,
    ...(!value && {dangerouslySetInnerHTML: {__html: html}})
  }

  return (
    <li
      {...liProps}
    >
      {value}
    </li>
  );
}

export default NotificationItem;
