import numberDiscriminator from "./helpers/numberDiscriminator";
import { inputType } from ".";
import operationDiscriminator from "./helpers/operationDiscriminator";
import dotDiscriminator from "./helpers/dotDescriminator";
import memoryDiscriminator from "./helpers/memoryDiscriminator";

const initialState = {
  memoryDisplay: "",
  numberInMemory: null,
  operationDisplay: "",
  currentOp: "CLEAR",
  lowerDisplay: "0",
  negative: false,
  recentInput: "CLEAR",
  previousNum: "0",
};

const display = (state = initialState, action) => {
  switch (action.type) {
    case inputType.NUMBER: {
      return {
        ...state,
        lowerDisplay: numberDiscriminator(state.recentInput, action.payload, state.lower),
        recentInput: inputType.NUMBER,
      };
    }
    case inputType.OPERATION: {
      return {
        ...state,
        operationDisplay: operationDiscriminator(state.recentInput, action.payload),
        previousNum: state.lowerDisplay,
        recentInput: inputType.OPERATION,
      };
    }
    case inputType.DOT: {
      return {
        ...state,
        lowerDisplay: dotDiscriminator(state.recentInput, state.lowerDisplay),
      };
    }
    case inputType.MEMORY: {
      const memoryArr = memoryDiscriminator(
        action.payload,
        state.numberInMemory,
        state.lowerDisplay
      );
      return {
        ...state,
        memoryDisplay: memoryArr[0],
        numberInMemory: memoryArr[1],
        lowerDisplay: memoryArr[2],
        recentInput: inputType.MEMORY,
      };
    }
    case inputType.CLEAR: {
      return {
        ...initialState,
        numberInMemory: state.numberInMemory,
        memoryDisplay: state.memoryDisplay,
      };
    }
    case inputType.ALL_CLEAR: {
      return { ...initialState };
    }

    case inputType.EQUALS: {
      return;
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
