import '../styles/AnimalCard.scss';
import { useNavigate } from 'react-router-dom';

export function AnimalCard ({id, photo, name, description, tipo }) {
  const navigate = useNavigate();

  const handleClick = () => {
   
    navigate(`/adopta/${tipo}/${id}`);
  };
  
  return (
    <div className="animal-card">
      <img src={photo} alt={"Foto del animal"} className="animal-photo" />
      <div className="animal-details">
        <h2 className="animal-name">{name}</h2>
        <p className="animal-description">{description}</p>
        
      </div>
      <button className="adoptame-button" onClick={handleClick}>Adoptame</button>
      
    </div>
  );
};



