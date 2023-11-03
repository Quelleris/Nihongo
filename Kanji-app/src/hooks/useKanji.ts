import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useKanji = (kanjiId: string) => {
  console.log("kanjiId", kanjiId);
  return useQuery({
    queryKey: ["KanjiData"],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://kanjiapi.dev/v1/kanji/${kanjiId}`
      );
      const meanings: string[] = data.meanings;
      return meanings;
    },
  });
};
