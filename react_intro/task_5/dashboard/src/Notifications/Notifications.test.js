import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('<Notifications />', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders three list items', () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.find('li')).toHaveLength(3);
  });

  it('renders the correct text', () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.find('p').text()).toBe('Here is the list of notifications');
  });
});
