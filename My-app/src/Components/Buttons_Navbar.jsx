import DropdownAdopta from "./DropdownAdopta"
import Nav_Button from "./Nav_Button"
import { Link } from 'react-router-dom';

const Buttons_Navbar = () => {
  return (
    <div className='Buttons_Navbar'>
        <div className='boton1'><Nav_Button link={<Link to="/">Inicio</Link>}/></div>
        <DropdownAdopta button="Adopta"/>
        <Nav_Button link={<Link to="/dona">Dona</Link>}/>
        <div className='boton4'><Nav_Button link={<Link to="/sobre-nosotros">Sobre Nosotros</Link>}/></div>
    </div>
  )
}

export default Buttons_Navbar