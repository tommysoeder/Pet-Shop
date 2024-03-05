import { CorreoElectronico } from "./CorreoElectronico";
import { DireccionContacto } from "./DireccionContacto";
import { NumeroTelefono } from "./NumeroTelefono";

export function InformacionContacto(){

    return(
        <div className="PrimInfoFooter">
            <DireccionContacto/>
            <NumeroTelefono/>
            <CorreoElectronico/>

        </div>
    )
}