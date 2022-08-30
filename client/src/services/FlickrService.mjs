import { Api } from "@/services/Api.mjs";

export default {
  search(query) {
    return Api().get(`images/search/${query}`);
  },
};
