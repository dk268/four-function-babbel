import { inputType } from "../.";

const dotDiscriminator = (recentType, currScreen) => {
  switch (recentType) {
    case inputType.NUMBER: {
      if (currScreen.indexOf(".") === currScreen.length - 1)
        return currScreen.slice(0, currScreen.length - 1);
      if (currScreen.indexOf(".") > 0) return currScreen;
      return currScreen + ".";
    }
    case inputType.OPERATION: {
      if (currScreen.indexOf(".") === currScreen.length - 1)
        return currScreen.slice(0, currScreen.length - 1);
      if (currScreen.indexOf(".") > 0) return currScreen;
      return currScreen + ".";
    }
    case inputType.MEMORY: {
      if (currScreen.indexOf(".") === currScreen.length - 1)
        return currScreen.slice(0, currScreen.length - 1);
      if (currScreen.indexOf(".") > 0) return currScreen;
      return currScreen + ".";
    }
    case inputType.EQUALS: {
      if (currScreen.indexOf(".") === currScreen.length - 1)
        return currScreen.slice(0, currScreen.length - 1);
      if (currScreen.indexOf(".") > 0) return currScreen;
      return currScreen + ".";
    }
    case inputType.DOT: {
      return currScreen.slice(0, currScreen.length - 1);
    }
    case inputType.CLEAR: {
      return currScreen + ".";
    }
    default:
      return "Error";
  }
};

export default dotDiscriminator;
