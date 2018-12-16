import React from "react";
import Button from "../Button";

const Row = props => {
  const { side, buttonArr } = props;
  return (
    <div className={"row-" + side + "-button-div"}>
      {buttonArr.map((buttonValue, idx) => (
        <Button className={side + "-button-div"} key={idx} buttonText={buttonValue} />
      ))}{" "}
    </div>
  );
};

export default Row;
