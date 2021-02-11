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

// export function getTopRated() {
//     return fetch(
//         getApiUrl(
//             `/movie/top_rated`,
//             {
//                 language: 'fr-FR',
//             }
//         )
//     ).then(result => result.json())
// }