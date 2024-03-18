import { useEffect, useState } from "react";
import { AnimalCard } from "../Components/AnimalCard";
import { ImagesDogs } from "../Components/utils/DogApi";
import { ImagesCats } from "../Components/utils/CatApi";
import '../styles/Card.scss';

export function DogCard({ limit = 10 }) {
  const [dogImages, setDogImages] = useState([]);

  useEffect(() => {
    const fetchDogImages = async () => {
      try {
        const images = await ImagesDogs(limit);
        setDogImages(images);
      } catch (error) {
        console.error("Error al obtener las imágenes de perros:", error);
      }
    };
    
    fetchDogImages();
  }, [limit]);
  
  return (
    <div className="cards-container">
      {dogImages.map((dog, index) => (
        <AnimalCard
          className="card"
          key={index}
          id={dog.id}
          photo={dog.url}
          name={dog.breeds[0].name}
          description={dog.breeds[0].temperament}
          tipo={"perros"}
        />
      ))}
    </div>
  );
}

export function CatCard({ limit = 8 }) {
  const [catImages, setCatImages] = useState([]);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const images = await ImagesCats(limit);
        setCatImages(images);
      } catch (error) {
        console.error("Error al obtener las imágenes de gatos:", error);
      }
    };

    fetchCatImages();
  }, [limit]);
  
  return (
    <div className="cards-container">
      {catImages.map((cat, index) => (
        <AnimalCard
          className="card"
          key={index}
          id={cat.id}
          photo={cat.url}
          name={cat.breeds[0].name}
          description={cat.breeds[0].temperament}
          tipo={"gatos"}
        />
      ))}
    </div>
  );
}