import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkTheme]);

  return (
    <header className="primary-header">
      <div className="container flex flex-jc-sb flex-ai-c">
        <a href="/" className="logo">
          Nippon
        </a>
        <nav className="navbar">
          <ul className="navbar-list flex flex-jc-c flex-ai-c">
            <li className="navbar-item">
              <Link className="navbar-link" to="/hiragana">
                Hiragana
              </Link>
            </li>
            <li className="navbar-item">
              <Link className="navbar-link" to="/katakana">
                Katagana
              </Link>
            </li>
            <li className="navbar-item">
              <Link className="navbar-link" to="/kanji">
                Kanji
              </Link>
            </li>
            <li className="navbar-item">
              <a href="/kanjiLearn">Learn</a>
            </li>
          </ul>
        </nav>
        <button
          className="theme-toggler"
          onClick={() => setDarkTheme(!darkTheme)}
        >
          Light
        </button>
      </div>
    </header>
  );
};
