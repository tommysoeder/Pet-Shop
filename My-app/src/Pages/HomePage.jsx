import Arriba from "../Components/Arriba"
import Slider from './Slider'
import {DogCard, CatCard} from './Card'
import "../styles/HomePage.scss"


const HomePage = () => {
  return (
    <div className="homePage-style">   
      <Slider />
      <DogCard limit={8}/>
      <CatCard limit={8}/>
      <Arriba />
    </div>
  )
}

export default HomePage