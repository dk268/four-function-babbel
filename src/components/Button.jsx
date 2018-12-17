import React from "react";
// import { connect } from "react-redux";

const Button = props => {
  const { buttonText, buttonFunc } = props;
  return (
    <div id={buttonText + "-button-div"} onClick={buttonFunc}>
      {buttonText}
    </div>
  );
};

export default Button;
