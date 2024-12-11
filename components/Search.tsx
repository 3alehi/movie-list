import React, { useState, useEffect, useRef } from "react";
import { fetchMovies } from "@/lib/api/serachmovie";
import { useRouter } from "next/navigation";

interface SearchProps {
    setIsOpen: (value: boolean) => void;
}

const Search: React.FC<SearchProps> = ({ setIsOpen }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const contentRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => setIsOpen(false), 300);
    };

    const handleOuterClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    const handleSearch = async () => {
        setIsLoading(true);
        try {
            const data = await fetchMovies(page, query);
            setMovies(data.data || []);
            setTotalPages(data.metadata?.page_count || 0);
        } catch (error) {
            console.error("Error fetching movies:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (query.length > 2) {
            handleSearch();
        } else {
            setMovies([]);
        }
    }, [query, page]);

    const handlePageChange = (newPage: number) => {
        setPage(newPage);
        if (contentRef.current) {
            contentRef.current.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll
        }
    };

    const handleItemClick = (id: number) => {
        handleClose();
        setTimeout(() => router.push(`/movies-shows/${id}`), 300);
    };

    return (
        <div
            className={`fixed max-md:p-3 inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300 ${
                isVisible ? "opacity-100" : "opacity-0"
            }`}
            onClick={handleOuterClick}
        >
            <div
                className={`bg-black-velvet rounded-lg shadow-lg p-6 w-full max-w-4xl mx-auto transform transition-transform duration-300 ${
                    isVisible ? "scale-100" : "scale-95"
                }`}
                style={{
                    maxHeight: "90vh",
                    overflowY: "auto",
                    scrollBehavior: "smooth", // Smooth scrolling
                }}
                ref={contentRef}
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl text-white font-semibold">Search Movies</h2>
                    <i onClick={handleClose} className="cursor-pointer text-white">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15 15L8 8M8 8L1 1M8 8L15 1M8 8L1 15"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </i>
                </div>
                <div className="relative mb-6">
                    <input
                        type="text"
                        className="w-full border border-hr rounded-lg p-4 bg-black-velvet text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                        placeholder="Search Movie Name"
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value);
                            setPage(1); 
                        }}
                    />
                </div>

                <div className="mb-6">
                    {isLoading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {Array.from({ length: 6 }).map((_, index) => (
                                <div key={index} className="bg-black-velvet p-4 rounded-lg animate-pulse">
                                    <div className="h-48 bg-gray-700 rounded mb-4"></div>
                                    <div className="h-6 bg-gray-700 rounded mb-2"></div>
                                    <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {movies.map((movie: any) => (
                                <li
                                    key={movie.id}
                                    className="bg-black-velvet p-4 rounded-lg cursor-pointer"
                                    onClick={() => handleItemClick(movie.id)}
                                >
                                    <img
                                        src={movie.poster}
                                        alt={movie.title}
                                        className="rounded mb-4 w-full h-48 object-cover"
                                    />
                                    <h3 className="text-lg text-white font-semibold">{movie.title}</h3>
                                    <p className="text-sm text-gray-400">
                                        {movie.year} | {movie.country}
                                    </p>
                                    <p className="text-sm text-gray-400">
                                        IMDB: {movie.imdb_rating}
                                    </p>
                                    <p className="text-sm text-gray-400">
                                        {Array.isArray(movie.genres) && movie.genres.length > 0
                                            ? movie.genres.join(", ")
                                            : "N/A"}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    )}
                    {!isLoading && query.length > 2 && movies.length === 0 && (
                        <p className="text-center text-gray-500">No movies found.</p>
                    )}
                </div>

                <div className="flex justify-between items-center mt-4">
                    <button
                        onClick={() => handlePageChange(Math.max(page - 1, 1))}
                        disabled={page === 1}
                        className="px-4 py-2 bg-red-btn text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Previous
                    </button>
                    <span className="text-white">
                        Page {page} of {totalPages}
                    </span>
                    <button
                        onClick={() => handlePageChange(Math.min(page + 1, totalPages))}
                        disabled={page >= totalPages}
                        className="px-4 py-2 bg-red-btn text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Search;
