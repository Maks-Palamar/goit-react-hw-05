import axios from "axios";

const key = 'a5b689b92ea7db4c9061a5574fdd706b';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumber = getRandomNumber(900000, 1000000);

const fetch = axios.create({
    baseURL: "https://api.themoviedb.org/3",
        headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWI2ODliOTJlYTdkYjRjOTA2MWE1NTc0ZmRkNzA2YiIsInN1YiI6IjY2MjNlMjQ5N2E5N2FiMDE2MzhjMGM3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YtfO22PpBZlvfGevuMVMTB5ST4whCG12Jl3gDqcgCnQ'
    }
});
    
const fetchPopular = async () => {
    const result = await fetch.get("/trending/movie/day", {
        params: {
            api_key: key,
        }
    });
    console.log(result.data.results);
    return result.data.results;
}

const fetchDetails = async (movieId) => { 
    const result = await fetch.get(`/movie/${movieId}`, {
        params: {
            api_key: key,
        }
    })
    
    console.log("inFetchDet", result.data);
    return result.data;
}
 
const fetchCast = async (movieId) => {
    const result = await fetch.get(`/movie/${movieId}/credits`, {
        params: {
            api_key: key,
        }
    })

    console.log("inFetchCast", result.data);
    return result.data;
}

const fetchReviews = async (movieId) => {
    const result = await fetch.get(`/movie/${movieId}/reviews`, {
        params: {
            api_key: key,
        }
    })

    console.log("inFetchReviews", result.data);
    return result.data;
}

const fetchQuery = async (query) => { 
    const result = await fetch.get(`/search/movie`, {
        params: {
            api_key: key,
            query: query,
        }
    })
    console.log("inFetchQuery", result.data);
    return result.data;
}

const fetchRandomMovie = async () => {
    const result = await fetch.get(`/movie/${randomNumber}`, {
        params: {
            api_key: key,
        }
    })
    console.log("inFetchRandomMovie", result.data);
    return result.data;
}

export {
    fetchPopular,
    fetchDetails,
    fetchCast,
    fetchReviews,
    fetchQuery,
    fetchRandomMovie,
}