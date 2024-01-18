import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders three NotificationItem element', () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.find(NotificationItem)).toHaveLength(3);
  });

  it('renders the correct text', () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.find('p').text()).toBe('Here is the list of notifications');
  });

  it('its first NotificationItem element renders the right html', () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.find(NotificationItem).first().html()).toMatch(/New course available/);
  })
});
