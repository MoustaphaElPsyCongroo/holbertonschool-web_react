import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  // it('renders a div with the class App-header', () => {
  //   const app = shallow(<App />);
  //   expect(app.find('.App-header')).toHaveLength(1);
  // });

  // it('renders a div with the class App-body', () => {
  //   const app = shallow(<App />);
  //   expect(app.find('.App-body')).toHaveLength(1);
  // });

  // it('renders a div with the class App-footer', () => {
  //   const app = shallow(<App />);
  //   expect(app.find('.App-footer')).toHaveLength(1);
  // });

})
