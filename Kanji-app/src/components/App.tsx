import {
  Home,
  HiraganaPage,
  KatakanaPage,
  KanjiPage,
  KanjiDetails,
} from "../pages/index";
import "../style/index.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/hiragana" element={<HiraganaPage />}></Route>
        <Route path="/katakana" element={<KatakanaPage />}></Route>
        <Route path="/kanji" element={<KanjiPage />}>
          <Route path="/kanji/:id" element={<KanjiDetails />}></Route>
        </Route>
      </Routes>
    </>
  );
}
