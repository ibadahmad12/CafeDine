import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import { carouselData } from "../../../utils/constants/HeroCarousel";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.scss";

const HeroCarousel = () => {
   return (
      <>
         <Swiper
            loop={true}
            autoplay={{
               delay: 2500,
               disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            speed={1500}
            className="mySwiper"
         >
            {carouselData.map((data) => (
               <SwiperSlide key={data.id}>
                  <CarouselItem {...data} />
               </SwiperSlide>
            ))}
         </Swiper>
      </>
   );
};

export default HeroCarousel;

const CarouselItem = (props) => {
   return (
      <>
         <div className="overlay-container">
            <p>Welcome to Resturant</p>
            <p className="main-text">{props.text}</p>
            <button>View Menu</button>
         </div>
         <img src={props.img} alt="hero img" />
      </>
   );
};
