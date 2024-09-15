import React from "react";

export default function Nav() {
  return (
    <header className="App-header">
      <div className="logo">
        <img src="./img/_.svg" className="App-logo" alt="logo" />
      </div>
      <button className="nav-toggle" aria-label="toggle navigation">
        <span className="hamburger"></span>
      </button>
      <nav className="nav">
        {/* Nav Tabs */}
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              My Services
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              About Me
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              My Work
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
