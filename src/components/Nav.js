import React from "react";

export default function Nav() {
 
  const navToggle = document.querySelector('.nav-toggle');
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
          <li className="nav__item">
            <a href="#home" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#services" className="nav__link">
              My Services
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">
              About Me
            </a>
          </li>
          <li className="nav__item">
            <a href="#work" className="nav__link">
              My Work
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
