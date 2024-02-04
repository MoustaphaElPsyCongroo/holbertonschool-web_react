/**
 * @jest-environment jsdom
 */
import { shallow, mount } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import { act } from "react-dom/test-utils";
import App from "./App";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";

describe("<App />", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("contains the Notifications component", () => {
    const app = shallow(<App />);
    expect(app.exists(Notifications)).toBeTruthy();
  });

  it("contains the Header component", () => {
    const app = shallow(<App />);
    expect(app.contains(<Header />)).toBeTruthy();
  });

  it("contains the Login component", () => {
    const app = shallow(<App />);
    expect(app.find(Login)).toBeTruthy();
  });

  it("contains the Footer component", () => {
    const app = shallow(<App />);
    expect(app.contains(<Footer />)).toBeTruthy();
  });

  describe("when logged in", () => {
    it("renders the correct component when user", () => {
      const app = shallow(<App />);
      app.instance().logIn("test", "test");

      expect(app.find(Login)).toHaveLength(0);
      expect(app.exists(CourseList)).toBeTruthy();

      app.instance().logOut();
    });
  });

  describe("when logged out", () => {
    it("doesn't render the CourseList", () => {
      const app = shallow(<App />);
      expect(app.exists(CourseList)).not.toBeTruthy();
    });
  });

  describe("logIn method", () => {
    it("updates the state correctly", () => {
      const app = shallow(<App />);
      app.instance().logIn("testingLoginEmail", "testingLoginPassword");

      expect(app.state("user").email).toBe("testingLoginEmail");
      expect(app.state("user").password).toBe("testingLoginPassword");
      expect(app.state("user").isLoggedIn).toBeTruthy();
    });
  });

  describe("logOut method", () => {
    beforeEach(() => {
      jest.spyOn(window, "alert").mockImplementation(() => {});
    });

    afterEach(() => {
      jest.clearAllMocks();
      jest.restoreAllMocks();
    });

    it("updates the state correctly", () => {
      const app = shallow(<App />);
      app.instance().logIn("testingLogout", "testingLogout");
      app.instance().logOut();

      expect(app.state("user").email).toBeFalsy();
      expect(app.state("user").password).toBeFalsy();
      expect(app.state("user").isLoggedIn).toBeFalsy();
    });

    it("gets called and alert displayed on ctrl + h", () => {
      const app = mount(<App />);
      const keyboardDownEvent = new KeyboardEvent("keydown", {
        code: "KeyH",
        ctrlKey: true,
      });

      act(() => {
        app.instance().logIn("test", "test");
        window.dispatchEvent(keyboardDownEvent);
      });
      expect(window.alert).toHaveBeenCalledWith("Logging you out");
      expect(app.state("user").email).toBeFalsy();
      expect(app.state("user").password).toBeFalsy();
      expect(app.state("user").isLoggedIn).toBeFalsy();

      app.unmount();
    });
  });

  describe("displayDrawer state", () => {
    it("should be false by default", () => {
      const app = shallow(<App />);
      expect(app.state("displayDrawer")).toBeFalsy();
    });

    it("handleDisplayDrawer method should set it to true", () => {
      const app = shallow(<App />);
      app.instance().handleDisplayDrawer();
      expect(app.state("displayDrawer")).toBeTruthy();
    });

    it("handleHideDrawer method should set it to false", () => {
      const app = shallow(<App />);
      app.instance().handleHideDrawer();
      expect(app.state("displayDrawer")).toBeFalsy();
    });
  });
});
