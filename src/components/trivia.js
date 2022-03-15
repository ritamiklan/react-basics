import React, { useState } from "react";

function Trivia() {
  const [question, setQuestion] = useState("");

  const getquestion = () => {
    fetch("https://opentdb.com/api.php?amount=1")
      .then((response) => response.json())
      .then((resData) => setQuestion(resData.results[0].question));
  };

  return (
    <div className="App">
      <p>{question}</p>
      <button onClick={getquestion}>New question</button>
    </div>
  );
}

export default Trivia;
