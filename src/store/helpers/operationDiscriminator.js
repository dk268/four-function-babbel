import { inputType } from "../.";

const operationDiscriminator = (recentType, op, lowerDisplay) => {
  //(type, op, prevNumber) --> [op to display, numIntoPrevious]
  switch (recentType) {
    case inputType.NUMBER: {
      return op;
    }
    case inputType.OPERATION: {
      return op;
    }
    case inputType.MEMORY: {
      return op;
    }
    case inputType.EQUALS: {
      return op;
    }
    case inputType.DOT: {
      return op;
    }
    case inputType.CLEAR: {
      return op;
    }
    default:
      return "Error";
  }
};

export default operationDiscriminator;
