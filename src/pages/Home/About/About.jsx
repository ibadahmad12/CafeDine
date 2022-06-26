import React from "react";
import { aboutData } from "../../../utils/constants/About";

import "./styles.scss";

const About = () => {
   return (
      <div className="about">
         <p className="heading">About CafeDine</p>
         <p className="sub-heading">We Are A Modern Restaurant In The Center Of The City</p>
         <div className="history-cards">
            {aboutData.map(({ id, img, title }) => (
               <div className="card" key={id}>
                  <img src={img} alt="card img" />
                  <h6>{title}</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.impedit maiores fugit illo deserunt!</p>
               </div>
            ))}
         </div>
      </div>
   );
};

export default About;
