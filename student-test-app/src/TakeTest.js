import React from "react";

function TakeTest({ questions, answers, setAnswers, submitTest, goHome }) {
  function handleChange(i, value) {
    const newAns = [...answers];
    newAns[i] = Number(value);
    setAnswers(newAns);
  }

  return (
    <div>
      <h2>Take Test</h2>
      {questions.length === 0 ? (
        <p>No questions available. Please create one first.</p>
      ) : (
        <>
          {questions.map((q, i) => (
            <div key={i}>
              <p>{q.qText}</p>
              {q.options.map((opt, j) => (
                <label key={j} style={{ marginRight: "10px" }}>
                  <input
                    type="radio"
                    name={`q${i}`}
                    value={j + 1}                // ✅ FIX: use 1–4
                    checked={answers[i] === j + 1}
                    onChange={(e) => handleChange(i, e.target.value)}
                  />
                  {opt}
                </label>
              ))}
            </div>
          ))}
          <button onClick={submitTest}>Submit Test</button>
        </>
      )}
      <button onClick={goHome}>Back to Home</button>
    </div>
  );
}

export default TakeTest;
