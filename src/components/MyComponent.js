import React, { useState } from "react";

function MyComponent(props) {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openPopup}>Open Pop-up</button>

      {isOpen && (
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
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              padding: "2em",
              overflowY: "auto",
            }}
          >
            {/* Here some thing bout projects */}
            <section class="intro">
            <h1 class="section__title section__title--intro">
                The title <strong>of my project</strong>
            </h1>
            <p class="section__subtitle section__subtitle--intro">A short subtitle</p>
            <img src="img/portfolio-01.jpg" alt="" class="intro__img" />
        </section>
        
        <div class="portfolio-item-individual">
            <p>opis</p>
            <img src="img/portfolio-details.jpg" alt="" />
            <p>opis2</p>
            <p>bottom description</p>
        </div>
            <h2>Pop-up Content</h2>
            <button onClick={closePopup}>Close Pop-up</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyComponent;
