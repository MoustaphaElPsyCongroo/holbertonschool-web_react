/**
 * @jest-environment jsdom
 */
import { shallow, mount } from "enzyme";
import { UserContext } from "../App/AppContext";
import Footer from "./Footer";

describe("<Footer />", () => {
  it("renders without crashing", () => {
    shallow(<Footer />);
  });

  it('renders at least the text "Copyright"', () => {
    const footer = mount(<Footer />);
    expect(footer.find("p").first().text()).toMatch(/Copyright/);
  });

  it("doesn't display the Contact us link when user is logged out within the context", () => {
    const footer = mount(
      <UserContext.Provider
        value={{
          user: {
            isLoggedIn: false,
          },
        }}
      >
        <Footer />
      </UserContext.Provider>
    );

    expect(footer.find("a")).toHaveLength(0);
  });

  it("displays the Contact us link when user is logged in withing the context", () => {
    const footer = mount(
      <UserContext.Provider
        value={{
          user: {
            isLoggedIn: true,
          },
        }}
      >
        <Footer />
      </UserContext.Provider>
    );

    expect(footer.find("a")).toHaveLength(1);
  });
});
