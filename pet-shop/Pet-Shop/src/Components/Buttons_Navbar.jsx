import Nav_Button from "./Components/Nav_Button"

const Buttons_Navbar = () => {
  return (
    <div className='Buttons_Navbar'>
        <Nav_Button button="Inicio"/>
        <Nav_Button button="Adopta"/>
        <Nav_Button button="Dona"/>
        <Nav_Button button="Sobre Nosotros"/>
        <Nav_Button button="Carrito"/>
    </div>
  )
}

export default Buttons_Navbar