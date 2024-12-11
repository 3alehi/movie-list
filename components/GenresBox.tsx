"use client";
import { fetchMoviesByGenre } from "@/lib/api/getPoster";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface GenresBoxProps {
  name: string;
  id: number;
  wich: string;
}

const GenresBox: React.FC<GenresBoxProps> = ({ name, id, wich }) => {
  const router = useRouter();

  const { data, isLoading } = useQuery({
    queryKey: ["genres", id],
    queryFn: () => fetchMoviesByGenre(id, 1),
    enabled: !!id,
  });

  const handleNavigate = (movieId: number) => {
    router.push(`/movies-shows/${movieId}`);
  };

  const renderSkeleton = () => {
    if (wich === "Terend" || wich === "New" || wich === "Must") {
      return (
        <div className="w-full h-[150px] bg-gray-700 rounded-md animate-pulse"></div>
      );
    }
    return Array.from({ length: 4 }).map((_, index) => (
      <div
        key={index}
        className="w-[90px] max-md:w-full h-[90px] bg-gray-700 rounded-md animate-pulse"
      ></div>
    ));
  };

  const renderContent = () => {
    if (wich === "Terend" || wich === "New" || wich === "Must") {
      return (
        <img
          className="w-full rounded-md shadow-lg cursor-pointer object-fill"
          src={data?.data[0]?.poster || "/placeholder.png"}
          alt="Poster 0"
          onClick={() => handleNavigate(data?.data[0]?.id)}
        />
      );
    }
    return (
      data?.data &&
      [0, 3, 4, 5].map((index) => (
        <img
          key={index}
          className="w-[90px] max-md:w-full h-[90px] rounded-md shadow-lg cursor-pointer object-fill"
          src={data.data[index]?.poster || "/placeholder.png"}
          alt={`Poster ${index}`}
          onClick={() => handleNavigate(data.data[index]?.id)}
        />
      ))
    );
  };
  

  return (
    <div className="bg-bg-black py-6 px-6 rounded-lg mt-20 max-md:mt-2">
      <div
        className={`grid gap-2 ${
          wich === "Terend" || wich === "New" || wich === "Must"
            ? "grid-cols-1"
            : "grid-cols-2"
        }`}
      >
        {isLoading ? renderSkeleton() : renderContent()}
      </div>

      <div className="flex justify-between items-center mt-2">
        {(wich === "Explore" || wich === "Top") && (
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col">
              {wich === "Top" && (
                <p className="p-2 max-md:p-1 bg-red-btn rounded-lg">Top 10 In</p>
              )}
              <span>{name}</span>
            </div>
            <Link href={"/movies-shows"} className="cursor-pointer">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.02502 10L19.775 10M19.775 10L11.3375 1.5625M19.775 10L11.3375 18.4375"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        )}

        {wich === "Terend" && (
          <div className="flex justify-between w-full">
            <i className="flex items-center bg-black-velvet px-2 py-2 rounded-full">
              <svg
                className="mx-1"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 0.25C4.61522 0.25 0.25 4.61522 0.25 10C0.25 15.3848 4.61522 19.75 10 19.75C15.3848 19.75 19.75 15.3848 19.75 10C19.75 4.61522 15.3848 0.25 10 0.25ZM10.75 4C10.75 3.58579 10.4142 3.25 10 3.25C9.58579 3.25 9.25 3.58579 9.25 4V10C9.25 10.4142 9.58579 10.75 10 10.75H14.5C14.9142 10.75 15.25 10.4142 15.25 10C15.25 9.58579 14.9142 9.25 14.5 9.25H10.75V4Z"
                  fill="#999999"
                />
              </svg>
              <p>1h 30min</p>
            </i>
            <i className="flex items-center bg-black-velvet px-2 py-2 rounded-full">
              <svg
                className="mx-1"
                width="23"
                height="18"
                viewBox="0 0 23 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5996 12C13.2565 12 14.5996 10.6569 14.5996 9C14.5996 7.34315 13.2565 6 11.5996 6C9.94275 6 8.59961 7.34315 8.59961 9C8.59961 10.6569 9.94275 12 11.5996 12Z"
                  fill="#999999"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.92302 8.4467C2.41027 3.97571 6.62752 0.75 11.6001 0.75C16.5704 0.75 20.7861 3.97271 22.2752 8.44045C22.3955 8.80152 22.3956 9.19217 22.2755 9.55331C20.7882 14.0243 16.571 17.25 11.5984 17.25C6.62808 17.25 2.41245 14.0273 0.923348 9.55955C0.803006 9.19849 0.802892 8.80783 0.92302 8.4467ZM16.8496 9C16.8496 11.8995 14.4991 14.25 11.5996 14.25C8.70011 14.25 6.34961 11.8995 6.34961 9C6.34961 6.1005 8.70011 3.75 11.5996 3.75C14.4991 3.75 16.8496 6.1005 16.8496 9Z"
                  fill="#999999"
                />
              </svg>
              <p>2K</p>
            </i>
          </div>
        )}

        {wich === "New" && (
          <div className="w-full rounded-full bg-black">
            <span className="text-gray-9 py-1 px-2 w-full flex justify-center">
              Released at 14 April
            </span>
          </div>
        )}

        {wich === "Must" && (
          <div className="flex justify-between w-full">
            <i className="flex items-center bg-black-velvet px-2 py-2 rounded-full">
              <svg
                className="mx-1"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 0.25C4.61522 0.25 0.25 4.61522 0.25 10C0.25 15.3848 4.61522 19.75 10 19.75C15.3848 19.75 19.75 15.3848 19.75 10C19.75 4.61522 15.3848 0.25 10 0.25ZM10.75 4C10.75 3.58579 10.4142 3.25 10 3.25C9.58579 3.25 9.25 3.58579 9.25 4V10C9.25 10.4142 9.58579 10.75 10 10.75H14.5C14.9142 10.75 15.25 10.4142 15.25 10C15.25 9.58579 14.9142 9.25 14.5 9.25H10.75V4Z"
                  fill="#999999"
                />
              </svg>
              <p>1h 30min</p>
            </i>
            <i className="flex items-center bg-black-velvet px-2 py-2 rounded-full">
              <svg
                className="mx-1"
                width="23"
                height="18"
                viewBox="0 0 23 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5996 12C13.2565 12 14.5996 10.6569 14.5996 9C14.5996 7.34315 13.2565 6 11.5996 6C9.94275 6 8.59961 7.34315 8.59961 9C8.59961 10.6569 9.94275 12 11.5996 12Z"
                  fill="#999999"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.92302 8.4467C2.41027 3.97571 6.62752 0.75 11.6001 0.75C16.5704 0.75 20.7861 3.97271 22.2752 8.44045C22.3955 8.80152 22.3956 9.19217 22.2755 9.55331C20.7882 14.0243 16.571 17.25 11.5984 17.25C6.62808 17.25 2.41245 14.0273 0.923348 9.55955C0.803006 9.19849 0.802892 8.80783 0.92302 8.4467ZM16.8496 9C16.8496 11.8995 14.4991 14.25 11.5996 14.25C8.70011 14.25 6.34961 11.8995 6.34961 9C6.34961 6.1005 8.70011 3.75 11.5996 3.75C14.4991 3.75 16.8496 6.1005 16.8496 9Z"
                  fill="#999999"
                />
              </svg>
              <p>2K</p>
            </i>
          </div>
        )}
      </div>
    </div>
  );
};

export default GenresBox;
