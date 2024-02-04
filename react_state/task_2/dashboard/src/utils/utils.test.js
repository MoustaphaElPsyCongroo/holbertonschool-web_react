import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('getFullYear', () => {
  it('should return the correct year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
  });
});

describe('getFooterCopy', () => {
  it('should return the correct message when arg is true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
  });

  it('should return the correct message when arg is false', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });
});

describe('getLatestNotification', () => {
  it('should return the correct string', () => {
    const correctString = '<strong>Urgent requirement</strong> - complete by EOD';
    expect(getLatestNotification()).toBe(correctString);
  });
});
