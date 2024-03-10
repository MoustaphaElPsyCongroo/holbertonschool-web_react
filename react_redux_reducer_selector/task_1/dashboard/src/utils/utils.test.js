import { getFullYear, getFooterCopy, getLatestNotification } from './utils'

describe('Utils tests', () => {
  test('getFullYear should return the good year', () => {
    const year = getFullYear();
    expect(year).toEqual(getFullYear());
  });

  test('getFooterCopy should return holberton school if true', () => {
    const index = true;
    expect(getFooterCopy(index)).toEqual('Holberton School');
  });

  test('getFooterCopy should return Holberton School main dashboard if false', () => {
    const index = false;
    expect(getFooterCopy(index)).toEqual('Holberton School main dashboard');
  });

  test('should return an html string', () => {
    const LatestNotification = getLatestNotification();
    expect(LatestNotification).toEqual('<strong>Urgent requirement</strong> - complete by EOD');
  });
});
