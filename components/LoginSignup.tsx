"use client";
import { useAuth } from "@/context/AuthContext";
import { loginUser } from "@/lib/api/auth";
import { registerUser } from "@/lib/api/user";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

interface LoginSignupProps {
    setIsOpen: (value: boolean) => void;
}

const LoginSignup: React.FC<LoginSignupProps> = ({ setIsOpen }) => {
    const { isLoggedIn, setIsLoggedIn } = useAuth();

    const [isVisible, setIsVisible] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [loginLoading, setLoginLoading] = useState(false);
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleOuterClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => setIsOpen(false), 300);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const data = await registerUser(formData.name, formData.email, formData.password);
            toast.success(`User registered successfully: ${data.name}`);
            setIsLoggedIn(!isLoggedIn)
            // لاگین خودکار پس از ثبت‌نام
            await handleLogin(formData.email, formData.password);

            handleClose(); // بستن مودال
        } catch (error: any) {
            toast.error(error.message || "Registration failed");
        } finally {
            setLoading(false);
        }
    };

    const handleLogin = async (username: string, password: string) => {
        setLoginLoading(true);
        try {
            const data = await loginUser(username, password);
            toast.success("Logged in successfully");
            setIsLoggedIn(!isLoggedIn)
            // ذخیره توکن‌ها در localStorage
            localStorage.setItem("access_token", data.access_token);
            localStorage.setItem("refresh_token", data.refresh_token);

            handleClose(); // بستن مودال
        } catch (error: any) {
            toast.error(error.message || "Login failed");
        } finally {
            setLoginLoading(false);
        }
    };

    return (
        <div
            className={`fixed max-md:p-3 inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300 ${
                isVisible ? "opacity-100" : "opacity-0"
            }`}
            onClick={handleOuterClick}
        >
            <div
                className={`bg-black rounded-lg shadow-lg p-6 w-full max-w-md mx-auto transform transition-transform duration-300 border border-hr ${
                    isVisible ? "scale-100" : "scale-95"
                }`}
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-white">
                        {isLogin ? "Login" : "Sign Up"}
                    </h2>
                    <button onClick={handleClose} className="text-gray-500 hover:text-gray-300">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15 15L8 8M8 8L1 1M8 8L15 1M8 8L1 15"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
                <div className="mb-4">
                    <div className="flex space-x-4">
                        <button
                            className={`px-4 py-2 rounded ${
                                isLogin
                                    ? "bg-black border border-hr text-white"
                                    : "bg-black text-gray-400 border border-hr"
                            }`}
                            onClick={() => setIsLogin(true)}
                        >
                            Login
                        </button>
                        <button
                            className={`px-4 py-2 rounded ${
                                !isLogin
                                    ? "bg-black border border-hr text-white"
                                    : "bg-black text-gray-400 border border-hr"
                            }`}
                            onClick={() => setIsLogin(false)}
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
                {!isLogin && (
                    <form onSubmit={handleRegister}>
                        <div className="mb-4">
                            <label className="block text-sm text-gray-400 mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="w-full border border-hr bg-black rounded p-2 text-white focus:outline-none focus:ring focus:border-hr"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm text-gray-400 mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="w-full border border-hr bg-black rounded p-2 text-white focus:outline-none focus:ring focus:border-hr"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm text-gray-400 mb-2">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="w-full border border-hr bg-black rounded p-2 text-white focus:outline-none focus:ring focus:border-hr"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-black border border-hr text-white py-2 rounded hover:bg-opacity-90"
                        >
                            {loading ? "Registering..." : "Sign Up"}
                        </button>
                    </form>
                )}
                {isLogin && (
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleLogin(name, password);
                        }}
                    >
                        <div className="mb-4">
                            <label className="block text-sm text-gray-400 mb-2">Email</label>
                            <input
                                type="text"
                                name="email"
                                className="w-full border border-hr bg-black rounded p-2 text-white focus:outline-none focus:ring focus:border-hr"
                                placeholder="Enter your email"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm text-gray-400 mb-2">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="w-full border border-hr bg-black rounded p-2 text-white focus:outline-none focus:ring focus:border-hr"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loginLoading}
                            className="w-full bg-black border border-hr text-white py-2 rounded hover:bg-opacity-90"
                        >
                            {loginLoading ? "Logging in..." : "Login"}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default LoginSignup;
