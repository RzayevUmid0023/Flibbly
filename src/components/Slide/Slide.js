import React, { useState, useEffect } from 'react';
import styles from './Slide.module.css';
import Img1 from '../../photo/1.webp';
import Img2 from '../../photo/2.jpeg';
import Img3 from '../../photo/3.jpg';

function Slide() {
  const [currentSlide, setCurrentSlide] = useState(Img1);

  useEffect(() => {
    const timer = setInterval(() => {
      handleSlideClick(
        currentSlide === Img3 ? Img1 : currentSlide === Img1 ? Img2 : Img3
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
        </div>
      </div>
    </div>
  );
}

export default Slide;
