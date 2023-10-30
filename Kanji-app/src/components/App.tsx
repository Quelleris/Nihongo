import {
  Home,
  HiraganaPage,
  KatakanaPage,
  KanjiPage,
  KanjiDetails,
} from "../pages/index";
import "../style/index.css";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Navbar } from "./Navbar/Navbar";
import { KanjiLearn } from "../pages/KanjiLearn";

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/hiragana" element={<HiraganaPage />}></Route>
          <Route path="/katakana" element={<KatakanaPage />}></Route>
          <Route path="/kanji" element={<KanjiPage />}>
            <Route path="/kanji/:id" element={<KanjiDetails />}></Route>
          </Route>
          <Route path="/kanjiLearn" element={<KanjiLearn />}></Route>
        </Routes>
      </QueryClientProvider>
    </>
  );
}
