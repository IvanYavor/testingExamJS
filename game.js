const fs = require("fs");

function isNumeric(num) {
  return !isNaN(num);
}

function extractFistNumber(str) {
  str = str.trim();
  if (str.length === 0) {
    return 0;
  }

  let resultStr = "";

  for (let i = 0; i < str.length; i++) {
    if (isNumeric(str.charAt(i))) {
      resultStr += str.charAt(i);
    } else {
      return parseInt(resultStr);
    }
  }
  return parseInt(resultStr);
}

function extractOperand(str) {
  let operators = ["+", "-", "/", "*"];

  for (let i = 0; i < str.length; i++) {
    if (operators.includes(str.charAt(i))) {
      return str.charAt(i);
    }
  }

  return "";
}

function extractSecondNumber(str) {
  let reg = /^\d+[+-\/*](\d+)/gm;
  let match = reg.exec(str);

  if (match !== null) {
    return parseInt(match[1]);
  }

  return "";
}

function extractEqualityOperator(str) {
  let reg = /^\d+[+-\/*]\d+(=)/g;
  let match = reg.exec(str);

  if (match !== null) {
    return match[1];
  }
  return "";
}

function calculateString(firstNum, operand, secondNum) {
  let result;

  switch (operand) {
    case "+":
      result = parseInt(firstNum) + parseInt(secondNum);
      break;
    case "-":
      result = parseInt(firstNum) - parseInt(secondNum);
      break;
    case "/":
      result = parseInt(firstNum) / parseInt(secondNum);
      break;
    case "*":
      result = parseInt(firstNum) * parseInt(secondNum);
      break;
    default:
      result = 0;
  }

  return Math.floor(result);
}

function parseCalc(str) {
  let firstNum = extractFistNumber(str);
  let operator = extractOperand(str);
  let secondNum = extractSecondNumber(str);
  let quality = extractEqualityOperator(str);

  if (!firstNum) return 0;
  else if (!operator) return firstNum;
  else if (!secondNum) return firstNum;
  else if (!quality) return secondNum;
  else {
    return calculateString(firstNum, operator, secondNum);
  }
}

function readExpressionFromFile(fileName) {
  var input = fs.readFileSync(fileName, "utf-8");
  return input;
}

function writeResultToFile(fileName, output) {
  fs.writeFile(fileName, output, function (err, result) {
    if (err) console.log("error", err);
  });
  return output;
}

// Write to file
const expr = readExpressionFromFile("input.txt");
const result = parseCalc(expr);
writeResultToFile("output.txt", result);

module.exports = {
  isNumeric,
  extractFistNumber,
  extractOperand,
  extractSecondNumber,
  extractEqualityOperator,
  parseCalc,
  calculateString,
  readExpressionFromFile,
  writeResultToFile,
};
