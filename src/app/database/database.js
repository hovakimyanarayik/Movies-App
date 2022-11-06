import { API_KEY } from './apiKey'


class DataBase {
    static checkStatus(response) {
        return response.status < 400 ? response.json() : null
    }
    static getPopularMovies() {
        return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
            .then(DataBase.checkStatus)
    }
    
    static getTrendingMovies() {
        return fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
            .then(DataBase.checkStatus)
    }

    static getUpcomingMovies() {
        return fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
            .then(DataBase.checkStatus)
    }

    static getTopRatedMovies() {
        return fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
            .then(DataBase.checkStatus)
    }

    static getOriginalImageURL(link) {
        return `https://image.tmdb.org/t/p/original${link}`
    }

}

export default DataBase;