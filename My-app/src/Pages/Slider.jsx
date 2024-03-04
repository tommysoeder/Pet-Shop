import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../styles/Slider.scss';
import lokaso from '../assets/lokaso.jpg'
import gatorro from '../assets/gatorro.jpg'
import horseluis from '../assets/horseluis.jpg'

function Slider(){
  const images = [
    'lokaso.jpg',
    'gatorro.jpg',
    'horseluis.jpg',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId); // Limpiar el intervalo al desmontar el componente
  }, []); // El segundo argumento vacío asegura que el efecto solo se ejecute una vez al montar el componente

  return (
    <div className="slider">
      <TransitionGroup>
        <CSSTransition key={currentImage} timeout={500} classNames="fade">
          <img src={images[currentImage]} alt={`Slide ${currentImage + 1}`} />
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default Slider;
