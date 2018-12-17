import numberDiscriminator from "./helpers/numberDiscriminator";
import operationDiscriminator from "./helpers/operationDiscriminator";
import dotDiscriminator from "./helpers/dotDescriminator";
import memoryDiscriminator from "./helpers/memoryDiscriminator";
import calculate from "./helpers/calculator";
import { inputType } from ".";

const initialState = {
  memoryDisplay: "",
  numberInMemory: null,
  operationDisplay: "",
  currentOp: "CLEAR",
  lowerDisplay: "0",
  negative: 1,
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
      const [op, toPreviousNum] = operationDiscriminator(
        state.recentInput,
        action.payload,
        state.lowerDisplay * state.negative,
        state.previousNum
      );
      const result = calculate(
        state.previousNum,
        state.lowerDisplay * state.negative,
        action.payload
      );
      return {
        ...state,
        operationDisplay: op,
        previousNum: toPreviousNum,
        recentInput: inputType.OPERATION,
        lowerDisplay: result[0],
        negative: result[1],
        currentOp: op,
      };
    }

    case inputType.DOT: {
      return {
        ...state,
        lowerDisplay: dotDiscriminator(state.recentInput, state.lowerDisplay),
      };
    }

    case inputType.NEGATE: {
      return { ...state, negative: state.negative * -1, recentInput: inputType.NEGATE };
    }
    //note: negate does not differ in recentType from number--not yet, at least.

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
        recentInput: inputType.CLEAR,
      };
    }

    case inputType.ALL_CLEAR: {
      return { ...initialState };
    }

    case inputType.EQUALS: {
      const result = calculate(
        state.previousNum,
        state.lowerDisplay * state.negative,
        state.currentOp
      );
      return {
        ...state,
        operationDisplay: "CLEAR",
        lowerDisplay: result[0],
        negative: result[1],
        recentInput: inputType.EQUALS,
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
