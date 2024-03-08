import Buttons_Navbar from "./Buttons_Navbar"
import Logo from "./Logo"
import '../Styles/Navbar.css'

const Navbar = () => {
  return (
    <div className="Navbar">
        <Logo />
        <Buttons_Navbar />        
    </div>
  )
}

export default Navbar