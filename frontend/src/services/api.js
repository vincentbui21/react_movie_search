const API_KEY = "your_api_key_here"
const BASE_URL = "https://api.themoviedb.org/3";
const BEARER_TOKEN = "your_api_token_here"

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular`, {
        headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data.results;
};

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?query=${encodeURIComponent(query)}`, {
        headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data.results;
};
