import {CatCard} from '../Pages/Card'
import "../styles/HomePage.scss"

const AdoptaGato = () => {
  return (
    <div className='homePage-style'>Adopta un Gato
      <CatCard limit={16}/>
    </div>
  )
    
  }
  
  export default AdoptaGato