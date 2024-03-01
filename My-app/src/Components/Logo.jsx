import imagen from '../assets/dog_logo.png'; 
import Nav_Button from './Nav_Button';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className='Logo'>
      <Nav_Button link={<Link to="/"><img src={imagen} width='80px' alt="Logo"></img></Link>}/>     
        <h3>Horse Luis Animal Shelter</h3>      
    </div>
  )
}

export default Logo
