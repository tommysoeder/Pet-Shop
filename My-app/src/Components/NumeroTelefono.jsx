import { useState } from "react"



export function NumeroTelefono(){
    const [seeInstagram,setSeeInstagram]= useState(false);
    const [seeTelefono,setSeeTelefono]=useState(false)

    const toggleInstagram=()=>{
        setSeeInstagram(!seeInstagram);
    }

    const toggleTelefono=()=>{
        setSeeTelefono(!seeTelefono)
    }
    return(
        <div>
            <div>
            <i class="fa-brands fa-instagram" onClick={toggleInstagram}> </i>
            {seeInstagram && <p className="NombreIcono">HorseLuisInsta</p>} 
            </div>
            
            
            <div>
            <i class="fa-solid fa-phone" onClick={toggleTelefono}></i>
            {seeTelefono && <p className="NombreIcono">657675675</p>}  
            </div>    
            
            
        </div>
    )
}