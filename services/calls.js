import {getApiUrl} from "./api";

export function category() {
    return fetch(
        getApiUrl(
            `/genre/movie/list`,
            {
                language: 'fr-FR',
            }
        )
    ).then(result => result.json());
}

export function searchMovie(textSearched) {
    return fetch(
        getApiUrl(
            `/search/movie/`,
            {
                query: textSearched,
                language: 'fr-FR',
                include_adult: true,
            }
        )
    ).then(result => result.json());
}

export function searchGenreMovies(textSearched) {
    return fetch(
        getApiUrl(
            `/discover/movie/`,
            {
                with_genres: textSearched,
                language: 'fr-FR',
                include_adult: true,
            }
        )
    ).then(result => result.json());
}

export function movieDetails(id) {
    return fetch(
        getApiUrl(
            `/movie/${id}`,
            {
                language: 'fr-FR',
            }
        )
    ).then(result => result.json());
}