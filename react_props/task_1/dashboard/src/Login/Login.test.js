import { shallow } from "enzyme";
import Login from "./Login";

describe('<Login />', () => {
  it('renders without crashing', () => {
    shallow(<Login />);
  });

  it('renders 2 input tags', () => {
    const login = shallow(<Login />);
    expect(login.find('input')).toHaveLength(2);
  });

  it('renders 2 label tags', () => {
    const login = shallow(<Login />);
    expect(login.find('label')).toHaveLength(2);
  });
})
