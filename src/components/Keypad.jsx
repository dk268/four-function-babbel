import React, { Component } from "react";
import Row from "./helpers/Row";
import { aCF, inputType } from "../store";
import { connect } from "react-redux";

class Keypad extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render = () => {
    // console.log(this.props.handleMemory, this.props.handleMemory("MR"));
    const leftButtonKeys = [
      [
        { buttonText: "MR", buttonFunc: this.props.handleMemory },
        { buttonText: "MC", buttonFunc: this.props.handleMemory },
        { buttonText: "MS", buttonFunc: this.props.handleMemory },
      ],
      [
        { buttonText: "7", buttonFunc: this.props.handleNumber },
        { buttonText: "8", buttonFunc: this.props.handleNumber },
        { buttonText: "9", buttonFunc: this.props.handleNumber },
      ],
      [
        { buttonText: "4", buttonFunc: this.props.handleNumber },
        { buttonText: "5", buttonFunc: this.props.handleNumber },
        { buttonText: "6", buttonFunc: this.props.handleNumber },
      ],
      [
        { buttonText: "1", buttonFunc: this.props.handleNumber },
        { buttonText: "2", buttonFunc: this.props.handleNumber },
        { buttonText: "3", buttonFunc: this.props.handleNumber },
      ],
      [
        { buttonText: "(-)", buttonFunc: this.props.handleNegate },
        { buttonText: "0", buttonFunc: this.props.handleNumber },
        { buttonText: ".", buttonFunc: this.props.handleDot },
      ],
    ];

    const rightButtonKeys = [
      [
        { buttonText: "C", buttonFunc: this.props.handleClear },
        { buttonText: "AC", buttonFunc: this.props.handleAllClear },
      ],
      [
        { buttonText: "/", buttonFunc: this.props.handleOperation },
        { buttonText: "*", buttonFunc: this.props.handleOperation },
      ],
      [
        { buttonText: "+", buttonFunc: this.props.handleOperation },
        { buttonText: "-", buttonFunc: this.props.handleOperation },
      ],
    ];
    return (
      <div id="keypad-master-div">
        <div id="left-keypad-div">
          {leftButtonKeys.map((arr, idx) => (
            <Row key={idx} className="keyboard-left-row" buttonArr={arr} side="left" />
          ))}
        </div>
        <div id="right-keypad-div">
          {rightButtonKeys.map((arr, idx) => (
            <Row key={idx} className="keyboard-right-row" buttonArr={arr} side="right" />
          ))}
          <button id="equals-keypad-button" onClick={this.props.handleEquals}>
            =
          </button>
        </div>
      </div>
    );
  };
}

const mapStateToProps = state => {
  const { display } = state;
  return {
    currentOp: display.currentOp,
    negative: display.negative,
    primaryDisplay: display.lowerDisplay,
  };
};

const mapDispatchToProps = dispatch => ({
  handleEquals: () => {
    dispatch(aCF(inputType.EQUALS));
  },
  handleMemory: memType => {
    dispatch(aCF(inputType.MEMORY, memType));
  },
  handleNumber: num => {
    dispatch(aCF(inputType.NUMBER, num));
  },
  handleNegate: () => {
    dispatch(aCF(inputType.NEGATE));
  },
  handleDot: () => {
    dispatch(aCF(inputType.DOT));
  },
  handleClear: () => {
    dispatch(aCF(inputType.CLEAR));
  },
  handleAllClear: () => {
    dispatch(aCF(inputType.ALL_CLEAR));
  },
  handleOperation: op => {
    dispatch(aCF(inputType.OPERATION, op));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Keypad);
