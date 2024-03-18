import { TheCatAPI } from "@thatapicompany/thecatapi";
import axios from "axios";

const API_KEY = import.meta.env.VITE_REACT_APP_CAT_API_KEY; 
const theCatAPI = new TheCatAPI(API_KEY);

export async function ImagesCats(limit = 8) {
  try {
    const images = await theCatAPI.images.searchImages({
      limit: limit, 
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
export async function getCatImageById(catId) {
  try {
    const response = await axios.get(`https://api.thecatapi.com/v1/images/${catId}`, {
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
