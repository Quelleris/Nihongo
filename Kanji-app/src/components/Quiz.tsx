import React, { useState } from "react";
import { getRandomKanji } from "../utils/getRandomItem";

export const Quiz = ({ characters }: { characters: string[] }) => {
  const [currentCharacter, setCurrentCharacter] = useState("");
  const [answer, setAnswer] = useState("");

  const checkAnswer = () => {
    return null;
  }
  return (
    <div className="container">
      <div className="quiz-header">
        <div className="quiz-character">{getRandomKanji(characters)}</div>
      </div>
      <div className="quiz-input-wrapper flex flex-ai-c flex-jc-c">
        <input type="text" className="quiz-input" />
        <button className="quiz-answer-btn">check</button>
      </div>
    </div>
  );
};