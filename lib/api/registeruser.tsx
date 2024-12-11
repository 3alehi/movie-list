export const registerUser = async (userData: { name: string; email: string; password: string }) => {
    const response = await fetch("https://moviesapi.ir/api/v1/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to register");
    }
  
    return response.json();
  };
  