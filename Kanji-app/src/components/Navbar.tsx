import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="primary-header">
      <div className="container flex flex-jc-sb flex-ai-c">
        <a href="/" className="logo">
          Nippon
        </a>
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to="/hiragana">Hiragana</Link>
            </li>
            <li className="navbar-item">
              <Link to="/katakana">Katagana</Link>
            </li>
            <li className="navbar-item">
              <Link to="/kanji">Kanji</Link>
            </li>
            <li className="navbar-item">
              <a href="/">Learn</a>
            </li>
          </ul>
        </nav>
        <button className="theme-toggler">Light</button>
      </div>
    </header>
  );
};
