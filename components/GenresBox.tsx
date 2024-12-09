"use client";
import { fetchMoviesByGenre } from "@/lib/api/getPoster";
import { useQuery } from "@tanstack/react-query";
import React from "react";

interface GenresBoxProps {
  name: string;
  isLoding: boolean;
  id: number;
}

const GenresBox: React.FC<GenresBoxProps> = ({ name, isLoding, id }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["genres", id],
    queryFn: () => fetchMoviesByGenre(id, 1),
    enabled: !!id,
  });

  return (
    <div className="bg-bg-black py-8 px-8 rounded-lg mt-20">
      <div className="grid grid-cols-2 gap-2">
        {isLoading ? (
          Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="w-[90px] h-[90px] bg-gray-700 rounded-md animate-pulse"
            ></div>
          ))
        ) : (
          data?.data &&
          [0, 3, 4, 5].map((index) => (
            <img
              key={index}
              className="w-[90px] h-[90px] rounded-md shadow-lg"
              src={data.data[index]?.poster || "/placeholder.png"}
              alt={`Poster ${index}`}
            />
          ))
        )}
      </div>

      <div className="flex justify-between mt-2">
        {name}
        <i className="cursor-pointer">
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
        </i>
      </div>
    </div>
  );
};

export default GenresBox;
