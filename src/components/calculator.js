import React, { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const inputChanged = (event) => {
    setNum1(event.target.value);
  };

  const inputChanged2 = (event) => {
    setNum2(event.target.value);
  };

  const add = () => {
    setResult(parseInt(num1) + parseInt(num2));
  };

  const subtract = () => {
    setResult(parseInt(num1) - parseInt(num2));
  };

  return (
    <div className="App">
      <p>Result = {result}</p>
      <br />
      <input placeholder="first number" value={num1} onChange={inputChanged} />
      <input
        placeholder="second number"
        value={num2}
        onChange={inputChanged2}
      />
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
    </div>
  );
}

export default Calculator;
