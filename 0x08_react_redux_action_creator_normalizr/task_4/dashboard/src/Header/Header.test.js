/**
 * @jest-environment jsdom
 */
import { shallow, mount } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import Header from "./Header";
import { user as defaultUser, UserContext } from "../App/AppContext";

describe("<Header />", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("renders without crashing", () => {
    shallow(<Header />);
  });

  it("renders a img tag", () => {
    const header = shallow(<Header />);
    expect(header.find("img")).toHaveLength(1);
  });

  it("renders a h1 tag", () => {
    const header = shallow(<Header />);
    expect(header.find("h1")).toHaveLength(1);
  });

  describe("logOut section", () => {
    it("is not created when default context value", () => {
      const header = mount(
        <UserContext.Provider value={{ defaultUser }}>
          <Header />
        </UserContext.Provider>
      );

      expect(header.find("#logoutSection")).toHaveLength(0);
    });

    it("is created when user is defined and logged in context", () => {
      const header = mount(
        <UserContext.Provider
          value={{
            user: { email: "test", password: "test", isLoggedIn: true },
          }}
        >
          <Header />
        </UserContext.Provider>
      );

      expect(header.find("#logoutSection")).toHaveLength(1);
    });

    it("clicking on the logOut link calls the logOut function", () => {
      const contextValue = {
        user: { email: "test", password: "test", isLoggedIn: true },
        logOut: jest.fn(),
      };
      const header = mount(
        <UserContext.Provider value={contextValue}>
          <Header />
        </UserContext.Provider>
      );

      const logOutLink = header.find("#logoutSection a");
      logOutLink.simulate("click");
      expect(contextValue.logOut).toHaveBeenCalled();
      expect(contextValue.logOut).toHaveBeenCalledTimes(1);

      jest.clearAllMocks();
    });
  });
});
