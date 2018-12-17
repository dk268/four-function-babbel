import numberDiscriminator from "./helpers/numberDiscriminator";
import { inputType } from ".";
import operationDiscriminator from "./helpers/operationDiscriminator";
import dotDiscriminator from "./helpers/dotDescriminator";

const initialState = {
  upperDisplay: "",
  lowerDisplay: "0",
  negative: false,
  recentInput: "CLEAR",
  currentOp: "CLEAR",
  numberInMemory: null,
};

const display = (state = initialState, action) => {
  switch (action.type) {
    case inputType.NUMBER: {
      return {
        ...state,
        lower: numberDiscriminator(state.recentInput, action.payload, state.lower),
        recentInput: inputType.NUMBER,
      };
    }
    case inputType.OPERATION: {
      return {
        ...state,
        upperDisplay: operationDiscriminator(state.recentInput, action.payload),
        recentInput: inputType.OPERATION,
      };
    }
    case inputType.DOT: {
      return {
        ...state,
        upperDisplay: dotDiscriminator(state.recentInput, state.lowerDisplay),
      };
    }
    case inputType.MEMORY: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};

export default display;

/* 
switch (recentType) {
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
