import Buttons from "./Buttons_Navbar"
import Logo from "./Logo"
import Title from "./Title"

const Navbar = () => {
  return (
    <div className="Navbar">
        <Logo />
        <Title />
        <Buttons />        
    </div>
  )
}

export default Navbar