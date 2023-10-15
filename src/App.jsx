import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const calculateResult = (value) => {
    try {
      const operators = ["+", "-", "*", "/"];
      let operator = null;
      for (let i = 0; i < value.length; i++) {
        if (operators.includes(value[i])) {
          operator = value[i];
          break;
        }
        if (!operators) {
          setValue(parseFloat(value).toString());
          return
        }
      }
      const [operands1, operands2] = value.split(operator).map(parseFloat);
      let result;
      switch (operator) {
        case "+":
          result = operands1 + operands2;
          break;
        case "-":
          result = operands1 - operands2;
          break;
        case "*":
          result = operands1 * operands2;
          break;
        case "/":
          result = operands1 / operands2;
          break;
        default:
          throw new Error("Invalid");
      }
      setValue(result.toString());
    } catch (error) {
      setValue(error);
    }
  };
  const handleClick = (values) => {
    if (values === "AC") {
      setValue("");
    } else if (values === "<") {
      setValue(value.slice(0, -1));
    } else if (values === "=") {
      calculateResult(value);

      // Eval is Harmful
      // setValue(eval(value).toString());
    } else if (values === "%") {
      setValue(value / 100);
    } else {
      setValue((preval) => preval + values);
    }
  };
  return (
    <div className="container">
      <div className="calculator">
        <input type="text" value={value} />
        <div className="buttons">
          <button className="button" onClick={() => handleClick("7")}>
            7
          </button>
          <button className="button" onClick={() => handleClick("8")}>
            8
          </button>
          <button className="button" onClick={() => handleClick("9")}>
            9
          </button>
          <button className="button" onClick={() => handleClick("+")}>
            +
          </button>
          <button className="button" onClick={() => handleClick("4")}>
            4
          </button>
          <button className="button" onClick={() => handleClick("5")}>
            5
          </button>
          <button className="button" onClick={() => handleClick("6")}>
            6
          </button>
          <button className="button" onClick={() => handleClick("-")}>
            -
          </button>
          <button className="button" onClick={() => handleClick("1")}>
            1
          </button>
          <button className="button" onClick={() => handleClick("2")}>
            2
          </button>
          <button className="button" onClick={() => handleClick("3")}>
            3
          </button>
          <button className="button" onClick={() => handleClick("*")}>
            *
          </button>
          <button className="button" onClick={() => handleClick("0")}>
            0
          </button>
          <button className="button" onClick={() => handleClick("00")}>
            00
          </button>
          <button className="button" onClick={() => handleClick(".")}>
            .
          </button>
          <button className="button" onClick={() => handleClick("/")}>
            /
          </button>
          <button className="button" onClick={() => handleClick("AC")}>
            AC
          </button>
          <button className="button" onClick={() => handleClick("<")}>
            &lt;-
          </button>
          <button className="button" onClick={() => handleClick("%")}>
            %
          </button>
          <button className="button red" onClick={() => handleClick("=")}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
