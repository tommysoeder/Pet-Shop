import './App.css'
import { Routes, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage'
import SobreNosotros from './Components/SobreNosotros';
import Navbar from './Pages/Navbar'
import Footer from './Pages/Footer'
import Donacion from './Components/Donacion';
import Agradecimiento from './Components/Agradecimiento';


function App() {
  
  return (
    <>
    <Navbar />
    <Routes>
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/dona" element={<Donacion />} />
        <Route path="/donated" element={<Agradecimiento />} />
    </Routes>
    <Footer />    
    </>
  )
}

export default App
