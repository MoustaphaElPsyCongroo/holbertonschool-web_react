import CourseList from "./CourseList";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import CourseListRow from "./CourseListRow";

describe("<CourseList />", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("renders without crashing", () => {
    shallow(<CourseList />);
  });

  // it('renders five CourseListRows', () => {
  //   const courseList = shallow(<CourseList />);
  //   expect(courseList.find(CourseListRow)).toHaveLength(5);
  // });

  it("renders correctly if listCourses prop is null or empty", () => {
    const courseListNull = shallow(<CourseList />);
    const courseListEmpty = shallow(<CourseList listCourses={[]} />);
    expect(courseListNull.find(CourseListRow)).toHaveLength(1);
    expect(courseListEmpty.find(CourseListRow)).toHaveLength(1);
  });
});
