import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL
export const fetchMoviesById = async (movie_id: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/movies/${movie_id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch movie by ID"
      );
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};
