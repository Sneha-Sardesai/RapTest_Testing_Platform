import React, { useState } from "react";

function CreateTest({ addQuestion, goHome }) {
  const [qText, setQText] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correct, setCorrect] = useState(""); // ✅ fix

  function handleSubmit(e) {
    e.preventDefault();
    addQuestion(qText, options, Number(correct)); // convert to number
    setQText("");
    setOptions(["", "", "", ""]);
    setCorrect(""); // reset
  }

  return (
    <div>
      <h2>Create Test</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter question"
          value={qText}
          onChange={(e) => setQText(e.target.value)}
          required
        />
        {options.map((opt, i) => (
          <input
            key={i}
            type="text"
            placeholder={`Option ${i + 1}`}
            value={opt}
            onChange={(e) => {
              const newOpts = [...options];
              newOpts[i] = e.target.value;
              setOptions(newOpts);
            }}
            required
          />
        ))}
        <label>
          Correct Answer (1-4):
          <input
            type="number"
            min="1"
            max="4"
            value={correct}
            onChange={(e) => setCorrect(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add Question</button>
      </form>
      <button onClick={goHome}>Back to Home</button>
    </div>
  );
}

export default CreateTest;
