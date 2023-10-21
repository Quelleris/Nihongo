import {
  Home,
  HiraganaPage,
  KatakanaPage,
  KanjiPage,
  KanjiDetails,
} from "../pages/index";
import "../style/index.css";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/hiragana" element={<HiraganaPage />}></Route>
      <Route path="/katakana" element={<KatakanaPage />}></Route>
      <Route path="/kanji" element={<KanjiPage />}>
        <Route path="/kanji/:id" element={<KanjiDetails />}></Route>
      </Route>
    </Routes>
  );
}
