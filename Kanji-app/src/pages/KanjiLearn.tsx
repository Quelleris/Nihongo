import { useKanjis } from "../hooks/useKanjis";
import { Quiz } from "../components/Quiz";
import {
  QueryObserverSuccessResult,
  UseQueryResult,
} from "@tanstack/react-query";

const isFetchedWithSuccess = <TData, TError = unknown>(
  query: UseQueryResult<TData, TError>
): query is QueryObserverSuccessResult<TData, TError> => {
  return !query.isError && !query.isLoading && query.data !== undefined;
};

export const KanjiLearn = () => {
  const kanjiQuery = useKanjis(1);

  if (isFetchedWithSuccess(kanjiQuery)) {
    return <Quiz characters={kanjiQuery.data} />;
  } else {
    return <div>Loading...</div>;
  }
};
