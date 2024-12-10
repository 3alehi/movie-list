"use client";

import StarRating from "@/components/StartRating";
import { fetchMoviesById } from "@/lib/api/getonemovies";
import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface PageProps {
    params: Promise<{ id: number }>; // params is a Promise in the new Next.js version
}

const Page: React.FC<PageProps> = ({ params }) => {
    const [id, setId] = useState<number | null>(null);

    useEffect(() => {
        const unwrapParams = async () => {
            const unwrappedParams = await params;
            setId(unwrappedParams.id);
        };
        unwrapParams();
    }, [params]);

    const { data, isLoading } = useQuery({
        queryKey: ["genres", id],
        queryFn: () => (id ? fetchMoviesById(id) : null),
        enabled: !!id,
    });

    if (isLoading) {
        return (
            <div className="container mx-auto px-4">
                {/* Skeleton Banner */}
                <div className="h-[400px] md:h-[700px] w-full bg-gray-800 rounded-lg mb-10">
                    <Skeleton height="100%" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
                    {/* Skeleton Left Section */}
                    <div>
                        <div className="bg-gray-900 p-6 rounded-lg mb-6">
                            <Skeleton height={20} width={150} />
                            <Skeleton height={15} count={3} className="mt-3" />
                        </div>
                        <div className="bg-gray-900 p-6 rounded-lg mb-6">
                            <Skeleton height={20} width={150} />
                            <Skeleton height={15} count={3} className="mt-3" />
                        </div>
                        <div className="bg-gray-900 p-6 rounded-lg mb-6">
                            <Skeleton height={20} width={150} />
                            <Skeleton height={15} count={3} className="mt-3" />
                        </div>
                        <div className="bg-gray-900 p-6 rounded-lg">
                            <Skeleton height={20} width={150} />
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <Skeleton height={100} />
                                <Skeleton height={100} />
                            </div>
                        </div>
                    </div>

                    {/* Skeleton Right Section */}
                    <div className="bg-gray-900 p-6 rounded-lg">
                        <div className="mb-6">
                            <Skeleton height={20} width={200} />
                            <Skeleton height={15} width={100} className="mt-3" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Skeleton height={20} width={100} />
                                <Skeleton height={15} width={150} className="mt-3" />
                            </div>
                            <div>
                                <Skeleton height={20} width={100} />
                                <Skeleton height={15} width={150} className="mt-3" />
                            </div>
                        </div>
                        <div className="mt-6">
                            <Skeleton height={20} width={150} />
                            <div className="flex flex-wrap gap-2 mt-3">
                                <Skeleton height={30} width={60} />
                                <Skeleton height={30} width={60} />
                            </div>
                        </div>
                        <div className="mt-6">
                            <Skeleton height={20} width={150} />
                            <Skeleton height={30} width={200} className="mt-3" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4">
            {/* Movie Banner */}
            <div
                className="h-[400px] md:h-[700px] w-full bg-cover bg-center rounded-lg flex flex-col justify-end items-center relative"
                style={{ backgroundImage: `url(${data?.poster || "/placeholder.jpg"})` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                <div className="text-white flex flex-col items-center text-center mb-6 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-red-500">
                        {data?.title || "Unknown Title"}
                    </h1>
                    <p className="text-gray-300 w-[80%] md:w-[60%] mt-3 text-sm md:text-lg">
                        {data?.writer || "No description available."}
                    </p>
                </div>
                <div className="text-white flex justify-around text-center mb-6 relative z-10">
                    <button className="bg-red-500 hover:bg-red-600 transition mx-1 py-3 px-6 flex rounded-lg items-center">
                        <svg
                            className="mx-1"
                            width="19"
                            height="20"
                            viewBox="0 0 19 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0.75 2.59479C0.75 0.930971 2.53383 -0.123757 3.9917 0.678068L17.4557 8.08328C18.9668 8.91436 18.9668 11.0856 17.4557 11.9167L3.9917 19.3219C2.53383 20.1238 0.75 19.069 0.75 17.4052V2.59479Z"
                                fill="white"
                            />
                        </svg>
                        Play Now
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 mt-10">
                <div>
                    <div className="bg-gray-900 p-6 rounded-lg mb-6">
                        <p className="text-gray-400">Writer</p>
                        <p className="text-white mt-3">{data?.writer || "N/A"}</p>
                    </div>
                    <div className="bg-gray-900 p-6 rounded-lg mb-6">
                        <p className="text-gray-400">Plot</p>
                        <p className="text-white mt-3">{data?.plot || "N/A"}</p>
                    </div>
                    <div className="bg-gray-900 p-6 rounded-lg mb-6">
                        <p className="text-gray-400">Actors</p>
                        <p className="text-white mt-3">{data?.actors || "N/A"}</p>
                    </div>
                    <div className="bg-gray-900 p-6 rounded-lg">
                        <p className="text-gray-400">Images</p>
                        {data?.images && data.images.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                                {data.images.map((item: string, index: number) => (
                                    <img
                                        key={index}
                                        className="w-full h-auto rounded-lg"
                                        src={item}
                                        alt={`Movie Scene ${index + 1}`}
                                    />
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-400 mt-4">No images available.</p>
                        )}
                    </div>
                </div>

                <div className="bg-gray-900 p-6 rounded-lg h-fit">
                    <div className="mb-6">
                        <p className="text-gray-400">Released Year</p>
                        <p className="text-white mt-3">{data?.released || "N/A"}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-gray-400">Country</p>
                            <p className="text-white mt-3">{data?.country || "N/A"}</p>
                        </div>
                        <div>
                            <p className="text-gray-400">Runtime</p>
                            <p className="text-white mt-3">{data?.runtime || "N/A"}</p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <p className="text-gray-400">Genres</p>
                        <div className="flex flex-wrap gap-2 mt-3">
                            {data?.genres?.map((genre: string, index: number) => (
                                <span
                                    key={index}
                                    className="bg-gray-800 px-3 py-1 rounded-lg text-white text-sm"
                                >
                                    #{genre}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="mt-6">
                        <p className="text-gray-400">Rating</p>
                        <div className="mt-3">
                            <StarRating imdbRating={data?.imdb_rating || 0} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
