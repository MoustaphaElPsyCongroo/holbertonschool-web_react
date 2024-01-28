import React from "react";
import BodySection from "./BodySection";
import PropTypes from "prop-types";

class BodySectionWithMarginBottom extends React.Component {
  render() {
    return (
      <>
        <div className="bodySectionWithMargin">
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

export default BodySectionWithMarginBottom;
