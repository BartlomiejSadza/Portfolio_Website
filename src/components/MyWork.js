import React from "react";

export default function MyWork() {

  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">My Work</h2>
      <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>
      <div className="portfolio">
        {/* Portfolio item 01 */}
        <></>
        {/* Portfolio item 02 */}
        <a href="#" className="portfolio__item">
          <img src="img/portfolio-02.jpg" alt="" className="portfolio__img" />
        </a>
        
        {/* Portfolio item 03 */}
        <a href="#" className="portfolio__item">
          <img src="img/portfolio-03.jpg" alt="" className="portfolio__img" />
        </a>
        
        {/* Portfolio item 04 */}
        <a href="#" className="portfolio__item">
          <img src="img/portfolio-04.jpg" alt="" className="portfolio__img" />
        </a>
        
      </div>
    </section>
  );
}
