import { useEffect, useState } from "react";
import { ImagesDogs } from "./utils/DogApi";
import { AnimalCard } from "./AnimalCard";

const AdoptaPerro = () => {
  const [perros,setPerros]=useState([]);

  useEffect(()=>{
    const fetchPerro=async()=>{
      try{
        const images=await ImagesDogs();
        const perrosData=images.filter((image)=>image.breeds.length>0);
        setPerros(perrosData);
      } catch(error){
        console.error("error al obtener las imagenes", error);
      }
    };
    fetchPerro();
  },[]);
  
  
  
  return (
   <div>
    <h1>adopta un perro</h1>
    <div className="cards-container">
      {perros.map((perro)=>(
        <AnimalCard
        key={perro.id}
        id={perro.id}
        photo={perro.url}
        name={perro.breeds[0].name}
        description={perro.breeds[0].description}
        tipo="perro"
        />
      ))}
    </div>
   </div>
  )

}

export default AdoptaPerro;