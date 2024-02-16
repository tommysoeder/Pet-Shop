import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Slider from './Slider'
import Card from './Card'
import Footer from './Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Slider />
      <Card />
      <Footer />
    </>
  )
}

export default App
