import { useState } from "react";
import "./Calculator.css"
function Calculator() {
  const [display, setDisplay] = useState("0");
  const [firstNumber, setFirstNumber] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondNumber, setWaitingForSecondNumber] = useState(false);

  const handleNumber = (number) => {
    if (waitingForSecondNumber) {
      setDisplay(number);
      setWaitingForSecondNumber(false);
    } else {
      setDisplay(display === "0" ? number : display + number);
    }
  };

  const handleOperator = (op) => {
    setFirstNumber(Number(display));
    setOperator(op);
    setWaitingForSecondNumber(true);
  };

  const calculate = () => {
    if (firstNumber === null || operator === null) return;

    const secondNumber = Number(display);
    let result;

    switch (operator) {
      case "+":
        result = firstNumber + secondNumber;
        break;

      case "-":
        result = firstNumber - secondNumber;
        break;

      case "*":
        result = firstNumber * secondNumber;
        break;

      case "/":
        result = secondNumber === 0 ? "Error" : firstNumber / secondNumber;
        break;

      default:
        return;
    }

    setDisplay(String(result));
    setFirstNumber(null);
    setOperator(null);
    setWaitingForSecondNumber(true);
  };

  const clear = () => {
    setDisplay("0");
    setFirstNumber(null);
    setOperator(null);
    setWaitingForSecondNumber(false);
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>

      <div className="buttons">
        <button onClick={clear}>C</button>
        <button onClick={() => handleOperator("/")}>/</button>
        <button onClick={() => handleOperator("*")}>*</button>
        <button onClick={() => handleOperator("-")}>-</button>

        <button onClick={() => handleNumber("7")}>7</button>
        <button onClick={() => handleNumber("8")}>8</button>
        <button onClick={() => handleNumber("9")}>9</button>
        <button onClick={() => handleOperator("+")}>+</button>

        <button onClick={() => handleNumber("4")}>4</button>
        <button onClick={() => handleNumber("5")}>5</button>
        <button onClick={() => handleNumber("6")}>6</button>

        <button onClick={() => handleNumber("1")}>1</button>
        <button onClick={() => handleNumber("2")}>2</button>
        <button onClick={() => handleNumber("3")}>3</button>

        <button onClick={() => handleNumber("0")}>0</button>
        <button onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default Calculator;