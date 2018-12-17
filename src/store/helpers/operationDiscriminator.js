import { inputType } from "../.";

const operationDiscriminator = (type, op, currScreen) => {
  switch (type) {
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
      return "CLEAR";
    }
    default:
      return "Error";
  }
};

export default operationDiscriminator;
