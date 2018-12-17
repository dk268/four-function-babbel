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
  resultStr = result + "";
  if (result < 0) {
    if (resultStr.indexOf(".") > -1) return truncate(10)(resultStr);
    else return truncate(9)(resultStr);
  } else {
    if (resultStr.indexOf(".") > -1) return truncate(9)(resultStr);
    else return truncate(8)(resultStr);
  }
};
