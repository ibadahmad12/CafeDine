import React from "react";
import mobile from "../../../assets/images/mobile.png";

import "./styles.scss";

const App = () => {
   return (
      <div className="app__wrapper">
         <img src={mobile} alt="mobile img" />
         <div className="text_container">
            <p className="heading">Make it easy</p>
            <p className="sub-heading">Get The CafeDine App</p>
            <p className="text">Get instant access to recipes from celebrity Cafedia and world-renowed brands right in your pocker.</p>
            <div className="button_container">
               <button>
                  Get it on <br />
                  <strong>GOOGLE PLAY</strong>
               </button>
               <button>
                  Get it on <br />
                  <strong>APPLE STORE</strong>
               </button>
            </div>
         </div>
      </div>
   );
};

export default App;
