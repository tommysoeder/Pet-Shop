import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDogImageById } from "./utils/DogApi";

const FormularioPerro = () => {
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

  const [perro, setPerro] = useState(null);
  const {id}  = useParams();

  useEffect(() => {
    const fetchPerro = async () => {
      try {
        const perroData = await getDogImageById(id);
        setPerro(perroData);
      } catch (error) {
        console.error("Error al cargar la imagen del perro:", error);
      }
    };

    fetchPerro();
  }, [id]);

  

  const handleSubmitAdopted = (event) => {
    event.preventDefault();
  };
  if (!perro) {
    return <div>Cargando...</div>;
  }
  return (
    <div className="ContenedorFormulario">
      <img src={perro.url} alt={perro.breeds[0].name} />
      <h2> {perro.breeds[0].name}</h2>

      <h1 className="AdoptaGatoh">Adopta un Perro(Preguntas Rapidas)</h1>
      <h2 className="AdoptaGatoh">Formulario de adopcion para {perro.breeds[0].name}</h2>
      <form onSubmit={handleSubmitAdopted}>
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
              Nombre del perro<span className="requiredSpan">*</span>:
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

        <h2>Preguntas desarrollar!</h2>

        <div className="FormDesarrollar">
          <label className="AdoptaGatoh" htmlFor="razonAdopcion">
            1. ¿por qué has decidido adoptar un perro y no comprarlo?{" "}
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
            3. ¿Sabes qué gastos puede ocasionar un perro? Veterinario,
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

export default FormularioPerro;
