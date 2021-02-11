import { API_KEY, API_URL} from "../constant/api";

function getQueryString(queryParams) {
    let queryString;
    if (typeof queryParams === 'object') {
        queryString = Object.entries(queryParams)
            .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
            .join('&')
    }
    if (queryString) {
        return `?${queryString}`
    }

    return ''
}

function getUrl(path, queryParams) {
    return `${path}${getQueryString(queryParams)}`;
}

export function getApiUrl(path, queryParams = {}) {
    return getUrl(
        `${API_URL}${path}`,
        {...queryParams, api_key: API_KEY}
    )
}