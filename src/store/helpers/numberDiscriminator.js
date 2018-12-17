import { inputType } from "../.";

const numberDiscriminator = (recentType, num, currScreen = "") => {
  switch (recentType) {
    case inputType.NUMBER: {
      if (currScreen.indexOf(".") > -1) {
        if (currScreen.length >= 8) return currScreen;
      } else if (currScreen.length >= 9) return currScreen;
      if (currScreen === "0") return num;
      // console.log(currScreen + "!", num);
      return currScreen + num;
    }
    case inputType.OPERATION: {
      return num;
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
    case inputType.NEGATE: {
      if (currScreen.indexOf(".") > -1) {
        if (currScreen.length >= 8) return currScreen;
      } else if (currScreen.length >= 9) return currScreen;
      if (currScreen === "0") return num;
      return currScreen + num;
    }
    default:
      return "Error";
  }
};

export default numberDiscriminator;
