import { useState } from "react"


export function DireccionContacto(){
    const[ubi,setUbi]=useState(false);
    function handleUbiToggle(){
        setUbi(()=>!ubi)
    }

    return(
    <div>
        <h2>¡Encuentranos!</h2>
        <i class="fa-solid fa-location-dot"  onClick={handleUbiToggle}></i>
        { ubi && <p className="NombreIcono">Paris,Francia </p>} 
    </div>
    )
    
}