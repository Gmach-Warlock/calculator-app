import { useState } from "react";
import calculator from "./calculator";
import "./App.css";

function App() {
  const [screenValue, setScreenValue] = useState("0");
  const [tempVal1, setTempVal1] = useState("0");
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [hasReset, setHasReset] = useState(false);
  const [operator, setOperator] = useState("none");
  const phaseValue = ["get1", "get2", "solve"];
  const [currentPhase, setCurrentPhase] = useState(phaseValue[0]);
  const operatorMap = {
    add: () => {
      setOperator("add");
    },
    subtract: () => {
      setOperator("subtract");
    },
    multiply: () => {
      setOperator("multiply");
    },
    divide: () => {
      setOperator("divide");
    },

    clr: () => {
      setNum1(0);
      setNum2(0);
      setOperator("none");
      setHasReset(false);
    },
    ce: () => {
      setNum2(0);
      setOperator("none");
      setHasReset(false);
    },
    solve: () => {
      console.log(`Time to solve!`);
    },
  };
  function inputValueHelper(value, currentPhase) {
    switch (currentPhase) {
      case currentPhase === "get1": {
        value === "0" ? setNum1(value) : setNum1(screenValue + value);
      }
      case currentPhase === "get2": {
        setScreenValue("0");
        setHasReset(true);
        if (setHasReset) {
          value === "0" ? setNum2(value) : setNum2(screenValue + value);
        }
        return;
      }
      default:
        return;
    }
  }

  function handleInput(input) {
    // setup flags
    const isValue = Number(input) >= 0 && Number(input) <= 9 && input === ".";
    const isOperator = Object.keys(operatorMap).includes(input);
    if (!isValue && !isOperator) {
      console.log(`invalid input`);
      return;
    }
    console.log(`isValue: ${isValue}, isOperator: ${isOperator}`);
    // Numeric inputs. Need to determine if we are modifying num1 or num2 (use currentPhase)
    if (isValue) {
      console.log(`IsValue flow`);
      inputValueHelper(input, currentPhase);
    } else {
      console.log(`IsOperator flow`);
      operatorMap[input]();
    }
  }

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
            <button onClick={() => handleInput("clearE")}>CE</button>
            <button onClick={() => handleInput("clearAll")}>C</button>
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
            <button onClick={() => handleInput("dot")}>.</button>
            <button onClick={() => handleInput("equals")}>=</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
