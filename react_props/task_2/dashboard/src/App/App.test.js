import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

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
})
