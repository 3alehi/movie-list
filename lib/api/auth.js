// آدرس API
const API_BASE_URL = "https://moviesapi.ir"; // دامنه API را بررسی و تنظیم کنید

// متد لاگین
export const loginUser = async (username, password) => {
    try {
        const response = await fetch(`${API_BASE_URL}/oauth/token`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded", // فرم دیتا
            },
            body: new URLSearchParams({
                grant_type: "password",
                username,
                password,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error_description || "Login failed");
        }

        const data = await response.json();

        document.cookie = `access_token=${data.access_token}; Path=/; Secure; SameSite=Strict;`;
        document.cookie = `refresh_token=${data.refresh_token}; Path=/; Secure; SameSite=Strict;`;

        return data; // پاسخ سرور را بازگردانید
    } catch (error) {
        console.error("Error:", error.message);
        throw error;
    }
};
