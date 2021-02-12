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
                language: 'us-US',
                include_adult: true
            }
        )
    ).then(result => result.json());
}

export function movieDetails(id) {
    return fetch(
        getApiUrl(
            `/movie/${id}`,
            {
                language: 'us-US',
            }
        )
    ).then(result => result.json());
}