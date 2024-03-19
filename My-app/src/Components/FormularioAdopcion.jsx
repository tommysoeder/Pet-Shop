import { useParams } from "react-router-dom"
import FormularioPerro from "./FormularioPerro";
import FormularioGato from "./FormularioGato";

const FormularioAdopcion = () =>{
    const {tipo}= useParams();

    return tipo==="perros" ? <FormularioPerro/> : <FormularioGato/>
};

export default FormularioAdopcion