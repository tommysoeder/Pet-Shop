import {DogCard} from '../Pages/Card'
import "../styles/HomePage.scss"

const AdoptaPerro = () => {
  return (
    <div className='homePage-style'>Adopta un Perro
      <DogCard limit={16}/>
    </div>
  )

}

export default AdoptaPerro;