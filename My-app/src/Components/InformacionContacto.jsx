import { CorreoElectronico } from "./CorreoElectronico";
import { DireccionContacto } from "./DireccionContacto";
import { NumeroTelefono } from "./NumeroTelefono";

export function InformacionContacto(){

    return(
        <div>
            <DireccionContacto/>
            <NumeroTelefono/>
            <CorreoElectronico/>

        </div>
    )
}