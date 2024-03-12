export function NuestroBoletin(){

    return(
        <div className="boletincss">
            <h2>¡Recibe las noticias!</h2>
            <p>¿Quieres recibir las últimas novedades? <br />
            ¡Siguenos y cada semana tendras un post nuevo!</p>
            <h3>Email:</h3>
            <input placeholder="Introduzca su email" type="text" />
            <button>Suscribete</button>
            <p className="copyFooter">Aviso legal | Política de Privacidad | Política de cookies</p>
        </div>
    )

}