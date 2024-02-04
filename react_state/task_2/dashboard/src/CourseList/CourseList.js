import { StyleSheet, css } from "aphrodite";
import CourseListRow from "./CourseListRow";
import PropTypes from "prop-types";
import CourseShape from "./CourseShape";

function CourseList({ listCourses }) {
  if (!listCourses?.length) {
    return (
      <table id="CourseList" className={css(styles.courseList)}>
        <thead>
          <CourseListRow
            textFirstCell="No course available yet"
            isHeader={true}
          />
        </thead>
      </table>
    );
  } else {
    return (
      <table id="CourseList" className={css(styles.courseList)}>
        <thead>
          <CourseListRow textFirstCell="Available courses" isHeader={true} />
          <CourseListRow
            textFirstCell="Course name"
            textSecondCell="Credit"
            isHeader={true}
          />
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
  listCourses: [],
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

const styles = StyleSheet.create({
  courseList: {
    width: "100%",
  },
  table: {
    border: "1px solid",
    borderCollapse: "collapse",
    padding: "10px",
  },
});

export default CourseList;
