import React from "react";

const Row = props => {
  const { side, buttonArr } = props;
  return (
    <div className={"row-" + side + "-button-div"}>
      {buttonArr.map((buttonValue, idx) => (
        <div className={side + "-button-div"} key={idx}>
          {buttonValue}
        </div>
      ))}{" "}
    </div>
  );
};

export default Row;
