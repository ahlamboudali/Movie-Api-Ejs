import findMovie from "../utils/findMovie.js";

const movies = [
    {
        id: 1,
        logo:'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6E3379DBFDA41CF305BFD7FE6D14FDB5F901F0CDC9B27C66D7E6FBEA2864B4F2/scale?width=1200&aspectRatio=1.78&format=webp',
        title:'The Lion King',
        director:'on Favreau',
        year:'2019'
    },
    {
        id: 2,
        logo:'https://ncartmuseum.org/wp-content/uploads/2023/04/puss-in-boots-the-last-wish.jpg',
        title:'The Garfield Movie',
        director:'Mark Dindal',
        year:'2024'
    },
    {
        id: 1,
        logo:'https://images.seattletimes.com/wp-content/uploads/2022/12/202212160600MCT_____PHOTO____ENTER-PUSS-BOOTS-LAST-WISH-MOVIE-REVIEW-2-MCT.jpg?d=2040x851',
        title:'Puss in Boots: The Last Wish',
        director:'Joel Crawford',
        year:'2022'
    }
];

class Movie {
    static getAll = () => {
        return movies;
    };

    static getById = (id) => {
        return findMovie(movies, id);
    };

    static add = (movie) => {
        movies.push(movie);
        return movies;
    };

    static update = (id, movie) => {
        const movieExist = findMovie(movies, id);
        if(movieExist) {
            movieExist.title = movie.title;
            movieExist.director = movie.director;
            movieExist.year = movie.year;
            movieExist.poster = movie.poster;
            return movieExist;
        } else {
            return null;
        };    
    };
    
    static delete = (id) => {
        const movieExist = findMovie(movies, id);
        if (movieExist) {
            movies = movies.filter((movie) => movie.id !== id);
            return movies;
        } else {
            return null;
        }
    };
};

export default Movie;