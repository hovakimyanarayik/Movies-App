const API_KEY = process.env.REACT_APP_API_KEY
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
  credits: (id) => `movie/${id}/credits`,
  similar: (id) => `movie/${id}/similar`,
  recomendations: (id) => `movie/${id}/recommendations`,
  videos: (id) => `movie/${id}/videos`
};
export const notFoundImage =
  "https://www.vinelanddriveintheater.com/assets/front/images/comingSoon.jpg";

class DataBase {
  static get(endpoint, options) {
    const params = {
      ...defaultOptions,
      ...options,
    };
    if(params.query && !params.with_genres) endpoint = endpoints.search()
    const queryParams = new URLSearchParams(Object.entries(params)).toString();

    return fetch(url + endpoint + "?" + queryParams).then(checkStatus);
  }

  static getOriginalImageURL(link) {
    return `https://image.tmdb.org/t/p/original${link}`;
  }
}

export default DataBase;
