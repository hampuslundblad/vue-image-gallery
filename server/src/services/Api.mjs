import axios from "axios";

export const Api = () => {
  return axios.create({
    baseURL: "https://api.flickr.com/services/rest",
  });
};
