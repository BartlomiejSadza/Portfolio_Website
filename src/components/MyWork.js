import React, { useState } from "react";
import MyComponent from "./popup/MyComponent";

export default function MyWork() {
  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [showPopup3, setShowPopup3] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


  const handleButtonClick1 = () => {
    setShowPopup1(true);
  };
  const handleButtonClick2 = () => {
    setShowPopup2(true);
  };
  const handleButtonClick3 = () => {
    setShowPopup3(true);
  };

  const projects = [
    {
      title: "Weather App",
      subtitle: "Low-code, Open-API based weather app",
      description: "A short description about weather app",
      image: "img/_.svg",
      image2: "img/portfolio-01.jpg",
      description2: "lusfafsfdsfvhdsjvfvjdlsvfvdlsjfvdafdsdflsdhdfvlsdhfvls",
      bottomDescription: "Bottom description",
    },
    {
      title: "Project 02",
      subtitle: "A short subtitle",
      description: "A short description",
      image: "img/_.svg",
      image2: "img/_.svg",
      description2: "A short description 2",
      bottomDescription: "Bottom description",
    },
    {
      title: "Project 03",
      subtitle: "A short subtitle",
      description: "A short description",
      image: "img/_.svg",
      image2: "img/_.svg",
      description2: "A short description 2",
      bottomDescription: "Bottom description",
    },
  ];

  return (
    <>
      <section className="my-work" id="work">
        <h2 className="section__title section__title--work">My Work</h2>
        <p className="section__subtitle section__subtitle--work">
          A selection of my range of work
        </p>
        <div className="portfolio">
          {/* Portfolio item 01 */}
          <button onClick={handleButtonClick1} className="portfolio__item">
            <img src="img/portfolio-02.jpg" alt="" className="portfolio__img" />
          </button>

          {/* Portfolio item 02 */}
          <button onClick={handleButtonClick2} className="portfolio__item">
            <img src="img/portfolio-03.jpg" alt="" className="portfolio__img" />
          </button>

          {/* Portfolio item 03 */}
          <button onClick={handleButtonClick3} className="portfolio__item">
            <img src="img/portfolio-04.jpg" alt="" className="portfolio__img" />
          </button>
        </div>
      </section>
      {showPopup1 && (
        <MyComponent
          title={projects[0].title}
          subtitle={projects[0].subtitle}
          description={projects[0].description}
          image={projects[0].image}
          image2={projects[0].image2}
          description2={projects[0].description2}
          bottomDescription={projects[0].bottomDescription}
          isOpen={showPopup1}
          setIsOpen={setShowPopup1}
        />
      )}
      {showPopup2 && (
        <MyComponent
          title={projects[1].title}
          subtitle={projects[1].subtitle}
          description={projects[1].description}
          image={projects[1].image}
          image2={projects[1].image2}
          description2={projects[1].description2}
          bottomDescription={projects[1].bottomDescription}
          isOpen={showPopup2}
          setIsOpen={setShowPopup2}
        />
      )}
      {showPopup3 && (
        <MyComponent
          title={projects[2].title}
          subtitle={projects[2].subtitle}
          description={projects[2].description}
          image={projects[2].image}
          image2={projects[2].image2}
          description2={projects[2].description2}
          bottomDescription={projects[2].bottomDescription}
          isOpen={showPopup3}
          setIsOpen={setShowPopup3}
        />
      )}
    </>
  );
}
