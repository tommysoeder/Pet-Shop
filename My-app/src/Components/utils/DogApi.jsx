import { TheCatAPI } from "@thatapicompany/thecatapi";
import axios from 'axios';

const API_KEY = import.meta.env.VITE_REACT_APP_DOG_API_KEY;
const theCatAPI = new TheCatAPI(API_KEY, {
  host: "https://api.thedogapi.com/v1",
});

export async function ImagesDogs(limit = 8) {
  try {
    const images = await theCatAPI.images.searchImages(
      {
        limit: limit,
        hasBreeds: true,
      },
      {
        headers: {
          "x-api-key": API_KEY,
        },
      }
    );
    return images;
  } catch (error) {
    console.error("Error en la llamada a la API:", error);
  }
}

export async function getDogImageById(dogId) {
  try {
    const response = await axios.get(`https://api.thedogapi.com/v1/images/${dogId}`, {
      headers: {
        "x-api-key": API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error en la llamada a la API:", error);
    throw error;
  }
}
