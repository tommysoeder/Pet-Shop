import DropdownAdopta from "./DropdownAdopta"
import Nav_Button from "./Nav_Button"

const Buttons_Navbar = () => {
  return (
    <div className='Buttons_Navbar'>
        <Nav_Button button="Inicio"/>
        <DropdownAdopta button="Adopta"/>
        <Nav_Button button="Dona"/>
        <Nav_Button button="Sobre Nosotros"/>
        <Nav_Button button="Carrito"/>
    </div>
  )
}

export default Buttons_Navbar