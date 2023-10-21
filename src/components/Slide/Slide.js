import React, { useState } from 'react';
import './Slide.css';
import Img1 from '../../photo/1.webp';
import Img2 from '../../photo/2.jpeg';
import Img3 from '../../photo/3.jpg';

function Slide() {
  const [currentSlide, setCurrentSlide] = useState(Img1);

  const handleSlideClick = (image) => {
    setCurrentSlide(image);
  };

  return (
    <>
      <div className="container">
        <div className="slider-wrapper">
          <div className="slider-slide">
            <img src={currentSlide} alt="slide" />
          </div>

          <div className="slider-nav">
            <button onClick={() => handleSlideClick(Img1)}> </button>
            <button onClick={() => handleSlideClick(Img2)}> </button>
            <button onClick={() => handleSlideClick(Img3)}> </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slide;
