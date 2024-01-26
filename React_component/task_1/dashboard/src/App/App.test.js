/**
 * @jest-environment jsdom
 */
import { shallow, mount } from "enzyme";
import App from "./App";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";

describe("<App />", () => {
  beforeEach(() => {
    window.alert = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();

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
    const alertSpy = jest.spyOn(window, "alert");
    const keyboardDownEvent = new KeyboardEvent("keydown", {
      code: "KeyH",
      ctrlKey: true,
    });
    window.dispatchEvent(keyboardDownEvent);
    expect(alertSpy).toHaveBeenCalledWith('Logging you out');
    expect(logOut).toHaveBeenCalledTimes(1);

    app.unmount();
  });
});
