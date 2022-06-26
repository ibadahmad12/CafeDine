import React from "react";

import "./styles.scss";

const Feed = () => {
   return (
      <div className="feed__wrapper">
         <div className="feed__inner_wrapper">
            <img src="https://demo.themefisher.com/cafedine/images/gallery/gallery-1.jpg" alt="post img" />
            <img src="https://demo.themefisher.com/cafedine/images/gallery/gallery-2.jpg" alt="post img" />
            <img src="https://demo.themefisher.com/cafedine/images/gallery/gallery-3.jpg" alt="post img" />
            <img src="https://demo.themefisher.com/cafedine/images/gallery/gallery-4.jpg" alt="post img" />
            <img src="https://demo.themefisher.com/cafedine/images/gallery/gallery-5.jpg" alt="post img" />
            <img src="https://demo.themefisher.com/cafedine/images/gallery/gallery-6.jpg" alt="post img" />
            <img src="https://demo.themefisher.com/cafedine/images/gallery/gallery-7.jpg" alt="post img" />
         </div>
         <div className="button-wrapper">
            <button>Instagram</button>
         </div>
      </div>
   );
};

export default Feed;
