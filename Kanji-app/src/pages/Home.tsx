import React from "react";

export const Home = () => {
  return (
    <>
      <header className="primary-header">
        <div className="container flex flex-jc-sb flex-ai-c">
          <a href="/" className="logo">
            Nippon
          </a>
          <nav className="navbar">
            <ul className="navbar-list">
              <li className="navbar-item">
                <a href="/">Hiragana</a>
              </li>
              <li className="navbar-item">
                <a href="/">Katakana</a>
              </li>
              <li className="navbar-item">
                <a href="/">Kanji</a>
              </li>
              <li className="navbar-item">
                <a href="/">Learn</a>
              </li>
            </ul>
          </nav>
          <button className="theme-toggler">Light</button>
        </div>
      </header>
      <main id="main-content">
        <section className="hero section">
          <div className="container">
            <div className="grid-wrapper">
              <div className="hero-content">
                <h1 className="h1 hero-title">Learn Japanese Language.</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Cupiditate consequuntur dolores magnam ullam non beatae
                  nostrum!
                </p>
              </div>
              <img src="src\assets\japan.png" alt="image" />
            </div>
          </div>
        </section>
        <section className="learn section">
          <div className="container">
            <h2 className="h2 section-title">Learn</h2>
            <div className="grid-wrapper">
              <div className="card">
                <h3 className="h3">Hiragana</h3>
                <span>あ</span>
              </div>
              <div className="card">
                <h3 className="h3">Katakana</h3>
                <span>ア</span>
              </div>
              <div className="card">
                <h3 className="h3">Kanji</h3>
                <span>漢字</span>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="container">
            <div className="grid-wrapper">
              <ul className="footer-list">
                <li className="footer-list-item">
                  <span>Nippon</span>
                </li>
                <li className="footer-list-item">
                  <p>Lorem ipsum bla bla</p>
                </li>
              </ul>
              <ul className="footer-list">
                <li className="footer-list-title">
                  <p>Navigation</p>
                </li>
                <li className="footer-list-item">
                  <a href="/">Home</a>
                </li>
                <li className="footer-list-item">
                  <a href="/">Hiragana</a>
                </li>
                <li className="footer-list-item">
                  <a href="/">Katagana</a>
                </li>
                <li className="footer-list-item">
                  <a href="/">Kanji</a>
                </li>
              </ul>
              <ul className="footer-list">
                <li className="footer-list-title">
                  <p>Social</p>
                </li>
                <li className="footer-list-item">
                  <a href="/">Facebook</a>
                </li>
                <li className="footer-list-item">
                  <a href="/">Twitter</a>
                </li>
                <li className="footer-list-item">
                  <a href="/">Pinterest</a>
                </li>
                <li className="footer-list-item">
                  <a href="/">Discord</a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};
