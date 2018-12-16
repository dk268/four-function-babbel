import React, { Component } from "react";
import Row from "./helpers/Row";

class Keypad extends React.Component {
  render = () => {
    return (
      <div id="keypad-master-div">
        <div id="left-keypad-div">
          {leftButtonKeys.map((arr, idx) => (
            <Row key={idx} className="keyboard-left-row" buttonArr={arr} />
          ))}
        </div>
        <div id="right-keypad-div">
          {rightButtonKeys.map((arr, idx) => (
            <Row key={idx} className="keyboard-right-row" buttonArr={arr} />
          ))}
        </div>
        <div id="equals-keypad-div">=</div>
      </div>
    );
  };
}

const leftButtonKeys = [
  ["MR", "MC", "MS"],
  ["7", "8", "9"],
  ["4", "5", "6"],
  ["1", "2", "3"],
  ["(-)", "0", "."],
];

const rightButtonKeys = [["C", "AC"], ["/", "*"], ["+", "-"]];

export default Keypad;
