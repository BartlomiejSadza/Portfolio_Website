import React from "react";

export default function Nav() {
 
  const toggleNav = () => {
    document.body.classList.toggle("nav-open");
  };

  const navLinks = document.querySelectorAll(".nav__link");

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
  })

  return (
    <header className="App-header">
      <div className="logo">
        <img src="./img/_.svg" className="App-logo" alt="logo" />
      </div>
      <button onClick={() => toggleNav()} className="nav-toggle" aria-label="toggle navigation">
        <span className="hamburger"></span>
      </button>
      <nav className="nav">
        {/* Nav Tabs */}
        <ul className="nav__list">
          <li onClick={() => document.body.classList.remove('nav-open')} className="nav__item">
            <a href="#home" className="nav__link">
              Home
            </a>
          </li>
          <li onClick={() => document.body.classList.remove('nav-open')} className="nav__item">
            <a href="#services" className="nav__link">
              Key Skills
            </a>
          </li>
          <li onClick={() => document.body.classList.remove('nav-open')} className="nav__item">
            <a href="#about" className="nav__link">
              About Me
            </a>
          </li>
          <li onClick={() => document.body.classList.remove('nav-open')} className="nav__item">
            <a href="#work" className="nav__link">
              My Projects
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
