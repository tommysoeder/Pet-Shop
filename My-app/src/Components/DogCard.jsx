import PropTypes from 'prop-types';
import '../styles/DogCard.scss';
import { TheCatAPI } from "@thatapicompany/thecatapi";



const API_KEY = "live_vniUOyqjQaDJavpUrqat5XB4taGYzN2q6xRNjtl8cWsdUBDGBnHd1ByUcMukiKaj"
const theCatAPI = new TheCatAPI(API_KEY, {
  host: "https://api.thedogapi.com/v1",
});

export async function ImagesDogs(){
  
  try {
    const images = await theCatAPI.images.searchImages({
      limit: 8,
      hasBreeds: true,
      
    });
    return images;
  } catch (error) {
    console.error("Error en la llamada a la API:", error);
    
  }
}




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


