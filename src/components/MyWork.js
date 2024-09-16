import React, { useState } from "react";
import MyComponent from "./popup/MyComponent";

export default function MyWork() {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">My Work</h2>
      <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>
      <div className="portfolio">
        {/* Portfolio item 01 */}
        <></>
        {/* Portfolio item 02 */}
        <button href="#" className="portfolio__item">
          <img src="img/portfolio-02.jpg" alt="" className="portfolio__img" />
        </button>
        
        {/* Portfolio item 03 */}
        <button onClick={handleButtonClick} className="portfolio__item">
          <img src="img/portfolio-03.jpg" alt="" className="portfolio__img" />
        </button>
        
        {/* Portfolio item 04 */}
        <button href="#" className="portfolio__item">
          <img src="img/portfolio-04.jpg" alt="" className="portfolio__img" />
        </button>
        
      </div>

      {showPopup && <MyComponent />}
    </section>
  );
}