import Buttons_Navbar from "../Components/Buttons_Navbar"
import Logo from "../Components/Logo"
import Nav_Burger from "../Components/Nav_Burger"
import '../styles/Navbar.css'


const Navbar = () => {
  return (
    <div className="Navbar">
        <Logo />
        <Buttons_Navbar /> 
        <Nav_Burger />       
    </div>
  )
}

export default Navbar