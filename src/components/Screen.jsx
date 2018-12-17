import React from "react";
import { connect } from "react-redux";

const Screen = props => {
  const __ = "";
  <div id="screen-master-div" className="screen-div">
    <div id="screen-div-upper" className="screen-div">
      <div id="screen-div-memory" className="screen-div">
        {props.memoryDisplay}
      </div>
      <div id="screen-div-operator" className="screen-div">
        {props.operationDisplay}
      </div>
    </div>
    <div id="screen-div-lower">
      <div id="screen-div-negative" className="screen-div">
        {props.negativeDisplay? "-" : ''}
      </div>
      <div id="screen-div-primary" className="screen-div">
        {props.primaryDisplay}
      </div>
    </div>
  </div>;
};

export default Screen;

const mapStateToProps = state => {
  const { input } = state;
  return {
    memoryDisplay: input.memoryDisplay,
    operationDisplay: input.operationDisplay,
    negativeDisplay: state.negative < 1,
    primaryDisplay: state.lowerDisplay,
  };
};

export default connect(mapStateToProps)(Screen);