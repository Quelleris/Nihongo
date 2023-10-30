import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchKanjiData = () => {
  return axios.get("https://kanjiapi.dev/v1/kanji/grade-1");
};

export const KanjiLearn = () => {
  const { isLoading, data, isError, error } = useQuery(
    "kanjiData",
    fetchKanjiData
  );

  const getRandomKanji = () => {
    return data?.data[Math.floor(Math.random() * data?.data.lenght)];
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      {data?.data.map((kanji) => {
        return <li>{kanji}</li>;
      })}
    </div>
  );
};
