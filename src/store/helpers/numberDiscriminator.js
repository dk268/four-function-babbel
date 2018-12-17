import { inputType } from "../.";

const numberDiscriminator = (type, num, currScreen) => {
  switch (type) {
    case inputType.NUMBER: {
      if (currScreen.indexOf(".") > -1) {
        if (currScreen.length >= 8) return currScreen;
      } else if (currScreen.length >= 9) return currScreen;
      if (currScreen === "0") return num;
      return currScreen + num;
    }
    case inputType.OPERATION: {
      return currScreen;
    }
    case inputType.MEMORY: {
      return currScreen;
    }
    case inputType.EQUALS: {
      return num;
    }
    case inputType.DOT: {
      if (currScreen.length >= 9) return currScreen;
      else return currScreen + num;
    }
    case inputType.CLEAR: {
      return num;
    }
    default:
      return "Error";
  }
};

export default numberDiscriminator;
