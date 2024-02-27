import DropdownAdopta from "./DropdownAdopta"
import Nav_Button from "./Nav_Button"
import Inicio from "./Inicio"
import SobreNosotrosButton from "./SobreNosotrosButton"

const Buttons_Navbar = () => {
  return (
    <div className='Buttons_Navbar'>
        {/* <Nav_Button button="Inicio"/> */}
        <Inicio />
        <DropdownAdopta button="Adopta"/>
        <Nav_Button button="Dona"/>
        <SobreNosotrosButton/>
        <Nav_Button button="Carrito"/>
    </div>
  )
}

export default Buttons_Navbar