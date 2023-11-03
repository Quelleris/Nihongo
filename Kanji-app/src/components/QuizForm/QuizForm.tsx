import React, { useState } from "react";

export const QuizForm = ({ onSubmit }) => {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(answer);
    setAnswer("");
  };
  return (
    <form
      className="quiz-input-wrapper flex flex-ai-c flex-jc-c"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="quiz-input"
        onChange={(e) => setAnswer(e.target.value)}
        value={answer}
      />
    </form>
  );
};
