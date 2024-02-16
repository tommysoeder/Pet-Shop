import Home_Button from "./Home_Button"
import Logo from "./Logo"
import Adopt_Button from "./Adopt_Button"
import Dona_Button from "./Dona_Button"
import Contacta_Button from "./Contact_Button"
import Cart_Button from "./Cart_Button"
import Title from "./Title"

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