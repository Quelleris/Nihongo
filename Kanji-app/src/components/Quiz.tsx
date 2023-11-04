import React, { useEffect, useState } from "react";
import { getRandomKanji } from "../utils/getRandomItem";
import { useKanji } from "../hooks/useKanji";
import { QuizForm } from "./QuizForm/QuizForm";

export const Quiz = ({ characters }: { characters: string[] }) => {
  const [currentCharacter, setCurrentCharacter] = useState(() =>
    getRandomKanji(characters)
  );
  const [error, setError] = useState(false);
  const [IsAnswered, setIsAnswered] = useState(false);
  const { data, refetch } = useKanji(currentCharacter);

  const checkAnswer = (answer: string) => {
    setIsAnswered(true);
    if (data.includes(answer.toLowerCase())) {
      setError(false);
    } else {
      setError(true);
    }
  };

  const setNextCharacter = () => {
    setError(false);
    setIsAnswered(false);
    setCurrentCharacter(getRandomKanji(characters));
  };

  useEffect(() => {
    refetch();
  }, [currentCharacter]);

  return (
    <section className="quiz">
      <div className="container">
        <div className="quiz-header">
          <div className="quiz-character">{currentCharacter}</div>
        </div>
        <QuizForm onSubmit={checkAnswer} />
        {IsAnswered && (
          <div
            className="flex flex-jc-c flex-ai-c"
            style={
              IsAnswered ? { visibility: "visible" } : { visibility: "hidden" }
            }
          >
            <h2>
              {error
                ? `wrong. The meaning of ${currentCharacter} is ${data}`
                : "That's correct!"}
            </h2>
            <button className="quiz-answer-btn" onClick={setNextCharacter}>
              next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
