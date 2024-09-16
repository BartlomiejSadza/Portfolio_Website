import React from "react";

export default function MyServices() {
  return (
    <section className="my-services" id="services">
      <h2 className="section__title section__title--services">Key skills</h2>
      <div className="services">
        <div className="service">
        <h3>Full-Stack Development</h3>
        <p>I focus on building responsive web applications, primarily using JavaScript and React for front-end development, along with basic back-end skills in Node.js. I'm continuously learning and expanding my understanding of full-stack development, with hands-on experience in web fundamentals and the basics of cloud services like Microsoft Azure.</p>
        </div>
        <div className="service">
        <h3>Basic UX/UI Design & Prototyping</h3>
        <p>I have basic experience with design tools like Figma and Canva, which I use to create simple wireframes and prototypes. While still developing my design skills, I aim to create user-friendly and functional interfaces that enhance the overall user experience.</p>
        </div>
        <div className="service">
        <h3>Collaboration, Version Control & AI-Assisted Development</h3>
        <p>I use Git and GitHub to manage code and collaborate on projects, ensuring clean and maintainable code practices. I'm also exploring AI tools like Microsoft Copilot to assist in development, making coding more efficient and helping me streamline repetitive tasks.</p>
        </div>
      </div>
      <a href="#work" className="btn">My Work</a>
    </section>
  );
}
