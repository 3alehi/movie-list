import axios from "axios";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

export const fetchMovies = async (page: number, query: string) => {
    const { data } = await axios.get(
      `${API_BASE_URL}/movies?q=${query}&page=${page}`
    );
    return data;
  };