import { api_Home } from "./types";
import { type DoImageApi, type Doimage } from "./types";

//Obtiene una imagen aleatoria de perro desde la API
async function getRandomDogImqage(): Promise<DoImageApi> {
    const response = await fetch(api_Home);
    const data: DoImageApi = await response.json();

    console.log("URL: ", data.message);
    console.log("Status: ", data.status);

    return data;
}

// Normalizar los datos --> Pasar de DoImageApi a Doimage
function normalizeDoImage(data: DoImageApi): Doimage {
    return {
        url: data.message
    }
}

// Obtener varias imágenes de perros

export async function getManyDogImages(count: number): Promise<Doimage[]> {
    const promises: Promise<DoImageApi>[] = [];
    for (let i = 0; i < count; i++) {
        promises.push(getRandomDogImqage());
    }

    const results = await Promise.all(promises);
    return results.map(normalizeDoImage);
}
module.exports = { getManyDogImages };
