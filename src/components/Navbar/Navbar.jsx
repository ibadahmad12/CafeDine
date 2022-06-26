import React, { useEffect } from "react";
import $ from "jquery";
import { FaInstagram, FaTwitter, FaDiscord } from "react-icons/fa";

import "./navbar.scss";

const Navbar = () => {
   useEffect(() => {
      const burger = document.querySelector(".hamburger");
      const navbar = document.querySelector(".navbar-flex");

      burger?.addEventListener("click", () => {
         burger.classList?.toggle("toggle");
         navbar.classList?.toggle("navbar-mobile-flex");
      });

      $(document).ready(function () {
         $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll > 20) {
               // $(".navbar-flex").css("background-color", "rgba(0, 0, 0, 0.8)");
            }
         });
      });
   }, []);

   const closeMobileNav = () => {
      const burger = document.querySelector(".hamburger");
      const navbar = document.querySelector(".navbar-flex");

      burger.classList.remove("toggle");
      navbar.classList.remove("navbar-mobile-flex");
   };

   return (
      <nav className="navbar-flex">
         <div className="logo-container">
            <img src="https://demo.themefisher.com/cafedine/images/logo.png" className="logo" alt="logo" />
         </div>
         <ul onClick={closeMobileNav}>
            <li>
               <a href="/#home">Home</a>
            </li>
            <li>
               <a href="/#about">About</a>
            </li>
            <li>
               <a href="/#services">Services</a>
            </li>
            <li>
               <a href="/#chefs">Chefs</a>
            </li>
            <li>
               <a href="/#dishes">Dishes</a>
            </li>
            <li>
               <a href="/#reviews">Reviews</a>
            </li>
         </ul>

         <div className="social-nav-icons">
            <i>
               <a href="https://twitter.com/SoulZ_NFT" target="_blank" rel="noreferrer">
                  <FaTwitter size={23} />
               </a>
            </i>
            <i>
               <a href="https://www.instagram.com/accounts/login/?next=/soulz_nft/" target="_blank" rel="noreferrer">
                  <FaInstagram size={23} />
               </a>
            </i>
            <i>
               <a href="http://discord.com/invite/soulz" target="_blank" rel="noreferrer">
                  <FaDiscord size={23} />
               </a>
            </i>
         </div>

         <div className="hamburger">
            <div className="stroke-1" />
            <div className="stroke-2" />
            <div className="stroke-3" />
         </div>
      </nav>
   );
};

export default Navbar;
