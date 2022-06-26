import React from "react";
import { servicesData } from "../../../utils/constants/Services";

import "./styles.scss";

const Services = () => {
   return (
      <div className="services__wrapper">
         <p className="heading">Our Services</p>
         <p className="sub-heading">We Provide Good Services With Lots Of Facilities</p>
         <div className="services__inner_wrapper">
            {servicesData.map(({ id, img, title, text }) => (
               <div className="service" key={id}>
                  <img src={img} alt="service img" />
                  <h6>{title}</h6>
                  <p>{text}</p>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Services;
