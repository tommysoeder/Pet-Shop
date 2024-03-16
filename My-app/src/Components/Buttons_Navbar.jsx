import DropdownAdopta from "./DropdownAdopta"
import Nav_Button from "./Nav_Button"
import { Link } from 'react-router-dom';

const Buttons_Navbar = () => {
  return (
    <div className='Buttons_Navbar'>
        <Nav_Button link={<Link to="/">Inicio</Link>}/>
        <DropdownAdopta button="Adopta"/>
        <Nav_Button link={<Link to="/dona">Dona</Link>}/>
        <Nav_Button link={<Link to="/sobre-nosotros">Sobre Nosotros</Link>}/>
    </div>
  )
}

export default Buttons_Navbar