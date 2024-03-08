import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import lokaso from '../assets/lokaso.jpg';
import gatorro from '../assets/gatorro.jpg';
import horseluis from '../assets/horseluis.jpg';
import '../styles/Slider.scss'

const Slider = () => {
  const images = [lokaso, gatorro, horseluis];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="slider-wrapper">
      <div className="slider-container">
        <TransitionGroup>
          <CSSTransition key={currentImage} timeout={800} classNames="fade">
            <img src={images[currentImage]} alt={`Slide ${currentImage + 1}`} />
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};

export default Slider;
