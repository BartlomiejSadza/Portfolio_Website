import React from "react";

export default function MyWork() {

  function images() {
    const imageElements = [];
    for (let i = 0; i < 9; i++) {
      imageElements.push(
        <div className="portfolio" key={i}>
          <a href="#" className="portfolio__item">
            <img src={`../img/portfolio-0${i + 1}.jpg`} alt="" className="portfolio__img" />
          </a>
        </div>
      );
    }
    return imageElements;
  }

  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">My Work</h2>
      <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>
      {images()}
    </section>
  );
}
