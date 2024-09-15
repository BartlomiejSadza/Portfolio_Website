import React from "react";

export default function AboutMe() {
  return (
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about">Who I am</h2>
      <p className="section__subtitle section__subtitle--about">Aspiring Full-Stack Developer based in Krakow, Poland</p>

      <div className="about-me__body">
        <p>I'm a self-taught developer with a passion for learning and building web applications. I specialize in front-end development, with a strong foundation in JavaScript and React, and I'm working on expanding my skills in back-end development with Node.js. I'm also interested in design and user experience, and I'm continuously learning new tools and techniques to enhance my development process.</p>
        <p>When I'm not coding, you can find me exploring the city, trying out new recipes, or catching up on the latest tech news. I'm always open to new opportunities and collaborations, so feel free to reach out if you'd like to connect!</p>
      </div>

      <img src="../img/dev-jane-02.jpg" alt="a picture of Jane Doe smiling" className="about-me__img" />
    </section>
  );
}