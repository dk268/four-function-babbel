import numberDiscriminator from "./helpers/numberDiscriminator";
import { inputType } from ".";

const initialState = {
  upperDisplay: "",
  lowerDisplay: "0",
  minus: false,
  inputType: "CLEAR",
  currentOp: "CLEAR",
};

const display = (state = initialState, action) => {
  switch (action.type) {
    case inputType.NUMBER: {
      return {
        ...state,
        upperDisplay: numberDiscriminator(state.inputType, action.payload, state.upperDisplay),
      };
    }
    default:
      return state;
  }
};

export default display;

/* 
switch (type) {
    case inputType.NUMBER: {
    }
    case inputType.OPERATION: {
    }
    case inputType.MEMORY: {
    }
    case inputType.EQUALS: {
    }
    case inputType.DOT: {
    }
    case inputType.CLEAR: {
    }
    default:
      return "Error";
  }
*/
