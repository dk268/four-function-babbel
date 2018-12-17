import React from "react";
import Screen from "./Screen";
import Keypad from "./Keypad";

const Calculator = props => {
  return (
    <div id="calculator-outer-div">
      <Screen />
      <div id="buttons-outer-div">
        <Keypad />
      </div>
    </div>
  );
};

export default Calculator;
