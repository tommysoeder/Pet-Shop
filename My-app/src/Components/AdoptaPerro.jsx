import {DogCard} from '../Pages/Card'
import "../styles/HomePage.scss"

const AdoptaPerro = () => {
 
  
  
  
  return (
    <div className='homePage-style'>
      <div className='tituloAdopcionMascota'>
      <p >Adopta uno de nuestros perretes   </p> <i class="fa-solid fa-paw"></i>
      </div>
      
      <DogCard limit={16}/>
    </div>
  )

}

export default AdoptaPerro;