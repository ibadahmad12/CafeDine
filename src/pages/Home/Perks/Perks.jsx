import React from "react";
import { perksData } from "../../../utils/constants/Perks";

import "./styles.scss";

const Perks = () => {
   return (
      <div className="perks__wrapper">
         {perksData.map(({ id, img, title, text }) => (
            <div className="perks" key={id}>
               <img src={img} alt="perk img" />
               <h6>{title}</h6>
               <p>{text}</p>
            </div>
         ))}
      </div>
   );
};

export default Perks;
