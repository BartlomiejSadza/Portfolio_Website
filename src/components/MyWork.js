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

  // -------------------------------------------------------------------------------------------------------------------
  const projects = [
    {
      title: "Sunny Side",
      subtitle: "Low-code & Backend Integration",
      description: "SunnySide is a weather forecasting app built using Outsystems and the OpenWeather API, developed as a course challenge at Sourceful ICT. Key weather data like temperature, humidity, and wind speed are displayed in real time.",
      image: "img/_.svg",
      image2: "img/portfolio-01.jpg",
      description2: "The app allows users to register securely and offers server-based actions managed by a backend, ensuring a smooth and secure user experience. It showcases my ability to build low-code applications, handle Backend logic and integrate third-party APIs.",
      // bottomDescription: "https://personal-6wien1rz.outsystemscloud.com/SunnySide_BartlomiejSadza/SunnySide",
      bottomDescription2: "https://personal-6wien1rz.outsystemscloud.com/SunnySide_BartlomiejSadza/SunnySide",
    },
    {
      title: "Quikś_remix",
      subtitle: "React & TriviaDB API",
      description: "This quiz game is developed with React and integrated with the TriviaDB API to deliver a dynamic trivia experience. All game logic is handled within React, including state management for tracking user progress, scores, and real-time feedback.",
      image: "img/_.svg",
      image2: "img/quizzz.png",
      description2: "The app showcases my ability to build interactive and engaging user interfaces, as well as my proficiency in integrating third-party APIs. It is a fun and educational project that (I hope) demonstrates my skills in front-end development.",
      bottomDescription: "https://github.com/BartlomiejSadza/qikus_remixx",
      bottomDescription2: "https://proud-bush-093554d03.5.azurestaticapps.net/",
    },
    {
      title: "Tenzies Game",
      subtitle: "React, Azure SWA",
      description: "This project is a Tenzies game built using React and deployed through Azure Static Web Apps. The game challenges users to roll dice until all match the same number.",
      image: "img/_.svg",
      image2: "img/tenzies.png",
      description2: "The app leverages React's state management for real-time updates, providing a smooth and interactive gaming experience. It showcases my ability to build dynamic UIs and manage cloud-based deployments.",
      bottomDescription: "https://github.com/BartlomiejSadza/Tenzies_Game_React",
      bottomDescription2: "https://blue-bush-09b264d03.5.azurestaticapps.net/",
    },
  ];
  // -------------------------------------------------------------------------------------------------------------------

  return (
    <>
      <section className="my-work" id="work">
        <h2 className="section__title section__title--work">My Projects</h2>
        <p className="section__subtitle section__subtitle--work">
          Some of my most recent projects
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
          bottomDescription2={projects[0].bottomDescription2}
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
          bottomDescription2={projects[1].bottomDescription2}
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
          bottomDescription2={projects[2].bottomDescription2}
          isOpen={showPopup3}
          setIsOpen={setShowPopup3}
        />
      )}
    </>
  );
}
