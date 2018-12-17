const calculate = (firstNum, secondNum, operator) => {
  if (isNaN(secondNum)) return 0;
  let result;
  console.log(firstNum, secondNum, operator);
  switch (operator) {
    case "CLEAR": {
      result = secondNum;
      break;
    }
    case "+": {
      result = firstNum * 1 + secondNum * 1;
      break;
    }
    case "-": {
      result = firstNum - secondNum;
      break;
    }
    case "*": {
      result = firstNum * secondNum;
      break;
    }
    case "/": {
      // eslint-disable-next-line
      if (secondNum == 0) return "INFINITY LIMIT APPROACHED";
      //intentional loose equality
      else result = firstNum / secondNum;
      console.log(firstNum, secondNum, firstNum / secondNum);
      break;
    }
    default:
      return "Error";
  }
  if (Math.abs(result) > 99999999) return "OUT OF RANGE";
  if (result < 0) return [processResult(result), -1];
  else return [processResult(result), 1];
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
