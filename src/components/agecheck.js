import React, { useState } from "react";

function Agecheck() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const inputChanged = (event) => {
    setName(event.target.value);
  };

  const inputChanged2 = (event) => {
    setAge(event.target.value);
  };

  const checkAge = () => {
    return (
      <div>
        {age > 18 ? alert(`Hello ${name}`) : alert("You are too young")}
      </div>
    );
  };

  return (
    <div className="App">
      {name} {age}
      <br />
      <input placeholder="name" value={name} onChange={inputChanged} />
      <input placeholder="age" value={age} onChange={inputChanged2} />
      <button onClick={checkAge}>Check age</button>
    </div>
  );
}

export default Agecheck;
