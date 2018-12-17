import React from "react";
import Button from "../Button";

const Row = props => {
  const { side, buttonArr } = props;
  return (
    <div className={"row-" + side + "-button-div"}>
      {buttonArr.map((button, idx) => (
        <Button
          className={side + "-button-div"}
          key={idx}
          buttonText={button.buttonText}
          buttonFunc={button.buttonFunc}
        />
      ))}{" "}
    </div>
  );
};

export default Row;
