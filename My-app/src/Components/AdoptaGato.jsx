import { useEffect, useState } from "react";

import { AnimalCard } from "./AnimalCard";
import { ImagesCats } from "./utils/CatApi";

const AdoptaGato = () => {
  const [gatos,setGatos]=useState([]);

  useEffect(()=>{
    const fetchGato=async()=>{
      try{
        const images=await ImagesCats();
        const gatosData=images.filter((image)=>image.breeds.length>0);
        setGatos(gatosData);
      } catch(error){
        console.error("error al obtener las imagenes", error);
      }
    };
    fetchGato();
  },[]);
  
  
  
  return (
   <div>
    <h1>adopta un gato</h1>
    <div className="cards-container">
      {gatos.map((gato)=>(
        <AnimalCard
        key={gato.id}
        id={gato.id}
        photo={gato.url}
        name={gato.breeds[0].name}
        description={gato.breeds[0].description}
        tipo="gato"
        />
      ))}
    </div>
   </div>
  )

}

export default AdoptaGato;