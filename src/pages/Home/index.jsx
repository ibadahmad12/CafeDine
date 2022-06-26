import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroCarousel from "./Hero/Hero";
import Perks from "./Perks/Perks";
import About from "./About/About";
import CTA from "./CTA/CTA";
import Services from "./Services/Services";
import Chefs from "./Chefs/Chefs";
import Reviews from "./Testnomials/Testonomials";
import App from "./App/App";
import Dishes from "./Dishes/DIshes";
import Feed from "../../components/InstaFeed/Feed";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
   return (
      <div>
         <Navbar />

         <span id="home">
            <HeroCarousel />
         </span>
         <Perks />

         <span id="about">
            <About />
         </span>

         <CTA />
         <span id="services">
            <Services />
         </span>

         <span id="chefs">
            <Chefs />
         </span>

         <span id="dishes">
            <Dishes />
         </span>

         <span id="reviews">
            <Reviews />
         </span>

         <App />
         <Feed />
         <Footer />
      </div>
   );
};

export default HomePage;
