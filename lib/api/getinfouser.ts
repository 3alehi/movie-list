import { getCookieValue } from "../helper/getCooki";

export const getinfouser = async () => {
  const refresh = getCookieValue("refresh_token");
  const access = getCookieValue("access_token");

  if (!access) {
    console.error("Access token is missing!");
    return;
  }

  try {
    const response = await fetch("http://moviesapi.ir/api/user", {
      method: "POST", 
      headers: {
        Authorization: `Bearer ${access}`, 
        Accept: "application/json", 
      },
    });

    if (!response.ok) {
      console.error("Failed to fetch user info:", response.status);
      return null;
    }

    // تبدیل پاسخ به JSON
    const userData = await response.json();
    console.log("User Info:", userData);
    return userData;
  } catch (error) {
    // مدیریت خطاها
    console.error("Error fetching user info:", error);
    return null;
  }
};
