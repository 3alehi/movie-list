// AuthContext.tsx
import { getinfouser } from "@/lib/api/getinfouser";
import { getCookieValue } from "@/lib/helper/getCooki";
import React, { createContext, useContext, useState } from "react";

interface AuthContextProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  getinfouser().then((userInfo) => {
    if (userInfo) {
      console.log("User Information:", userInfo);
    } else {
      console.log("Failed to fetch user info.");
    }
  });
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
