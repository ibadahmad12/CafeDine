import React from "react";

import "./styles.scss";

const Footer = () => {
   return (
      <div className="footer__wrapper">
         <h6>Get Latest Food Recipe At Your Inbox</h6>
         <input placeholder="Enter Email" type="text" />
         <p className="copyright_text">
            Copyright © 2019 a theme by <strong>Ibad Ahmad</strong>
         </p>
      </div>
   );
};

export default Footer;
