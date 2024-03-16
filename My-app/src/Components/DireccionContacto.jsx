import { useState } from "react"


export function DireccionContacto(){
    const[ubi,setUbi]=useState(false);
    function handleUbiToggle(){
        setUbi(()=>!ubi)
    }

    return(
    <div>
        <h2>¡Encuéntranos!</h2>
        <i class="fa-solid fa-location-dot"  onClick={handleUbiToggle}></i>
        { ubi && <p className="NombreIcono">París,Francia </p>} 
    </div>
    )
    
}