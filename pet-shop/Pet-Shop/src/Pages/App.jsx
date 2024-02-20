import './Styles/App.css'
import Navbar from '../Components/Navbar'
import Slider from '../Components/Slider'
import Card from '../Components/Card'
import Footer from '../Components/Footer'

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
