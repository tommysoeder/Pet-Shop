import {DogCard} from '../Pages/Card'
import "../styles/HomePage.scss"
import Arriba from './Arriba';

const AdoptaPerro = () => {
 
  
  
  
  return (
    <div className='homePage-style'>
      <div className='tituloAdopcionMascota'>
      <p >Adopta uno de nuestros perretes   </p> <i class="fa-solid fa-paw"></i>
      </div>
      <DogCard limit={16}/>
      <Arriba/>
    </div>
  )

}

export default AdoptaPerro;