import React from "react";

export default function MyServices() {
  return (
    <section className="my-services" id="services">
      <h2 className="section__title section__title--services">Key skills</h2>
      <div className="services">
        <div className="service">
        <h3>Full-Stack Development</h3>
        <p>Now I focus on building responsive web applications, primarily using JavaScript and React for front-end development. In the near future I'm going to be familiar with Node.js. I'm continuously learning and expanding my understanding of full-stack development, with hands-on experience in web and software fundations via. JavaScript-HTML-CSS, React, Python. It's also worth mentioning that I'm familiar with Excel.</p>
        </div>
        <div className="service">
        <h3>Problem Solving and Teamwork</h3>
        <p>I love tackling complex problems and finding efficient solutions. This drives my interest in software development and helps me excel in my projects. Although I haven't had the opportunity to collaborate on coding projects yet. I'm a good team player, friendly, and communicative. I'm looking forward to applying these interpersonal skills in a team coding environment in the future.</p>
        </div>
        <div className="service">
        <h3>Continuous Learning</h3>
        <p>I'm exploring new technologies and frameworks to expand my skill set. I believe in lifelong learning and strive to stay updated with the latest trends in the tech industry.  I think I'm eager to apply my knowledge in real-world projects, contribute to innovative solutions, and grow within the tech industry. </p>
        </div>
      </div>
      <a href="#work" className="btn">My Projects</a>
    </section>
  );
}