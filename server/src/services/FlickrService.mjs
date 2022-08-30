import axios from "axios";
import { Api } from "./Api.mjs";
import config from "../config/config.js";

export async function searchImages(imageText) {
  const response = await Api().get(
    "/?method=flickr.photos.search&api_key=" +
      config.apiKey +
      `&text=${imageText}` +
      `&media=photos` +
      `&format=json` +
      `&nojsoncallback=1` +
      `&sort=relevance`
  );

  let imageUris = [];
  let photos = response.data.photos.photo;
  
  for (const [key, photo] of Object.entries(photos)) {
    const imageUri = convertToImageUri(photo);
    imageUris.push(imageUri);

  }
  return imageUris
}

const convertToImageUri = (flickrImageObject) => {
  try {
    return `https://live.staticflickr.com/${flickrImageObject.server}/${flickrImageObject.id}_${flickrImageObject.secret}.jpg`;
  } catch (error) {
    return;
  }
};
