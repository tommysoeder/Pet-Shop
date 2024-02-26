import { DogCard } from "../Components/DogCard";

export function Card({}) {
  const dogData = {
    photo: "url_de_la_foto",
    name: "Nombre del perro",
    description: "Descripción del perro.",
  };
  return (
    <div>
      <DogCard {...dogData} />
    </div>
  );
}
