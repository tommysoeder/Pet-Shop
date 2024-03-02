import Home_Button from "../Components/Home_Button"
import Logo from "../Components/Logo"
import Adopt_Button from "../Components/Adopt_Button"
import Dona_Button from "../Components/Dona_Button"
import Contacta_Button from "../Components/Contact_Button"
import Cart_Button from "../Components/Cart_Button"
import Title from "../Components/Title"

const Navbar = () => {
  return (
    <div class="navbar">
        <Logo />
        <Title />
        <Home_Button />
        <Adopt_Button />
        <Dona_Button />
        <Contacta_Button />
        <Cart_Button />
    </div>
  )
}

export default Navbar