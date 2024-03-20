import "./App.css";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import HomePage from "./Pages/HomePage";
import Donacion from "./Components/Donacion";
import Agradecimiento from "./Components/Agradecimiento";
import AdoptaPerro from "./Components/AdoptaPerro";
import AdoptaGato from "./Components/AdoptaGato";

import SobreNosotros from  "./Components/SobreNosotros"
import { Route, Routes } from "react-router-dom";

import { useState, useEffect } from "react";
import Loading from './Components/Loading';


import FormularioAdopcion from "./Components/FormularioAdopcion";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoading, setShowLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {isLoading ? (
        <Loading />
      ) : showLoading ? (
        <PrimerComponente />
      ) : (
        <div className="content">
          <Navbar />
          <Routes>
            <Route path="/sobre-nosotros" element={<SobreNosotros />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/dona" element={<Donacion />} />
            <Route path="/donated" element={<Agradecimiento />} />
            <Route path="/adopta/perros" element={<AdoptaPerro />} />
            <Route path="/adopta/gatos" element={<AdoptaGato />} />
         
            <Route path="/adopta/:tipo/:id" element={<FormularioAdopcion/>}/>
        </Routes>
        <Footer />    
        </div>
      )}
    </div>
  );
}

export default App;
