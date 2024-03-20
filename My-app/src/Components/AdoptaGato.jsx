import {CatCard} from '../Pages/Card'
import "../styles/HomePage.scss"
import Arriba from './Arriba'

const AdoptaGato = () => {
  return (
    <div className='homePage-style'>
      <div className='tituloAdopcionMascota'>
      <p>Adopta uno de nuestros gatetes</p> <i class="fa-solid fa-cat"></i>
      </div>
      <CatCard limit={16}/>
      <Arriba/>
    </div>
  )
    
  }
  
  export default AdoptaGato