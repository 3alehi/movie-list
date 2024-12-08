"use client";
import React, { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchGenres } from "@/lib/api/genres";
import GenresBox from "@/components/GenresBox";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const HomePage: React.FC = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["genres"],
    queryFn: fetchGenres,
  });

  const [progressPercent, setProgressPercent] = useState(0); // وضعیت درصد پیشرفت
  const swiperRef = useRef<any>(null); // استفاده از مرجع برای دسترسی به Swiper instance

  const handleSlideChange = (swiper: any) => {
    const progress = Math.round(swiper.progress * 100); // محاسبه درصد پیشرفت
    setProgressPercent(progress); // ذخیره درصد پیشرفت
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* هدر و محتوا */}
      <div className="container mx-auto pt-16">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold">The Best Streaming Experience</h1>
          <p className="text-lg text-gray-400 mt-4">
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere.
          </p>
          <button className="mt-8 px-6 py-3 bg-red-600 text-white rounded-lg">
            Start Watching Now
          </button>
        </div>
      </div>

      {/* دسته‌بندی‌ها */}
      <div className="container mx-auto mt-20">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold">Explore Categories</h2>
            <p className="text-gray-400 mt-2">
              Discover a wide variety of genres curated for every taste.
            </p>
          </div>

          {/* کنترل‌های اسلایدر */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center space-x-6">
              {/* دکمه چپ */}
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-10 h-10 flex items-center justify-center bg-gray-700 text-white rounded-full hover:bg-gray-600"
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

              {/* نقاط وضعیت */}
              <div className="flex items-center space-x-2">
                {data?.map((_, index) => {
                  const pointPercent = (index / (data.length - 1)) * 100; // محاسبه درصد هر نقطه
                  const isActive = progressPercent >= pointPercent; // فعال بودن نقطه

                  return (
                    <span
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all ${
                        isActive ? "bg-red-500" : "bg-gray-500"
                      }`}
                    ></span>
                  );
                })}
              </div>

              {/* دکمه راست */}
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="w-10 h-10 flex items-center justify-center bg-gray-700 text-white rounded-full hover:bg-gray-600"
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
          </div>
        </div>

        {/* اسلایدر */}
        <div className="relative">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)} // ذخیره مرجع Swiper
            onSlideChange={handleSlideChange} // به‌روزرسانی درصد پیشرفت
            spaceBetween={20}
            slidesPerView={5}
          >
            {data?.map((item, index) => (
              <SwiperSlide key={index}>
                <GenresBox name={item.name} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
