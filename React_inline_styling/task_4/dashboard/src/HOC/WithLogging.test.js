/**
 * @jest-environment jsdom
 */
import WithLogging from "./WithLogging";
import Login from "../Login/Login";
import { mount } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";

describe("withLogging HOC", () => {
  beforeEach(() => {
    jest.spyOn(console, "log").mockImplementation(() => {});
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  describe("when the wrapped element is pure html", () => {
    it("should call console.log on mount and on unmount with a component name equal to 'Component'", () => {
      const Hoc = WithLogging(() => <p />);
      const renderedComponent = mount(<Hoc />);
      expect(console.log).toHaveBeenCalledWith(
        "Component Component is mounted"
      );

      renderedComponent.unmount();
      expect(console.log).toHaveBeenCalledWith(
        "Component Component is going to unmount"
      );
    });
  });

  describe("when the wrapped element is the Login component", () => {
    it('should call console.log on mount and on unmount with a component name equal to "Login"', () => {
      const EditedLogin = WithLogging(Login);
      const renderedEditedLogin = mount(<EditedLogin />);
      expect(console.log).toHaveBeenCalledWith("Component Login is mounted");

      renderedEditedLogin.unmount();
      expect(console.log).toHaveBeenCalledWith(
        "Component Login is going to unmount"
      );
    });
  });
});
