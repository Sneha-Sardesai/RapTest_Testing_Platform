import React, { useState } from "react";
import CreateTest from "./CreateTest";
import TakeTest from "./TakeTest";
import Result from "./Result";
import "./App.css"; // ✅ Import styles

function App() {
  const [page, setPage] = useState("home");
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);

  function addQuestion(qText, options, correct) {
    setQuestions([...questions, { qText, options, correct }]);
  }

  function submitTest() {
    let s = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.correct) s++;
    });
    setScore(s);
    setPage("result");
  }

  return (
    <div className="app">
      <h1 className="title">📘 Student Test App</h1>
      {page === "home" && (
        <div className="menu">
          <button className="btn primary" onClick={() => setPage("create")}>
            ➕ Create Test
          </button>
          <button className="btn secondary" onClick={() => setPage("take")}>
            📝 Take Test
          </button>
        </div>
      )}
      {page === "create" && (
        <CreateTest addQuestion={addQuestion} goHome={() => setPage("home")} />
      )}
      {page === "take" && (
        <TakeTest
          questions={questions}
          answers={answers}
          setAnswers={setAnswers}
          submitTest={submitTest}
          goHome={() => setPage("home")}
        />
      )}
      {page === "result" && (
        <Result score={score} total={questions.length} goHome={() => setPage("home")} />
      )}
    </div>
  );
}

export default App;
