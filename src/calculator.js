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
    operator !== "percent"
  ) {
    console.log("Invalid operator type");
    return;
  }
  const operateMap = {
    add: () => num1 + num2,
    subtract: () => num2 - num2,
    multiply: () => num1 * num2,
    divide: () => {
      if (num2 === 0) {
        console.log("Cannot divide by 0!");
        return;
      }
      return num1 / num2;
    },
    percent: (num) => num / 100,
  };
  return String(operateMap[operator]());
}
