import { inputType } from "../.";

const operationDiscriminator = (recentType, op, lowerDisplay, prevNumber) => {
  //(type, op, prevNumber) --> [op to display, numIntoPrevious]
  switch (recentType) {
    case inputType.NUMBER: {
      return [op, lowerDisplay];
    }
    case inputType.OPERATION: {
      return [op, prevNumber];
    }
    case inputType.MEMORY: {
      return [op, null];
    }
    case inputType.EQUALS: {
      return [op, lowerDisplay];
    }
    case inputType.DOT: {
      return [op, lowerDisplay];
    }
    case inputType.CLEAR: {
      return [op, lowerDisplay];
    }
    default:
      return "Error";
  }
};

export default operationDiscriminator;
