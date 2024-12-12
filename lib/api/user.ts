import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Define the types for the request and response
export interface RegisterUserResponse {
    id: number;
    name: string;
    email: string;
    created_at: string;
    updated_at: string;
}

export interface RegisterUserError {
    message: string;
    errors?: Record<string, string[]>;
}

// Function to register a user
export const registerUser = async (
    name: string,
    email: string,
    password: string
): Promise<RegisterUserResponse> => {
    try {
        const response = await axios.post<RegisterUserResponse>(`${API_BASE_URL}/register`, {
            name,
            email,
            password,
        });
        return response.data;
    } catch (error: any) {
        // Define and throw a more detailed error object
        const customError: RegisterUserError = {
            message: error.response?.data?.message || "An unexpected error occurred",
            errors: error.response?.data?.errors,
        };
        throw customError;
    }
};
