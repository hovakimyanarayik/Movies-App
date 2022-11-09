import { API_KEY } from './apiKey'
import queryString from 'query-string'

const url = 'https://api.themoviedb.org/3/'

class DataBase {
    static checkStatus(response) {
        return response.status < 400 ? response.json() : null
    }
    static getPopularMovies() {
        return fetch(`${url}movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
            .then(DataBase.checkStatus)
    }

    static getTrendingMovies() {
        return fetch(`${url}trending/movie/day?api_key=${API_KEY}`)
            .then(DataBase.checkStatus)
    }

    static getUpcomingMovies() {
        return fetch(`${url}movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
            .then(DataBase.checkStatus)
    }

    static getTopRatedMovies() {
        return fetch(`${url}movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
            .then(DataBase.checkStatus)
    }

    static getGenres() {
        return fetch(`${url}genre/movie/list?api_key=${API_KEY}&language=en-US`)
            .then(DataBase.checkStatus)
    }

    static getMovies({page=1, genres=[] }) {
        const reformedOptions = {
            page,
            with_genres: genres.join(',')
        }
        return fetch(`${url}discover/movie?api_key=${API_KEY}&language=en-US&${queryString.stringify(reformedOptions)}`)
            .then(DataBase.checkStatus)
    }

    static searchMovies(query) {
        console.log(query);
        return fetch(`${url}search/movie?api_key=${API_KEY}&query=${query}`)
            .then(DataBase.checkStatus)
    }

    static getOriginalImageURL(link) {
        return `https://image.tmdb.org/t/p/original${link}`
    }

}

export const notFoundImage = 'https://www.vinelanddriveintheater.com/assets/front/images/comingSoon.jpg'

export default DataBase;