import { useState } from "react";
import "./App.css";

function App() {
  const [screenValue, setScreenValue] = useState("0");
  const [tempVal1, setTempVal1] = useState("0");
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [operator, setOperator] = useState("none");

  const operatorMap = {
    add: () => {
      setNumber1(screenValue);
      setOperator("add");
    },
    subtract: () => {
      setNumber1(screenValue);
      setOperator("subtract");
    },
    multiply: () => {
      setNumber1(screenValue);
      setOperator("multiply");
    },
    divide: () => {
      setNumber1(screenValue);
      setOperator("divide");
    },
  };
  const handleInput = (input) => {
    if (Number(input) >= 0 && Number(input) <= 9) {
      if (screenValue === "0") {
        setScreenValue(input);
      } else {
        setScreenValue(screenValue + input);
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
