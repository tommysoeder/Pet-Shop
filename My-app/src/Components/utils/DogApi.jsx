import { TheCatAPI } from "@thatapicompany/thecatapi";

const API_KEY = import.meta.env.VITE_REACT_APP_DOG_API_KEY;
const theCatAPI = new TheCatAPI(API_KEY, {
    host: "https://api.thedogapi.com/v1",
  });
  
  export async function ImagesDogs(){
    
    try {
      const images = await theCatAPI.images.searchImages({
        limit: 8,
        hasBreeds: true,
      }, {
        headers: {
          'x-api-key': API_KEY,
        },
      });
      return images;
    } catch (error) {
      console.error("Error en la llamada a la API:", error);
      
    }
  }
  