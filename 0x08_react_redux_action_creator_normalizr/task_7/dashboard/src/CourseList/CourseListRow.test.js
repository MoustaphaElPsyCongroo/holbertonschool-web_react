import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";

describe("<CourseListRow />", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("renders the correct content when isHeader true and textSecondCell null", () => {
    const courseListRow = shallow(
      <CourseListRow isHeader={true} textFirstCell="ok" />
    );
    expect(courseListRow.find("th")).toHaveLength(1);
    expect(courseListRow.find("th").text()).toBe("ok");
    expect(courseListRow.find("th").prop("colSpan")).toBe("2");
  });

  it("renders the correct content when isHeader true and textSecondCell not null", () => {
    const courseListRow = shallow(
      <CourseListRow isHeader={true} textFirstCell="test" textSecondCell="ok" />
    );
    expect(courseListRow.find("th")).toHaveLength(2);
    expect(courseListRow.find("th").first().text()).toBe("test");
    expect(courseListRow.find("th").at(1).text()).toBe("ok");
  });

  it("renders the correct content when isHeader is false", () => {
    const courseListRow = shallow(
      <CourseListRow isHeader={false} textFirstCell="test" />
    );
    expect(courseListRow.find("tr td")).toHaveLength(3);
  });
});
