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

  it("renders 2 input tags", () => {
    const login = shallow(<Login />);
    expect(login.find("input")).toHaveLength(2);
  });

  it("renders 2 label tags", () => {
    const login = shallow(<Login />);
    expect(login.find("label")).toHaveLength(2);
  });
});
