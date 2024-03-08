import imagen from '../assets/thankyou.png'
import '../styles/agradecimiento.css'

const Agradecimiento = () => {
  return (
    <div className='agradecimiento'>
        <img src={imagen}  alt="Gracias!"></img>
        <p>Todo el equipo de Horse Luis Animal Shelter, incluido el propio Horse Luis, le estamos inmensamente agradecidos por su aportación.</p>
    </div>
  )
}

export default Agradecimiento