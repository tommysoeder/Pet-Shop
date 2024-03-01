import imagen from '../assets/dog_logo.png'; 

const Logo = () => {
  return (
    <div className='Logo'>
        <img src={imagen} width='80px' alt="Logo"></img>
        <h3>Horse Luis Animal Shelter</h3>
    </div>
  )
}

export default Logo
