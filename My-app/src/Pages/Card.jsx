import { DogCard } from "../Components/DogCard";
import '../styles/Card.scss';

export function Card({}) {
  const dogData1 = {
    photo: "https://jooinn.com/images/dog-67.jpg",
    name: "Patricio",
    description: "Es un perro gordo",
  }
  const dogData2 = {
    photo: "https://th.bing.com/th/id/R.5909a0defc7b642eb49dc8544bac2635?rik=zEL6TgfRA6jItA&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f01%2f226253-animals-dog-Labrador_Retriever-puppies.jpg&ehk=DzxoDJ61DjYu2Y0qRM4fgQtddAhzjCPwDrB19N%2fyJ5A%3d&risl=&pid=ImgRaw&r=0",
    name: "DevoraMundos",
    description: "Estas gordo amigo",
  }
  return (
    <div className="cards-container">
      <DogCard className="card" {...dogData1} />
      <DogCard className="card" {...dogData2} />
      <DogCard className="card" {...dogData1} />
      <DogCard className="card" {...dogData2} />
      <DogCard className="card" {...dogData1} />
      <DogCard className="card" {...dogData2} />
      <DogCard className="card" {...dogData1} />
      <DogCard className="card" {...dogData2} />
    </div>
  );
}
