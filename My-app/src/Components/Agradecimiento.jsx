import imagen from '../assets/thankyou.png'
import '../styles/agradecimiento.css'
import { useLocation } from 'react-router-dom';

const Agradecimiento = () => {
const location = useLocation();
const totalDonation = location.state?.totalDonation || 0;
console.log("Total donado:", totalDonation);

  return (
    <div className='agradecimiento'>
        <img src={imagen}  alt="Gracias!"></img>
        <h3>Total donado por nuestros colaboradores: {totalDonation}€</h3>
        <p>Todo el equipo de Horse Luis Animal Shelter, incluido el propio Horse Luis, le estamos inmensamente agradecidos por su aportación.</p>
    </div>
  )
}

export default Agradecimiento