import React from "react";
import { chefsData } from "../../../utils/constants/Chefs";

import "./styles.scss";

const Chefs = () => {
   return (
      <div className="chefs__wrapper">
         <p className="heading">Meet The Chefs</p>
         <p className="sub-heading">We Have Experienced And Creative Chefs To Start</p>
         <div className="chefs__inner_wrapper">
            {chefsData.map(({ id, img, name, post }) => (
               <div className="chef" key={id}>
                  <img src={img} alt="service img" />
                  <h5>{name}</h5>
                  <h6>{post}</h6>
                  <p>Far from the countries Vokalia and Consonantia, there live the blind texts. They live in Bookmarksgrove.</p>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Chefs;
