import FormularioDonacion from './FormularioDonacion';
import TextoDonacion from './TextoDonacion';
import '../styles/Donacion.css'

const Donacion = () => {
 

  return (
    <>
    <TextoDonacion/>
    <div className='formularioDonacion'>
    <FormularioDonacion/>
    </div>
    </>
  );
};

export default Donacion;
