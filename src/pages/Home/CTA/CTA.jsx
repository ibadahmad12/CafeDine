import React from "react";

import "./styles.scss";

const CTA = () => {
   return (
      <div className="cta__wrapper">
         <div className="text-container">
            <p>Prepare The Best Dishes</p>
            <p className="main-text">Come & Experience Our Best Of World Class Cousine</p>
            <button>Book Now</button>
         </div>
         <div className="overlay-container" />
      </div>
   );
};

export default CTA;
