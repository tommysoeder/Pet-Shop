import './App.css'
import { Routes, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage'
import SobreNosotros from './Components/SobreNosotros';
import Navbar from './Pages/Navbar'

function App() {
  
  return (
    <>
   <Navbar />
      <Routes>
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
