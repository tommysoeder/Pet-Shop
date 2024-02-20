import Buttons from "./Components/Buttons_Navbar"
import Logo from "./Components/Logo"
import Title from "./Components/Title"

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