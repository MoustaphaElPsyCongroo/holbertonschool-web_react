import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
  it('renders without crashing', () => {
    shallow(<NotificationItem />);
  });

  it('renders the correct html with only "value" prop', () => {
    const notificationItem = shallow(<NotificationItem type="default" value="ok" />);
    expect(notificationItem.text()).toEqual('ok')
  });

  it('renders the correct html with only "html" prop', () => {
    const notificationItem = shallow(<NotificationItem html={{__html: "<u>test</u>"}} />);
    expect(notificationItem.html()).toMatch(/<u>test<\/u>/)
  });

  it('renders the correct html with both "html" and "value" prop', () => {
    const notificationItem = shallow(<NotificationItem html={{__html: "<u>test</u>"}} value="ok" />);
    expect(notificationItem.text()).toEqual('ok');
    expect(notificationItem.html()).not.toMatch(/<u>test<\/u>/);
  })
})
