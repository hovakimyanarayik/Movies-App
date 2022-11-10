import { API_KEY } from "./apiKey";

const url = "https://api.themoviedb.org/3/";
const defaultOptions = {
  api_key: API_KEY,
  language: "en-US",
};

function checkStatus(response) {
  return response.status < 400 ? response.json() : null;
}

export const endpoints = {
  popular: () => "movie/popular",
  trending: () => "trending/movie/day",
  upcoming: () => "movie/upcoming",
  top_rated: () => "movie/top_rated",
  genres: () => "genre/movie/list",
  all: () => "discover/movie",
  search: () => "search/movie",
  byId: (id) => `movie/${id}`,
};
export const notFoundImage =
  "https://www.vinelanddriveintheater.com/assets/front/images/comingSoon.jpg";

class DataBase {
  static get(endpoint, options) {
    const params = {
      ...defaultOptions,
      ...options,
    };
    const queryParams = new URLSearchParams(Object.entries(params)).toString();
    console.log(queryParams);
    return fetch(url + endpoint + "?" + queryParams).then(checkStatus);
  }

  static getOriginalImageURL(link) {
    return `https://image.tmdb.org/t/p/original${link}`;
  }
}

export default DataBase;
