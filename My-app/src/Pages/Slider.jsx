
import lokaso from '../assets/lokaso.jpg';
import gatorro from '../assets/gatorro.jpg';
import horseluis from '../assets/horseluis.jpg';
import '../styles/Slider.scss'
import { useEffect, useState } from 'react';

const Carrusel = () => {
  const images = [lokaso, gatorro, horseluis];
  const textos= [
    'Nuestra misión es brindar amor, cuidado y un hogar seguro a cada animalito que cruza nuestro camino, porque creemos en la dignidad y el respeto hacia todas las criaturas vivientes.',
    'Trabajamos incansablemente para promover la adopción responsable y la conciencia sobre el bienestar animal, construyendo puentes de compasión y empatía en nuestra comunidad.',
    'En nuestra protectora de animales, nos esforzamos por ser la voz de aquellos que no pueden hablar, defendiendo fervientemente la justicia y el derecho de cada ser vivo a una vida plena y feliz.'
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Cambia cada 6 segundos

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="slider-wrapper">

       <div className='contenido'>

       {images.map((image, index) => (
          <div key={index} className={index === currentIndex ? 'slide active' : 'slide'}>
            <img src={image} alt={`Slide ${index + 1}`} />
            <div className="text-overlay">{textos[index]}</div>
          </div>
        ))}
          </div>
      </div>
  );
};

export default Slider;
