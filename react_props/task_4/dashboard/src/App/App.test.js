import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('contains the Notifications component', () => {
    const app = shallow(<App />);
    expect(app.contains(<Notifications />)).toBeTruthy();
  });

  it('contains the Header component', () => {
    const app = shallow(<App />);
    expect(app.contains(<Header />)).toBeTruthy();
  });

  it('contains the Login component', () => {
    const app = shallow(<App />);
    expect(app.contains(<Login />)).toBeTruthy();
  });

  it('contains the Footer component', () => {
    const app = shallow(<App />);
    expect(app.contains(<Footer />)).toBeTruthy();
  });

  it("doesn't render the CourseList when user is not logged in", () => {
    const app = shallow(<App />);
    expect(app.contains(<CourseList />)).not.toBeTruthy();
  });

  it('renders the correct component when user is logged in', () => {
    const app = shallow(<App isLoggedIn={true} />);
    expect(app.contains(<Login />)).not.toBeTruthy();
    expect(app.contains(<CourseList />)).toBeTruthy();
  });
})
