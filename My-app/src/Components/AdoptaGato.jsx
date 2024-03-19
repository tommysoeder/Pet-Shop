import {CatCard} from '../Pages/Card'
import "../styles/HomePage.scss"

const AdoptaGato = () => {
  return (
    <div className='homePage-style'>
      <div className='tituloAdopcionMascota'>
      <p>Adopta uno de nuestros gatetes</p> <i class="fa-solid fa-cat"></i>
      </div>
      <CatCard limit={16}/>
    </div>
  )
    
  }
  
  export default AdoptaGato