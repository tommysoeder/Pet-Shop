import imagen from '../assets/Logo-Horse-Luis.png'; // Ajusta la ruta según la ubicación real de la imagen

const Logo = () => {
  return (
    <div>
        <img src={imagen} width='150px' alt="Logo"></img>
    </div>
  )
}

export default Logo
