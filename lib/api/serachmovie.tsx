import axios from "axios";
const API_BASE_URL = "https://moviesapi.ir/api/v1";

export const fetchMovies = async (page: number, query: string) => {
    const { data } = await axios.get(
      `${API_BASE_URL}/movies?q=${query}&page=${page}`
    );
    return data;
  };