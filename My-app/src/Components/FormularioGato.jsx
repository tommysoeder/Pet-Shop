import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCatImageById } from "./utils/CatApi";

const FormularioGato = (/*props*/) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [mascotaName, setMascotaName] = useState("");
  const [razonAdopcion, setRazonAdopcion] = useState("");
  const [AmigosAnimales, setAmigosAnimales] = useState("");
  const [segundoNumero, setSegundoNumero] = useState("");

  const [gato, setGato] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchGato = async () => {
      try {
        const gatoData = await getCatImageById(id);
        setGato(gatoData);
      } catch (error) {
        console.error("Error al cargar la imagen del gato:", error);
      }
    };

    fetchGato();
  }, [id]);

  const handleSubmitAdopted = (event) => {
    event.preventDefault();
  };
  if (!gato) {
    return <div>Cargando...</div>;
  }
  return (
    <div className="ContenedorFormulario">
        <img src={gato.url} alt={gato.breeds[0].name} />
        <h2> {gato.breeds[0].name}</h2>
     
      <h1 className="AdoptaGatoh">Adopta un Gato(Preguntas Rapidas)</h1>
      <h2 className="AdoptaGatoh">
        Formulario de adopcion para {gato.breeds[0].name}
      </h2>
      <form className="FormularioAdopcion" onSubmit={handleSubmitAdopted}>
        <div className="CategoriaFormulario">
          <div className="PreguntaFormIZQ">
            <label className="AdoptaGatoh" htmlFor="nombre">
              Nombre<span className="requiredSpan">*</span>:
            </label>
            <input
              className="InputForm1"
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>

          <div className="PreguntaFormDER">
            <label className="AdoptaGatoh" htmlFor="apellido">
              Apellido<span className="requiredSpan">*</span>:
            </label>
            <input
              className="InputForm1"
              type="text"
              id="apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="CategoriaFormulario">
          <div className="PreguntaFormIZQ">
            <label className="AdoptaGatoh" htmlFor="fechaNacimiento">
              Fecha de nacimiento<span className="requiredSpan">*</span>:
            </label>
            <input
              className="InputForm1"
              type="date"
              id="fechaNacimiento"
              value={fechaNacimiento}
              onChange={(e) => setFechaNacimiento(e.target.value)}
            />
          </div>

          <div className="PreguntaFormDER">
            <label className="AdoptaGatoh" htmlFor="direccion">
              Direccion<span className="requiredSpan">*</span>:
            </label>
            <input
              className="InputForm1"
              type="text"
              id="direccion"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
            />
          </div>
        </div>

        <div className="CategoriaFormulario">
          <div className="PreguntaFormIZQ">
            <label className="AdoptaGatoh" htmlFor="telefono">
              Teléfono<span className="requiredSpan">*</span>:
            </label>
            <input
              className="InputForm1"
              type="tel"
              id="telefono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
            />
          </div>

          <div className="PreguntaFormDER">
            <label className="AdoptaGatoh" htmlFor="email">
              Correo electrónico<span className="requiredSpan">*</span>:
            </label>
            <input
              className="InputForm1"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="CategoriaFormulario">
          <div className="PreguntaFormIZQ">
            <label className="AdoptaGatoh" htmlFor="mascotaName">
              Nombre del Gato<span className="requiredSpan">*</span>:
            </label>
            <input
              className="InputForm1"
              type="text"
              id="mascotaName"
              value={mascotaName}
              onChange={(e) => setMascotaName(e.target.value)}
              required
            />
          </div>
          <div className="PreguntaFormDER">
            <label className="AdoptaGatoh" htmlFor="segundoNumero">
              Segundo Número de contacto
            </label>
            <input
              className="InputForm1"
              type="tel"
              id="segundoNumero"
              value={segundoNumero}
              onChange={(e) => setSegundoNumero(e.target.value)}
            />
          </div>
        </div>

        <h2 className="AdoptaGatoh">Preguntas desarrollar!</h2>

        <div className="FormDesarrollar">
          <label className="AdoptaGatoh" htmlFor="razonAdopcion">
            1. ¿por qué has decidido adoptar un gato y no comprarlo?{" "}
          </label>
          <textarea
            id="razonAdopcion"
            value={razonAdopcion}
            onChange={(e) => setRazonAdopcion(e.target.value)}
          />
        </div>

        <div className="FormDesarrollar">
          <label className="AdoptaGatoh" htmlFor="AmigosAnimales">
            2. En la actualidad, ¿tienes animales con los que tenga que convivir
            el adoptado? ¿cuáles? Cuéntanos algo sobre ellos.{" "}
          </label>
          <textarea
            id="AmigosAnimales"
            value={AmigosAnimales}
            onChange={(e) => setAmigosAnimales(e.target.value)}
          />
        </div>

        <div className="FormDesarrollar">
          <label className="AdoptaGatoh" htmlFor="razonAdopcion">
            3. ¿Sabes qué gastos puede ocasionar un gato? Veterinario,
            alimentación, medicación, etc.
          </label>
          <textarea
            id="razonAdopcion"
            value={razonAdopcion}
            onChange={(e) => setRazonAdopcion(e.target.value)}
          />
        </div>

        <div className="FormDesarrollar">
          <label className="AdoptaGatoh" htmlFor="razonAdopcion">
            4. ¿Hay niños en la vivienda?
          </label>
          <textarea
            id="razonAdopcion"
            value={razonAdopcion}
            onChange={(e) => setRazonAdopcion(e.target.value)}
          />
        </div>

        <div className="FormDesarrollar">
          <label className="AdoptaGatoh" htmlFor="razonAdopcion">
            5. ¿Qué lugar de la vivienda estará destinado al animal? ¿ estaría
            dentro o fuera de la casa? En caso de ser un chalet, ¿está
            convenientemente vallado para su seguridad?{" "}
          </label>
          <textarea
            id="razonAdopcion"
            value={razonAdopcion}
            onChange={(e) => setRazonAdopcion(e.target.value)}
          />
        </div>

        <div className="BotonFormulario">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default FormularioGato;
