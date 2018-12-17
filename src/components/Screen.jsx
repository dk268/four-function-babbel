import React from "react";
import { connect } from "react-redux";

const Screen = props => {
  return (
    <div id="screen-master-div" className="screen-div">
      <div id="screen-div-upper" className="screen-div">
        <div id="screen-div-memory" className="screen-div">
          {props.memoryDisplay}
        </div>
        <div id="screen-div-operator" className="screen-div">
          {(!props.operationDisplay ? "" : props.previousNum + " ") +
            props.operationDisplay +
            " " +
            props.currentNum}
        </div>
      </div>
      <div id="screen-div-lower">
        <div id="screen-div-negative" className="screen-div">
          {props.negativeDisplay ? "-" : ""}
        </div>
        <div id="screen-div-primary" className="screen-div">
          {props.primaryDisplay ? props.primaryDisplay : "0"}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const { display } = state;
  return {
    memoryDisplay: display.memoryDisplay,
    operationDisplay: display.operationDisplay === "CLEAR" ? "" : display.operationDisplay,
    negativeDisplay: display.negative < 1,
    primaryDisplay: display.lowerDisplay,
    previousNum: display.previousNum,
    currentNum: display.lowerDisplay,
  };
};

export default connect(mapStateToProps)(Screen);
