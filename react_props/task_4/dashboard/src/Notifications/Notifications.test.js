import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders three NotificationItem element', () => {
    const notifications = shallow(<Notifications displayDrawer={true} />);
    expect(notifications.find(NotificationItem)).toHaveLength(3);
  });

  it('renders the correct text', () => {
    const notifications = shallow(<Notifications displayDrawer={true} />);
    expect(notifications.find('p').text()).toBe('Here is the list of notifications');
  });

  it('its first NotificationItem element renders the right html', () => {
    const notifications = shallow(<Notifications displayDrawer={true} />);
    expect(notifications.find(NotificationItem).first().html()).toMatch(/New course available/);
  });

  it('renders a menuItem when displayDrawer prop is false', () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.find('.menuItem')).toHaveLength(1);
  });

  it("doesn't render a div.Notifications when displayDrawer prop is false", () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.find('.Notifications')).toHaveLength(0);
  });

  it('renders a menuItem when displayDrawer prop is true', () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.find('.menuItem')).toHaveLength(1);
  });

  it('renders a div.Notifications when displayDrawer prop is true', () => {
    const notifications = shallow(<Notifications displayDrawer={true} />);
    expect(notifications.find('.Notifications')).toHaveLength(1);
  });
});
