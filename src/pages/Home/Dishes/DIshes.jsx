import React from "react";
import { dishesData } from "../../../utils/constants/Dishes";

import "./styles.scss";

const Dishes = () => {
   return (
      <div className="dishes__wrapper">
         <p className="heading">CafeDine Dishes</p>
         <p className="sub-heading">We Provide Quality Food . We Care About Your Health</p>
         <div className="dishes__inner_wrapper">
            {dishesData.map(({ id, img, ingrediants, dish, price }) => (
               <div className="dish" key={id}>
                  <img src={img} alt="dish img" />
                  <div className="dish_detail">
                     <h6>
                        {dish} - <span>{price}$</span>
                     </h6>
                     <p>{ingrediants}</p>
                  </div>
               </div>
            ))}
         </div>
         <button>View Full Menu</button>
      </div>
   );
};

export default Dishes;
