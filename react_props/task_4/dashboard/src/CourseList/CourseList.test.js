import CourseList from "./CourseList";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe('<CourseList />', () => {
  it('renders without crashing', () => {
    shallow(<CourseList />);
  });

  it('renders five CourseListRows', () => {
    const courseList = shallow(<CourseList />);
    expect(courseList.find(CourseListRow)).toHaveLength(5);
  })
});
