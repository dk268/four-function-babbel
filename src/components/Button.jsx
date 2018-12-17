import React from "react";
const Button = props => {
  const { buttonText, buttonFunc } = props;
  return (
    <div id={buttonText + "-button-div"} onClick={e => buttonFunc(buttonText)}>
      {buttonText}
    </div>
  );
};

export default Button;
