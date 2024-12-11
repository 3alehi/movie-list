import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL
export const fetchMoviesByGenre = async (genreId: number, page: number = 1) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/genres/${genreId}/movies?page=${page}`
    );
    return response.data; 
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch movies for genre"
      );
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};
