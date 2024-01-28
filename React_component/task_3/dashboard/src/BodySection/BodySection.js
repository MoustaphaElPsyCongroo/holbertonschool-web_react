import React from "react";

class BodySection extends React.Component {
  render() {
    const { title, children } = this.props;

    return (
      <>
        <div className="bodySection">
          <h2>{title}</h2>
          {children}
        </div>
      </>
    );
  }
}

BodySection.defaultProps = {
  title: "",
  children: undefined,
};

BodySection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default BodySection;
