import React from "react";

const Button = props => {
  const { buttonText, buttonType, buttonValue } = props;
  return <div id={buttonText + "-button-div"}>{buttonText}</div>;
};

export default Button;
