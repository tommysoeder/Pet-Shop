import "./App.css";
import Navbar from "./Pages/Navbar";
import Slider from "./Pages/Slider";
import { Card } from "./Pages/Card";
import Footer from "./Pages/Footer";
import HomePage from "./Pages/HomePage"
import Donacion from "./Components/Donacion";
import Agradecimiento from "./Components/Agradecimiento";
import AdoptaPerro from "./Components/AdoptaPerro";
import AdoptaGato from "./Components/AdoptaGato";
import Carrito from "./Components/Carrito";
import SobreNosotros from  "./Components/SobreNosotros"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
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
      <Slider />
      <Card />
      
      <Footer />
    </>
  );
}

export default App;
