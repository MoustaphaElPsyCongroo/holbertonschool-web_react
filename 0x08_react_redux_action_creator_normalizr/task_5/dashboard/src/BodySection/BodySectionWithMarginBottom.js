import React from "react";
import { StyleSheet, css } from "aphrodite";
import BodySection from "./BodySection";
import PropTypes from "prop-types";

class BodySectionWithMarginBottom extends React.Component {
  render() {
    return (
      <>
        <div className={css(styles.bodySectionWithMargin)}>
          <BodySection {...this.props} />
        </div>
      </>
    );
  }
}

BodySectionWithMarginBottom.defaultProps = {
  title: "",
  children: undefined,
};

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: "40px",
  },
});

export default BodySectionWithMarginBottom;
