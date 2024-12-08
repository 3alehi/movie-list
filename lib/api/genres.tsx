import axios from "axios";

const API_BASE_URL = "https://moviesapi.ir/api/v1";

export const fetchGenres = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/genres`);
    return response.data; 
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || "Failed to fetch genres");
  }
};
