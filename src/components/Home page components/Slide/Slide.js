import React, { useState, useEffect } from 'react';
import styles from './Slide.module.css';
import Img1 from '../../../photo/Slide/1.webp';
import Img2 from '../../../photo/Slide/2.jpeg';
import Img3 from '../../../photo/Slide/3.jpg';
import Img4 from '../../../photo/Slide/4.jpg'; 

function Slide() {
  const [currentSlide, setCurrentSlide] = useState(Img1);

  useEffect(() => {
    const timer = setInterval(() => {
      handleSlideClick(
        currentSlide === Img4 ? Img1 : currentSlide === Img1 ? Img2 : currentSlide === Img2 ? Img3 : Img4
      );
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleSlideClick = (image) => {
    setCurrentSlide(image);
  };

  return (
    <div className={styles.container}>
      <div className={styles['slider-wrapper']}>
        <div className={styles['slider-slide']}>
          <img src={currentSlide} alt="slide" />
        </div>

        <div className={styles['slider-nav']}>
          <button onClick={() => handleSlideClick(Img1)}> </button>
          <button onClick={() => handleSlideClick(Img2)}> </button>
          <button onClick={() => handleSlideClick(Img3)}> </button>
          <button onClick={() => handleSlideClick(Img4)}> </button> {/* Button for the fourth image */}
        </div>
      </div>
    </div>
  );
}

export default Slide;
