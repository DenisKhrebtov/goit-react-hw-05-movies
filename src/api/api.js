import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '572822f6c91e4ecf30bc82c47474f59a';

export async function fetchTrendFilms() {
  try {
    const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchFilmsByName(query) {
  try {
    const response = await axios.get(`search/movie?api_key=${API_KEY}`, {
      params: {
        language: `en-US`,
        query: query,
        page: 1,
        include_adult: false,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function getFilmInfo(filmId) {
  try {
    const response = await axios.get(`movie/${filmId}?api_key=${API_KEY}`, {
      params: {
        language: `en - US`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getFilmCast(filmId) {
  try {
    const response = await axios.get(
      `movie/${filmId}/credits?api_key=${API_KEY}`,
      {
        params: {
          language: `en - US`,
        },
      }
    );
    return response.data.cast;
  } catch (error) {
    console.error(error);
  }
}

export async function getFilmReviews(filmId) {
  try {
    const response = await axios.get(
      `movie/${filmId}/reviews?api_key=${API_KEY}`,
      {
        params: {
          language: `en - US`,
          page: 1,
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}
