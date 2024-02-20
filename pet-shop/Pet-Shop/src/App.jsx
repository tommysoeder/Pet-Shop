import './App.css'
import Navbar from './Navbar'
import Slider from './Slider'
import Card from './Card'
import Footer from './Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='HomePage'>
      <Navbar />
      <Slider />
      <Card />
      <Footer />
    </div>
  )
}

export default App
