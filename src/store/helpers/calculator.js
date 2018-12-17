const calculate = (firstNum, secondNum, operator) => {
  let result;
  switch (operator) {
    case "plus": {
      result = firstNum + secondNum;
      break;
    }
    case "minus": {
      result = firstNum - secondNum;
      break;
    }
    case "times": {
      result = firstNum * secondNum;
      break;
    }
    case "divided by": {
      // eslint-disable-next-line
      if (secondNum == 0) return "INFINITY LIMIT APPROACHED";
      //intentional loose equality
      else result = firstNum / secondNum;
      break;
    }
    default:
      return "Error";
  }
  if (Math.abs(result) > 99999999) return "OUT OF RANGE";
  if (result < 0) return [processResult(result), true];
  else return [processResult(result), false];
};

const truncate = amt => string => string.slice(0, amt);
const processResult = result => {
  let resultStr = result + "";
  if (result < 0) {
    if (resultStr.indexOf(".") > -1) return truncate(10)(resultStr).slice(1);
    else return truncate(9)(resultStr).slice(1);
  } else {
    if (resultStr.indexOf(".") > -1) return truncate(9)(resultStr);
    else return truncate(8)(resultStr);
  }
};

export default calculate;
