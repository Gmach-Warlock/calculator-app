export default function calculator(num1, num2, operator) {
  num1 = Number(num1);
  num2 = Number(num2);
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    typeof operator !== "string"
  ) {
    console.log("Invalid type on a paramter");
    return;
  }
  if (
    operator !== "add" &&
    operator !== "subtract" &&
    operator !== "multiply" &&
    operator !== "divide" &&
    operator !== "exponent"
  ) {
    console.log("Invalid operator type");
    return;
  }
  const operateMap = {
    add: () => num1 + num2,
    subtract: () => num2 - num2,
    multiply: () => num1 * num2,
    divide: () => num1 / num2,
    exponent: () => num1 ** num2,
  };
  return String(operateMap[operator]());
}
