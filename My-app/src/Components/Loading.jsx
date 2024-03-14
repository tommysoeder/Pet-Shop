import gif from '../assets/HORSE LUIS.gif'
import '../styles/Loading.css'

const Loading = () => {
  return (
    <div className='loader'>
      <img src={gif} alt="loading..." width="100px"/>
      <h1>Loading...</h1>
      </div>
      
  )
}

export default Loading
