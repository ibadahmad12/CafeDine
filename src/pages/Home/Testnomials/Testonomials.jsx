import React from "react";
import { reviewsData } from "../../../utils/constants/Reviews";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.scss";

const Reviews = () => {
   return (
      <div className="testnomials__wrapper">
         <p className="heading">Customers Review</p>
         <p className="sub-heading">Our Customers Say About Us . Lets Check Out Some</p>
         <Swiper
            loop={true}
            autoplay={{
               delay: 3000,
               disableOnInteraction: false,
            }}
            speed={1000}
            pagination={{
               clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="testnomials__slider"
         >
            {reviewsData.map(({ id, img, author, title, review }) => (
               <SwiperSlide className="testnomial" key={id}>
                  <h2>{review}</h2>
                  <img src={img} alt="testnomial img" />
                  <h5>{author}</h5>
                  <p>{title}</p>
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
};

export default Reviews;
