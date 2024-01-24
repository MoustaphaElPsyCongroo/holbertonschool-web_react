import CourseListRow from "./CourseListRow";
import './CourseList.css'
import PropTypes from 'prop-types';
import CourseShape from "./CourseShape";

function CourseList({ listCourses }) {
  if (!listCourses?.length) {
    return (
    <table id="CourseList">
      <thead>
        <CourseListRow textFirstCell="No course available yet" isHeader={true} />
      </thead>
    </table>
    );
  } else {
    return (
      <table id="CourseList">
        <thead>
          <CourseListRow textFirstCell="Available courses" isHeader={true} />
          <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
        </thead>
        <tbody>
          {listCourses.map((course) => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

CourseList.defaultProps = {
  listCourses: []
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
}

export default CourseList;
