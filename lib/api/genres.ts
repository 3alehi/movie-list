import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL
export const fetchGenres = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/genres`);
    return response.data; 
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to fetch genres");
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};
