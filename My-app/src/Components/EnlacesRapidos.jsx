import '@fortawesome/fontawesome-free/css/all.css';
import {Link} from "react-router-dom"

export function EnlacesRapidos(){

    //Link to="/dona">Dona</Link>  asis e hacen los links//
    return(
        <div>
            <h2>Enlaces rapidos</h2>
            
            <Link to="/adopta/perros"><i class="fa-solid fa-dog"></i> Perros</Link>  
            <hr /> 
            <Link to="/adopta/gatos"><i class="fa-solid fa-cat"></i> Gatos</Link>
            <hr />
            <Link to=""> <i class="fa-solid fa-house"></i> Inicio</Link> 
            <hr />
            <Link to="/dona"><i class="fa-brands fa-paypal"></i> Dona</Link>
            <hr />
            
        
            

        </div>
    )
}