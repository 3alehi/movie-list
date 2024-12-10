"use client";

import React, { useRef, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import GenresBox from "@/components/GenresBox";

interface ExploreCategoriesProps {
  data: Array<{ name: string; id: number }>;
  isLoading: boolean;
  title:string ;
  desc :string;
  wich : string;
}

const ExploreCategories: React.FC<ExploreCategoriesProps> = ({
  data,
  isLoading,
  title,
  desc,
  wich
}) => {
  const [progressPercent, setProgressPercent] = useState(0);
  const swiperRef = useRef<any>(null);
  

  const handleSlideChange = (swiper: any) => {
    const progress = Math.round(swiper.progress * 100);
    setProgressPercent(progress);
  };

  return (
    <div>
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8 max-md:flex-col">
        <div>
          <h2 className="text-3xl font-bold max-lg:text-2xl">
            {title}
          </h2>
          <p className="text-gray-400 mt-2">
           {desc}
          </p>
        </div>

        {/* Progress and Navigation */}
        <div
          className="bg-black-velvet p-4 rounded-lg w-full max-w-lg mt-20 max-md:mt-5"
          ref={swiperRef}
        >
          {isLoading ? (
            <div className="animate-pulse flex items-center space-x-4">
              {/* Skeleton Loading for Previous Button */}
              <div className="w-12 h-12 bg-gray-700 rounded-lg"></div>

              {/* Skeleton Loading for Progress Bar */}
              <div className="relative flex-grow h-4 bg-gray-700 rounded-lg overflow-hidden">
                <div className="absolute top-0 left-0 h-full bg-gray-600 rounded-lg"></div>
              </div>

              {/* Skeleton Loading for Next Button */}
              <div className="w-12 h-12 bg-gray-700 rounded-lg"></div>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              {/* Previous Button */}
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="px-4 py-4 flex items-center justify-center bg-bg-black text-white rounded-lg"
              >
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.75 9L1.25 9M1.25 9L9.125 16.875M1.25 9L9.125 1.125"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Progress Bar */}
              <div className="relative flex-grow h-4 bg-bg-navbar rounded-lg overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-red-btn rounded-lg transition-all"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>

              {/* Next Button */}
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="px-4 py-4 flex items-center justify-center bg-bg-black text-white rounded-lg"
              >
                <svg
                  width="24"
                  height="20"
                  viewBox="0 0 24 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.75 1.25L22.5 10M22.5 10L13.75 18.75M22.5 10H1.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Swiper Section */}
      <div className="relative">
        <Swiper
          modules={[Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={handleSlideChange}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          breakpoints={{
            400: {
              slidesPerView: 1.5,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 3,
            },
            964: {
              slidesPerView: 4,
            },
            1440: {
              slidesPerView: 5,
            },
          }}
        >
          {data?.map((item, index) => (
            <SwiperSlide key={index}>
              <GenresBox isLoding={false} name={item.name} id={item.id} wich={wich} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ExploreCategories;
