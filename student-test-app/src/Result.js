import React from "react";

function Result({ score, total, goHome }) {
  return (
    <div>
      <h2>Result</h2>
      <p>
        You scored {score} out of {total}
      </p>
      <button onClick={goHome}>Back to Home</button>
    </div>
  );
}

export default Result;
