import axios from "axios";

export const suggestionsApi = {
  getSuggestions,
};

function getSuggestions(query) {
  return axios.get(
    `https://cors-anywhere.herokuapp.com/https://unsplash.com/nautocomplete/${query}`
  );
}
