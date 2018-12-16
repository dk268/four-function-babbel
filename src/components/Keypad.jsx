import React, { Component } from "react";

class Keypad extends React.Component {
  render = () => {
    return (
      <div id="keypad-master-div">
        <div id="left-keypad-div">
          {leftButtonKeys.map((arr, idx) => (
            <div className="keyboard-left-row" key={idx} />
          ))}
        </div>
        <div id="right-keypad-div">hello</div>
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
