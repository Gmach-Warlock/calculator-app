import { useState } from "react";
import calculator from "./calculator";
import "./App.css";

function App() {
  const [screenValue, setScreenValue] = useState("0");
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState("none");
  const [hasResetScreen, setHasResetScreen] = useState(false);
  const [haveFirstValue, setHaveFirstValue] = useState(false);

  const useValueHelper = (input) => {
    if (!haveFirstValue) {
      screenValue === "0"
        ? setScreenValue(input)
        : setScreenValue(screenValue + input);
    } else {
      console.log(`we have first value need to reset display value`);
      if (!hasResetScreen) {
        setScreenValue(input);
        setHasResetScreen(true);
      } else {
        setScreenValue(screenValue === "0" ? input : screenValue + input);
      }
    }
  };
  const useOperatorHelper = (input) => {
    if (!haveFirstValue) {
      setNum1(Number(screenValue));
      setOperator(input);
      setHaveFirstValue(true);
    } else {
      const currentNum2 = Number(screenValue);
      setNum2(currentNum2);
      console.log(
        `We need to solve! num1: ${num1} num2: ${num2}operator: ${operator}`,
      );
      const answer = calculator(num1, num2, operator);
      console.log(answer);
      setScreenValue(answer);
      setNum1(Number(answer));
      setOperator(input);
      setHasResetScreen(false);
    }
  };
  const handleInput = (input) => {
    if ((Number(input) >= 0 && Number(input) <= 9) || input === ".") {
      useValueHelper(input);
    } else if (
      input === "add" ||
      input === "subtract" ||
      input === "multiply" ||
      input === "divide"
    ) {
      // useOperator
      useOperatorHelper(input);
    } else {
      console.log(`In the other bracket now`);
      if (input === "equals") {
        const currentNum2 = Number(screenValue);
        setNum2(currentNum2);
        console.log(`solving now!`);
        let answer = calculator(num1, currentNum2, operator);
        console.log(answer);
        setScreenValue(answer);
        setNum1(Number(answer));
        setHaveFirstValue(false);
        setHasResetScreen(false);
        setOperator("none");
      } else if (input === "ce") {
        if (haveFirstValue) {
          setNum2(0);
          setScreenValue("0");
          setHasResetScreen(false);
        } else {
          setNum1("0");
          setScreenValue("0");
        }
      } else if (input === "clr") {
        setNum1(0);
        setNum2(0);
        setScreenValue("0");
        setHasResetScreen(false);
        setHaveFirstValue(false);
      }
    }
  };

  return (
    <>
      <header>
        <span>GMach Instruments</span>
      </header>
      <section id="center">
        <h1>Calculator</h1>
        <div className="calculator">
          <div className="brand">
            <span>GMach Instruments</span>
          </div>
          <div className="screen">
            <h2>{screenValue}</h2>
          </div>
          <div className="buttons">
            <button onClick={() => handleInput("percent")}>%</button>
            <button onClick={() => handleInput("ce")}>CE</button>
            <button onClick={() => handleInput("clr")}>C</button>
            <button onClick={() => handleInput("undo")}>Undo</button>
            <button onClick={() => handleInput("7")}>7</button>
            <button onClick={() => handleInput("8")}>8</button>
            <button onClick={() => handleInput("9")}>9</button>
            <button onClick={() => handleInput("multiply")}>x</button>
            <button onClick={() => handleInput("4")}>4</button>
            <button onClick={() => handleInput("5")}>5</button>
            <button onClick={() => handleInput("6")}>6</button>
            <button onClick={() => handleInput("subtract")}>-</button>
            <button onClick={() => handleInput("1")}>1</button>
            <button onClick={() => handleInput("2")}>2</button>
            <button onClick={() => handleInput("3")}>3</button>
            <button onClick={() => handleInput("add")}>+</button>
            <button onClick={() => handleInput("plusOrMinus")}>+/-</button>
            <button onClick={() => handleInput("0")}>0</button>
            <button onClick={() => handleInput(".")}>.</button>
            <button onClick={() => handleInput("equals")}>=</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
