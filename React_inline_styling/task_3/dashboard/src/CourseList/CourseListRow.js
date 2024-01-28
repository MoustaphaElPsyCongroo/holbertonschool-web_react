import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const rowStyle = {
  backgroundColor: "#f5f5f5ab",
};

const headerStyle = {
  backgroundColor: "#deb5b545",
};

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  if (isHeader === true) {
    if (textSecondCell === null) {
      return (
        <tr style={headerStyle}>
          <th className={css(styles.th)} colSpan="2">
            {textFirstCell}
          </th>
        </tr>
      );
    } else {
      return (
        <tr style={headerStyle}>
          <th className={css(styles.th)}>{textFirstCell}</th>
          <th className={css(styles.th)}>{textSecondCell}</th>
        </tr>
      );
    }
  }

  if (isHeader === false) {
    return (
      <tr style={rowStyle}>
        <td className={css(styles.td)}>{textFirstCell}</td>
        <td className={css(styles.td)}>{textSecondCell}</td>
      </tr>
    );
  }
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const styles = StyleSheet.create({
  th: {
    border: "1px solid",
    padding: "10px",
  },
  td: {
    padding: "3px",
  },
});

export default CourseListRow;
