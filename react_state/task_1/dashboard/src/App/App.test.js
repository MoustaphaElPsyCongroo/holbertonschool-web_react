/**
 * @jest-environment jsdom
 */
import { shallow, mount } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import App from "./App";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";

describe("<App />", () => {
  beforeEach(() => {
    jest.spyOn(window, "alert").mockImplementation(() => {});
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
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
    expect(app.contains(<Login />)).toBeTruthy();
  });

  it("contains the Footer component", () => {
    const app = shallow(<App />);
    expect(app.contains(<Footer />)).toBeTruthy();
  });

  it("doesn't render the CourseList when user is not logged in", () => {
    const app = shallow(<App />);
    expect(app.exists(CourseList)).not.toBeTruthy();
  });

  it("renders the correct component when user is logged in", () => {
    const app = shallow(<App isLoggedIn={true} />);
    expect(app.contains(<Login />)).not.toBeTruthy();
    expect(app.exists(CourseList)).toBeTruthy();
  });

  it("calls the logOut function and displays an alert on ctrl + h", () => {
    const logOut = jest.fn();
    const app = mount(<App logOut={logOut} />);
    const keyboardDownEvent = new KeyboardEvent("keydown", {
      code: "KeyH",
      ctrlKey: true,
    });
    window.dispatchEvent(keyboardDownEvent);
    expect(window.alert).toHaveBeenCalledWith("Logging you out");
    expect(logOut).toHaveBeenCalledTimes(1);

    app.unmount();
  });

  it("its state displayDrawer should be false by default", () => {
    const app = shallow(<App />);
    expect(app.state("displayDrawer")).toBeFalsy();
  });

  it("its method handleDisplayDrawer should set the displayDrawer state to true", () => {
    const app = shallow(<App />);
    app.instance().handleDisplayDrawer();
    expect(app.state("displayDrawer")).toBeTruthy();
  });

  it("its method handleHideDrawer should set the displayDrawer state to false", () => {
    const app = shallow(<App />);
    app.instance().handleHideDrawer();
    expect(app.state("displayDrawer")).toBeFalsy();
  });
});
