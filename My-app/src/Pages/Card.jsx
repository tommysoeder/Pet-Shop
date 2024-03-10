import { useEffect, useState } from "react";
import { DogCard } from "../Components/DogCard";
import { ImagesDogs } from "../Components/utils/DogApi"; // Cambia la importación según la ubicación de tu función ImagesDogs
import '../styles/Card.scss';

export function Card() {
  const [dogImages, setDogImages] = useState([]);

  useEffect(() => {
    const fetchDogImages = async () => {
      try {
        const images = await ImagesDogs();
        setDogImages(images);
      } catch (error) {
        console.error("Error al obtener las imágenes de perros:", error);
      }
    };

    fetchDogImages();
  }, []);

  return (
    <div className="cards-container">
      {dogImages.map((dog, index) => (
        <DogCard
          className="card"
          key={index}
          photo={dog.url}
          name={dog.breeds[0].name}
          description={dog.breeds[0].temperament}
        />
      ))}
    </div>
  );
}
