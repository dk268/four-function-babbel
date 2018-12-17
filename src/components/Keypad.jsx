import React, { Component } from "react";
import Row from "./helpers/Row";
import { aCF, inputType } from "../store";
import { connect } from "react-redux";

class Keypad extends Component {
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
          <button id="equals-keypad-button" onClick={handleEquals}>
            =
          </button>
        </div>
      </div>
    );
  };
}

const handleEquals = () => dispatch => {
  dispatch(aCF(inputType.EQUALS));
  console.log("hiii!");
};

const handleMemory = memType => dispatch => {
  dispatch(aCF(inputType.MEMORY, memType));
};

const handleNumber = num => dispatch => {
  dispatch(aCF(inputType.NUMBER, num));
};

const handleNegate = () => dispatch => {
  dispatch(aCF(inputType.NEGATE));
};

const handleDot = () => dispatch => {
  dispatch(aCF(inputType.DOT));
};

const leftButtonKeys = [
  [
    { buttonText: "MR", buttonFunc: handleMemory("MR") },
    { buttonText: "MC", buttonFunc: handleMemory("MC") },
    { buttonText: "MS", buttonFunc: handleMemory("MS") },
  ],
  [
    { buttonText: "7", buttonFunc: handleNumber("7") },
    { buttonText: "8", buttonFunc: handleNumber("8") },
    { buttonText: "9", buttonFunc: handleNumber("9") },
  ],
  [
    { buttonText: "4", buttonFunc: handleNumber("4") },
    { buttonText: "5", buttonFunc: handleNumber("5") },
    { buttonText: "6", buttonFunc: handleNumber("6") },
  ],
  [
    { buttonText: "1", buttonFunc: handleNumber("1") },
    { buttonText: "2", buttonFunc: handleNumber("2") },
    { buttonText: "3", buttonFunc: handleNumber("3") },
  ],
  [
    { buttonText: "(-)", buttonFunc: handleNegate() },
    { buttonText: "0", buttonFunc: handleNumber("0") },
    { buttonText: ".", buttonFunc: handleDot() },
  ],
];

const handleClear = () => dispatch => {
  dispatch(aCF(inputType.CLEAR));
};

const handleAllClear = () => dispatch => {
  dispatch(aCF(inputType.ALL_CLEAR));
};

const handleOperation = op => dispatch => {
  dispatch(aCF(inputType.OPERATION, op));
};

const rightButtonKeys = [
  [
    { buttonText: "C", buttonFunc: handleClear() },
    { buttonText: "AC", buttonFunc: handleAllClear() },
  ],
  [
    { buttonText: "/", buttonFunc: handleOperation("divided by") },
    { buttonText: "*", buttonFunc: handleOperation("times") },
  ],
  [
    { buttonText: "+", buttonFunc: handleOperation("plus") },
    { buttonText: "-", buttonFunc: handleOperation("minus") },
  ],
];

const mapStateToProps = state => {
  const { display } = state;
  return {
    currentOp: display.currentOp,
    negative: display.negative,
    primaryDisplay: display.lowerDisplay,
  };
};

const mapDispatchToProps = {
  handleEquals,
  handleAllClear,
  handleClear,
  handleDot,
  handleMemory,
  handleNegate,
  handleNumber,
  handleOperation,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Keypad);
