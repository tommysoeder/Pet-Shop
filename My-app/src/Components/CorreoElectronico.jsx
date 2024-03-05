import { useState } from "react"

export function CorreoElectronico(){
    const [textoRefugio, setTextoRefugio]=useState(false)

    const toggleRefugio=()=>{
        setTextoRefugio(!textoRefugio)
    }
    return(
        <div>
            <h2>Solicite Informacion</h2>
             <i class="fa-solid fa-envelope" onClick={toggleRefugio}></i>
             {textoRefugio && <p className="NombreIcono">refugioanimales@correo.com </p> } 
        </div>
    )
}