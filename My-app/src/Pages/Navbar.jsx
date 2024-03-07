import Buttons_Navbar from "../Components/Buttons_Navbar"
import Logo from "../Components/Logo"
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className="Navbar">
        <Logo />
        <Buttons_Navbar />        
    </div>
  )
}

export default Navbar