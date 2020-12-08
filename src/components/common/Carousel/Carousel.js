import React from 'react';

import './Carousel.css';

const Carousel = ({children}) => {
  return (
    <div className="carousel">
      <ul className="carousel__indicators">
        {children.map((_, index) => 
          <li className="carousel_indicator" key={index}>
            &nbsp;
          </li>
        )}
      </ul>
      <div>
        {children}
      </div>
    </div>
  );
};

export default Carousel;