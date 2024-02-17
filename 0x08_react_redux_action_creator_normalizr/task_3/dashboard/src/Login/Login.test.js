import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import Login from "./Login";

describe("<Login />", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("renders without crashing", () => {
    shallow(<Login />);
  });

  it("renders 3 input tags", () => {
    const login = shallow(<Login />);
    expect(login.find("input")).toHaveLength(3);
  });

  it("renders 2 label tags", () => {
    const login = shallow(<Login />);
    expect(login.find("label")).toHaveLength(2);
  });

  describe("submit button", () => {
    let login;
    let input1;
    let input2;

    beforeEach(() => {
      login = shallow(<Login />);
      input1 = login.find('input[id="email"]');
      input2 = login.find('input[id="password"]');
    });

    it("is disabled by default", () => {
      const submitButton = login.find('input[type="submit"]');

      expect(login.state("enableSubmit")).toBeFalsy();
      expect(submitButton.prop("disabled")).toBeTruthy();
    });

    it("is disabled when one input is empty", () => {
      let submitButton;

      input1.simulate("change", { target: { value: "test" } });
      submitButton = login.find('input[type="submit"]');

      expect(login.state("enableSubmit")).toBeFalsy();
      expect(submitButton.prop("disabled")).toBeTruthy();

      input2.simulate("change", { target: { value: "test" } });
      input1.simulate("change", { target: { value: "" } });
      submitButton = login.find('input[type="submit"]');

      expect(login.state("enableSubmit")).toBeFalsy();
      expect(submitButton.prop("disabled")).toBeTruthy();
    });

    it("is enabled when the two inputs have a value", () => {
      let submitButton;

      input1.simulate("change", { target: { value: "test" } });
      input2.simulate("change", { target: { value: "test1" } });
      submitButton = login.find('input[type="submit"]');

      expect(login.state("enableSubmit")).toBeTruthy();
      expect(submitButton.prop("disabled")).toBeFalsy();
    });
  });
});
