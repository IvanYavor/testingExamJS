const {
  isNumeric,
  extractFistNumber,
  extractOperand,
  extractSecondNumber,
  extractEqualityOperator,
  parseCalc,
  calculateString,
  readExpressionFromFile,
  writeResultToFile,
} = require("./game");

describe("test extractFirstNum", () => {
  test("pass empty str", () => {
    const input = "";
    const output = 0;

    expect(extractFistNumber(input)).toEqual(output);
  });

  test("pass valid expression", () => {
    const input = "13+12";
    const output = 13;

    expect(extractFistNumber(input)).toEqual(output);
  });
});

describe("test extractSecondNumber", () => {
  test("pass str with operand and empty second number", () => {
    const input = "13+";
    const output = "";

    expect(extractSecondNumber(input)).toEqual(output);
  });

  test("pass valid expression ", () => {
    const input = "13+12";
    const output = 12;

    expect(extractSecondNumber(input)).toEqual(output);
  });
});

describe("test extractOperand", () => {
  test("pass expression without operand", () => {
    const input = "13";
    const output = "";

    expect(extractOperand(input)).toEqual(output);
  });

  test("pass valid expression with operator '+'", () => {
    const input = "13+12";
    const output = "+";

    expect(extractOperand(input)).toEqual(output);
  });
});

describe("test isNumeric", () => {
  test("pass not numeric char", () => {
    const input = "a";
    const output = false;

    expect(isNumeric(input)).toEqual(output);
  });

  test("pass numeric char", () => {
    const input = "1";
    const output = true;

    expect(isNumeric(input)).toEqual(output);
  });
});

describe("test extractEqualityOperator", () => {
  test("pass string without '='", () => {
    const input = "13+12";
    const output = "";

    expect(extractEqualityOperator(input)).toEqual(output);
  });

  test("pass string with '='", () => {
    const input = "13+12=";
    const output = "=";

    expect(extractEqualityOperator(input)).toEqual(output);
  });
});

describe("test calculateString", () => {
  test("test sum", () => {
    const firstNum = "12";
    const secondNum = "12";
    const operator = "+";
    const output = 24;

    expect(calculateString(firstNum, operator, secondNum)).toEqual(output);
  });

  test("pass substraction", () => {
    const firstNum = "12";
    const secondNum = "10";
    const operator = "-";
    const output = 2;

    expect(calculateString(firstNum, operator, secondNum)).toEqual(output);
  });

  test("pass division", () => {
    const firstNum = "12";
    const secondNum = "12";
    const operator = "/";
    const output = 1;

    expect(calculateString(firstNum, operator, secondNum)).toEqual(output);
  });

  test("pass multiplication", () => {
    const firstNum = "12";
    const secondNum = "12";
    const operator = "*";
    const output = 144;

    expect(calculateString(firstNum, operator, secondNum)).toEqual(output);
  });
});
