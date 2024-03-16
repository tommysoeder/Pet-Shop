import Arriba from "../Components/Arriba"
import Slider from './Slider'
import {Card} from './Card'
import "../styles/HomePage.scss"


const HomePage = () => {
  return (
    <div className="homePage-style">   
      <Slider />
      <Card className="cardStyle"/>
      <Arriba />
    </div>
  )
}

export default HomePage