import React, { useState } from "react";

function MyComponent(props) {
  const [isOpen, setIsOpen] = useState(true);

  const closePopup = () => props.setIsOpen(!props.isOpen);

  return (
    <div>
      {props.isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              maxHeight: "80vh",
              width: "80vw",
              maxWidth: "1000px",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              padding: "0.5em",
              overflowY: "auto",
            }}
          >
            {/* Here some thing bout projects */}
            <button
              onClick={closePopup}
              className="nav-toggle nav-open dot"
              aria-label="toggle navigation"
            >
              <span className="hamburger"></span>
            </button>
            <section class="intro">
              <h1 class="section__title section__title--intro">
                <strong>{props.title}</strong>
              </h1>
              <p class="section__subtitle section__subtitle--intro">
                {props.subtitle}
              </p>
              <img src={props.image} alt="" class="intro__img" />
            </section>

            <div className="portfolio-item-individual">
              <p>{props.description}</p>
              <img src={props.image2} alt="" />
              <p>{props.description2}</p>
              <div className="linkz">
                <i class="fa fa-globe">
                  <a class="fab" style={{marginLeft: "1em", color: "darkblue"}} href={props.bottomDescription2}>Link to Game</a>
                </i>
              </div>
              <div className="linkz">
                <i class="fab fa-github">
                  <a class="fa" style={{marginLeft: "1em", color: "darkblue"}} href={props.bottomDescription}> Link to Github repository </a>
                </i>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyComponent;

/* <MyComponent
      title={projects[0].title} 
      subtitle={projects[0].subtitle} 
      decsription={projects[0].decsription} 
      image={projects[0].image} 
      decsription2={projects[0].decsription2} 
      bottomDescription={projects[0].bottomDescription}
  />
*/
