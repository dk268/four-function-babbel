import React from "react";
import { connect } from "react-redux";

const Button = props => {
  const { buttonText, buttonType, buttonValue } = props;
  return <div id={buttonText + "-button-div"}>{buttonText}</div>;
};

const mapStateToProps = state => {};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);
