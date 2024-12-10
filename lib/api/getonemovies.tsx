import axios from "axios";
const API_BASE_URL = "https://moviesapi.ir/api/v1";

export const fetchMoviesById = async (movie_id: number) => {
  console.log(44);
  
    try {
      const response = await axios.get(
        `${API_BASE_URL}/movies/${movie_id} }`
      );
      return response.data;
    } catch (error: any) {
      throw new Error(
        error?.response?.data?.message || "Failed to fetch movies for genre"
      );
    }
  };