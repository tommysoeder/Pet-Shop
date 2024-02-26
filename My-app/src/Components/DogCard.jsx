import PropTypes from 'prop-types';
import '../styles/DogCard.scss';

export function DogCard ({ photo, name, description }) {
  return (
    <div className="dog-card">
      <img src={photo} alt={"Foto del perro"} className="dog-photo" />
      <div className="dog-details">
        <h2 className="dog-name">{name}</h2>
        <p className="dog-description">{description}</p>
      </div>
    </div>
  );
};

DogCard.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};


