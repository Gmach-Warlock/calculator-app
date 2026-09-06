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
  // operator Maps for state
  const handleInput = (input) => {
    const isValue = (Number(input) >= 0 && Number(input) <= 9) || input === ".";
    const isOperator =
      input === "add" ||
      input === "subtract" ||
      input === "multiply" ||
      input === "divide" ||
      "percent";
    const isOther = input === "equals" || input === "clr" || input === "ce";
    // handle values
    if (isValue) {
      // on first value
      if (!haveFirstValue) {
        screenValue === "0"
          ? setScreenValue(input)
          : setScreenValue(screenValue + input);
      } else {
        // on second value
        if (!hasResetScreen) {
          screenValue = "0";
          setHasResetScreen(true);
        }
        if (hasResetScreen) {
          screenValue === "0"
            ? setScreenValue(input)
            : setScreenValue(screenValue + input);
        }
      }
    }
    // handle operators
    if (isOperator) {
      if (!haveFirstValue) {
        setNum1(Number(screenValue));
        setOperator(input);
        setHaveFirstValue(true);
      } else {
        setNum2(Number(screenValue));
        setScreenValue(calculator(num1, num2, operator));
        setNum1(screenValue);
      }
    }
    // handle other buttons
    if (isOther) {
      const otherMap = {
        equals: () => {
          setScreenValue(calculator(num1, num2, operator));
          setNum1(screenValue);
          setNum2(0);
        },
        clr: () => {
          setScreenValue("0");
          setNum1(0);
          setNum2(0);
          setHaveFirstValue(false);
          setHasResetScreen(false);
        },
        ce: () => {
          setScreenValue("0");
          if (haveFirstValue) {
            setNum2("0");
          } else {
            setNum1("0");
            setOperator("none");
          }
        },
      };
      otherMap[input]();
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
