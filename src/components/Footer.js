import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <a href="mailto:bartlomiej.sadza@icloud.com" className="footer__link">
        bartlomiej.sadza@icloud.com
      </a>
      <ul className="social-list">
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="www.linkedin.com/in/bartlomiej-sadza"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href=" https://github.com/BartlomiejSadza"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://www.facebook.com/bartek.sadza.9"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </li>
      </ul>
      <p>© 2024 Bartłomiej Sadza</p>
    </footer>
  );
}
