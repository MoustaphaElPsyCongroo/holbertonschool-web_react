import { shallow } from "enzyme";
import Footer from "./Footer";

describe('<Footer />', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });

  it('renders at least the text "Copyright"', () => {
    const footer = shallow(<Footer />);
    expect(footer.find('p').text()).toMatch(/Copyright/);
  });
})
