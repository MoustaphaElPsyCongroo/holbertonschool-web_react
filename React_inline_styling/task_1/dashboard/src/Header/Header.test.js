import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import Header from "./Header";

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
});
