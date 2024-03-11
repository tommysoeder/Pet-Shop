import '../styles/DogCard.scss';

export function AnimalCard ({ photo, name, description }) {
  
  
  return (
    <div className="animal-card">
      <img src={photo} alt={"Foto del animal"} className="animal-photo" />
      <div className="animal-details">
        <h2 className="animal-name">{name}</h2>
        <p className="animal-description">{description}</p>
      </div>
      
    </div>
  );
};



