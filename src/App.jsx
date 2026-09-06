import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

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
            <input type="text" id="screen-input" className="screen-input" />
          </div>
          <div className="buttons">
            <button>%</button>
            <button>CE</button>
            <button>C</button>
            <button>Undo</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>x</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>-</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>+</button>
            <button>+/-</button>
            <button>0</button>
            <button>.</button>
            <button>=</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
