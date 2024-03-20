import { useState } from "react"

export function CorreoElectronico(){
    const [textoRefugio, setTextoRefugio]=useState(true)

    const toggleRefugio=()=>{
        setTextoRefugio(!textoRefugio)
    }
    return(
        <div>
            <h2>Solicite Información</h2>
             <i class="fa-solid fa-envelope" onClick={toggleRefugio}></i>
             {textoRefugio && <p className="NombreIcono">HorseLuisShelter@correo.com </p> } 
        </div>
    )
}