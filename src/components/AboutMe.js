import React from "react";

export default function AboutMe() {
  return (
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about">Who I am</h2>
      <p className="section__subtitle section__subtitle--about">Student of "CS and Econometrics" on AGH</p>

      <div className="about-me__body">
        <p>I’m recently gratuated Civil Engineer turned to Computer Science enthusiast. After diving into my first job in civil engineering, I quickly realized it wasn’t the path for me. That’s when I shifted my focus to the world of IT—a field that fuels my passion for both problem-solving and creativity.</p>
        <p>When I’m not deep into coding, you’ll (sometimes 😆) find me at the gym, exploring the world of investing, or reading a good book. I love staying curious, constantly learning, and pushing myself to grow. I’ve also got an interest for cars and I never shy away from a great party! 💃</p>
        <p>With a knack for leadership, teamwork, and managing risk, I thrive in challenging environments.</p>
      </div>

      <img src="../img/dev-jane-02.jpg" alt="a picture of Jane Doe smiling" className="about-me__img" />
    </section>
  );
}