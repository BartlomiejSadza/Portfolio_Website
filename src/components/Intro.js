import React from "react";

export default function Intro() {
  return (
      <section className="intro" id="home">
        <h1 className="section__title section__title--intro">
          Hi, I am <strong>Bartłomiej Sadza</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">
          Aspiring Fullstack Developer
        </p>
        <img
          src="./img/jaKudlaty.jpeg"
          alt="a picture of Jane Doe smiling"
          className="intro__img"
        />
      </section>
  );
}
