import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useKanjis = (grade: number) => {
  return useQuery({
    queryKey: ["KanjiData"],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://kanjiapi.dev/v1/kanji/grade-${grade}`
      );
      return data as string[];
    },
  });
};
