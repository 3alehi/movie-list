import axios from "axios";
const API_BASE_URL = "https://moviesapi.ir/api/v1";

export const fetchMoviesByGenre = async (genreId: number, page: number = 1) => {
  console.log(44);
  
    try {
      const response = await axios.get(
        `${API_BASE_URL}/genres/${genreId}/movies?page=${page}`
      );
      return response.data; // بازگرداندن داده‌های فیلم‌ها
    } catch (error: any) {
      throw new Error(
        error?.response?.data?.message || "Failed to fetch movies for genre"
      );
    }
  };