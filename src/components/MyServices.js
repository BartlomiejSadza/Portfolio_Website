import React from "react";

export default function MyServices() {
  return (
    <section className="my-services" id="services">
      <h2 className="section__title section__title--services">Key skills</h2>
      <div className="services">
        <div className="service">
        <h3>Machine Learning</h3>
        <p>I'm familiar with Python and its libraries, such as NumPy, Pandas, and Scikit-learn. I've also worked with TensorFlow to build and train neural networks. I'm looking forward to expanding my knowledge in this field.</p>
        </div>
        <div className="service">
        <h3>Problem Solving and Teamwork</h3>
        <p>I love tackling complex problems and finding efficient solutions. This drives my interest in software development and helps me excel in my projects. Although I haven't had the opportunity to collaborate on coding projects yet. I'm a good team player, friendly, and communicative. I'm looking forward to applying these interpersonal skills in a team coding environment in the future.</p>
        </div>
        <div className="service">
        <h3>Web Development</h3>
        <p>I'm familiar with JavaScript, HTML, and CSS. I've also worked with Bootstrap. I'm looking forward to expanding my knowledge in this field.</p>
        </div>
      </div>
      <a href="#work" className="btn">My Projects</a>
    </section>
  );
}