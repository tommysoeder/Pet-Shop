import { useState , useEffect } from 'react';
import imagen from '../assets/thankyou.png'
import '../styles/agradecimiento.css'
import { useLocation } from 'react-router-dom';

const Agradecimiento = () => {
    const [totalDonation, setTotalDonation] = useState(0)
    console.log("Total donado:", totalDonation);

    useEffect(() => {
      const totalDonationFromStorage = localStorage.getItem('totalDonation');
      if (totalDonationFromStorage) {
          setTotalDonation(Number(totalDonationFromStorage));
      }
  }, []);

  return (
    <div className='agradecimiento'>
        <img src={imagen}  alt="Gracias!"></img>
        <p>Todo el equipo de Horse Luis Animal Shelter, incluido el propio Horse Luis, le estamos inmensamente agradecidos por su aportación.</p>
        <h3>Total donado por nuestros colaboradores: {totalDonation}€</h3>     
    </div>
  )
}

export default Agradecimiento
