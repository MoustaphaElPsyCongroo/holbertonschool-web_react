export const getFullYear = () => {
  const year = new Date().getFullYear();
  return year;
}

export const getFooterCopy = (isIndex) => {
  if (isIndex) {
    return 'Holberton School';
  } else {
    return 'Holberton School main dashboard';
  }
}

export const getLatestNotification = () => {
  return '<strong>Urgent requirement</strong> - complete by EOD';
}
