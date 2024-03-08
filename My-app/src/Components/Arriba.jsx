import { useState, useEffect } from 'react';
import imagen from '../assets/unnamed.png'
import '../index.css';

const Arriba = () => {
  const [mostrarBoton, setMostrarBoton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if  (window.pageYOffset > 20) { 
        setMostrarBoton(true);
      } else {
        setMostrarBoton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

   
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={mostrarBoton ? 'Arriba-active' : 'Arriba'} onClick={scrollToTop}>
        <img src={imagen}/>
    </div>
  );
};

export default Arriba;
