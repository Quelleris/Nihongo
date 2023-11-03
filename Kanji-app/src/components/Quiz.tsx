import React, { useEffect, useState } from "react";
import { getRandomKanji } from "../utils/getRandomItem";
import { useKanji } from "../hooks/useKanji";
import { QuizForm } from "./QuizForm/QuizForm";

export const Quiz = ({ characters }: { characters: string[] }) => {
  const [currentCharacter, setCurrentCharacter] = useState(() =>
    getRandomKanji(characters)
  );
  const [error, setError] = useState(false);
  console.log("character", currentCharacter);
  const { data, refetch } = useKanji(currentCharacter);
  console.log("data", data);

  const checkAnswer = (answer: string) => {
    if (data.includes(answer.toLowerCase())) {
      setCurrentCharacter(getRandomKanji(characters));
    }
  };

  useEffect(() => {
    refetch();
  }, [currentCharacter]);

  return (
    <div className="container">
      <div className="quiz-header">
        <div className="quiz-character">{currentCharacter}</div>
      </div>
      <QuizForm onSubmit={checkAnswer} />
    </div>
  );
};
