import './App.css'
<<<<<<< HEAD
import Navbar from './Pages/Navbar'
import Slider from './Pages/Slider'
import {Card} from './Pages/Card'
=======
import { Routes, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage'
import SobreNosotros from './Components/SobreNosotros';
import Navbar from './Pages/Navbar'
>>>>>>> 908f1f244e322a127c5fac0465a5f48885f34523
import Footer from './Pages/Footer'
import Donacion from './Components/Donacion';
import Agradecimiento from './Components/Agradecimiento';
import AdoptaPerro from './Components/AdoptaPerro';
import AdoptaGato from './Components/AdoptaGato';
import Carrito from './Components/Carrito';


function App() {
  
  return (
    <>
<<<<<<< HEAD
      <Navbar />
      <Slider />
      <Card />
      <Footer />
=======
    <Navbar />
    <Routes>
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/dona" element={<Donacion />} />
        <Route path="/donated" element={<Agradecimiento />} />
        <Route path="/adopta/perros" element={<AdoptaPerro />} />
        <Route path="/adopta/gatos" element={<AdoptaGato />} />
        <Route path="/carrito" element={<Carrito />} />
    </Routes>
    <Footer />    
>>>>>>> 908f1f244e322a127c5fac0465a5f48885f34523
    </>
  )
}

export default App
