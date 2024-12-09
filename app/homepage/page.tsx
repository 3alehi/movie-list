"use client"; // Add this directive at the top

import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchGenres } from "@/lib/api/genres";

import GenresBox from "@/components/GenresBox";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Experience from "@/components/Experience";
import Questions from "@/components/Questions";
import PlanBox from "@/components/PlanBox";
import { Autoplay } from 'swiper/modules';

const HomePage: React.FC = () => {

  const [month, setMonth] = useState<number>(1)
  const { data, isLoading } = useQuery({
    queryKey: ["genres"],
    queryFn: fetchGenres,
  });

  const [progressPercent, setProgressPercent] = useState(0);
  const swiperRef = useRef<any>(null);

  const containerRef = useRef<HTMLDivElement | null>(null);

  // استفاده از Intersection Observer برای Lazy Loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {

      },
      { threshold: 0.1 } 
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  const handleSlideChange = (swiper: any) => {
    const progress = Math.round(swiper.progress * 100);
    setProgressPercent(progress);
  };

  return (
    <div className="bg-black text-white max-lg:px-4 ">
<div className="relative w-full">
  <div className="relative flex flex-col gap-2 z-10">
    <img
      src="\Image Container.png"
      alt=""
      className="rounded-t-md shadow-lg"
    />
    <img
      src="\Image Container(2).png"
      alt=""
      className="shadow-lg"
    />
    <img
      src="\Image Container(3).png"
      alt=""
      className="shadow-lg"
    />
    <img
      src="\Image Container(4).png"
      alt=""
      className="rounded-b-md shadow-lg "
    />
  </div>

  <div
    className="absolute inset-0 rounded-md z-20 flex items-center justify-center"
    style={{
      background:
        "linear-gradient(90deg, rgba(10, 10, 10, 0.7) 20%, rgba(15, 15, 15, 0.7) 20%, rgba(20, 10, 10, 0.7) 50%, rgba(200, 0, 0, 0.6) 100%)",
    }}
  >

    <img className="max-lg:w-36 max-lg:h-36" src="\Abstract Design.png" alt="" />
  </div>
</div>


      <div className="container mx-auto pt-16">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold max-lg:hidden max-md:block max-md:text-2xl ">The Best Streaming Experience</h1>
          <p className="text-lg text-gray-400 mt-4">
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere.
          </p>
          <button className="mt-8 px-6 py-3 bg-red-btn text-white rounded-lg flex items-center">
          <svg className="mr-2" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.6527C0 1.22656 1.529 0.322511 2.7786 1.00979L14.3192 7.35711C15.6144 8.06947 15.6144 9.93056 14.3192 10.6429L2.7786 16.9902C1.529 17.6775 0 16.7735 0 15.3473V2.6527Z" fill="white"/>
</svg>

            Start Watching Now
          </button>
        </div>
      </div>

      <div className="container mx-auto mt-20">
        <div className="flex justify-between items-center mb-8 max-md:flex-col">
          <div>
            <h2 className="text-3xl font-bold max-lg:text-2xl	">Explore Categories</h2>
            <p className="text-gray-400 mt-2">
              Discover a wide variety of genres curated for every taste.
            </p>
          </div>

          <div ref={containerRef} className="bg-black-velvet p-4 rounded-lg w-full max-w-lg max-md:mt-5">
            {isLoading ? (
              <div className="animate-pulse flex items-center space-x-4">
                {/* دکمه قبلی - شبیه‌سازی اسکلت */}
                <div className="w-12 h-12 bg-gray-700 rounded-lg"></div>

                {/* نوار پیشرفت - شبیه‌سازی اسکلت */}
                <div className="relative flex-grow h-4 bg-gray-700 rounded-lg overflow-hidden">
                  <div className="absolute top-0 left-0 h-full bg-gray-600 rounded-lg"></div>
                </div>

                {/* دکمه بعدی - شبیه‌سازی اسکلت */}
                <div className="w-12 h-12 bg-gray-700 rounded-lg"></div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
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

                <div className="relative flex-grow h-4 bg-bg-navbar rounded-lg overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-red-btn rounded-lg transition-all"
                    style={{ width: `${progressPercent}%` }}
                  ></div>
                </div>

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

        <div className="relative">
        <Swiper
  modules={[Autoplay]} // فعال کردن پلاگین
  onSwiper={(swiper) => (swiperRef.current = swiper)}
  onSlideChange={handleSlideChange}
  spaceBetween={20} // فاصله بین اسلایدها
  autoplay={{
    delay: 5000, // تغییر به 5 ثانیه
    disableOnInteraction: false, // اتوپلی ادامه دارد حتی پس از تعامل
  }}
  breakpoints={{
    400: {
      slidesPerView: 1.5, // نمایش 1.5 اسلاید در موبایل
      spaceBetween: 15, // کاهش فاصله بین اسلایدها برای موبایل
    },
    640: {
      slidesPerView: 3, // نمایش 3 اسلاید برای سایزهای بزرگ‌تر از موبایل
    },
    964: {
      slidesPerView: 4, // نمایش 4 اسلاید برای تبلت
    },
    1440: {
      slidesPerView: 5, // نمایش 5 اسلاید برای دسکتاپ
    },
  }}
>
  {data?.map((item, index) => (
    <SwiperSlide key={index}>
      <GenresBox isLoding={true} name={item.name} id={item.id} />
    </SwiperSlide>
  ))}
</Swiper>


        </div>
        <div className="mt-36  max-md:mt-12">
          <h1 className="text-3xl font-bold max-lg:text-2xl	max-md:text-xl">We Provide you streaming experience across various devices.</h1>
          <p
            className="text-gray-400 mt-4 w-[80%] max-lg:text-base	max-lg:w-full">
            With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.            </p>
        </div>
        <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1  mt-20">

          <Experience />
          <Experience />
          <Experience />
          <Experience />
          <Experience />
          <Experience />


        </div>
        <div className="mt-36 max-md:mt-12">
  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5">
    <div className="lg:w-3/5 max-md:w-full">
      <h1 className="text-4xl max-lg:text-2xl max-md:text-xl font-semibold">
        Frequently Asked Questions
      </h1>
      <p className="text-gray-9 mt-4 max-lg:text-base">
        Got questions? We've got answers! Check out our FAQ section to find
        answers to the most common questions about StreamVibe.
      </p>
    </div>
    <div className="flex justify-start lg:justify-end lg:w-2/5 max-md:w-full">
      <button className="bg-red-btn px-6 py-4 rounded-lg text-white font-medium max-lg:text-base">
        Ask a Question
      </button>
    </div>
  </div>
  <Questions />
</div>

<div className="mt-36 max-md:mt-12">
  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5">
    <div className="lg:w-2/3 max-md:w-full">
      <h1 className="text-4xl max-lg:text-2xl max-md:text-xl font-semibold">
        Choose the plan that's right for you
      </h1>
      <p className="text-gray-9 mt-4 max-lg:text-base">
        Join StreamVibe and select from our flexible subscription options
        tailored to suit your viewing preferences. Get ready for non-stop
        entertainment!
      </p>
    </div>

    <div className="bg-black border rounded-lg border-black-velvet p-3 flex lg:w-1/3 max-md:w-full max-md:justify-start max-md:mt-5">
      <button
        onClick={() => setMonth(1)}
        className={`py-3 px-4 w-full lg:w-auto text-center font-medium ${
          month === 1 ? "bg-black-velvet text-white rounded-lg" : "text-gray-500"
        }`}
      >
        Monthly
      </button>
      <button
        onClick={() => setMonth(2)}
        className={`py-3 px-4 w-full lg:w-auto text-center font-medium ${
          month === 2 ? "bg-black-velvet text-white rounded-lg" : "text-gray-500"
        }`}
      >
        Yearly
      </button>
    </div>
  </div>

  {/* جعبه پلن */}
  <div className="mt-8">
    <PlanBox id={month} />
  </div>
</div>

        <div className="mt-36 max-md:mt-12">
        <div className=" relative w-full">
  <div className="relative flex flex-col gap-2 z-10">
    <img
      src="\New folder\Image Container.png"
      alt=""
      className="rounded-t-md shadow-lg max-md:w-full  max-md:h-16"
    />
    <img src="\New folder\Image Container (2).png" alt="" className="shadow-lg max-md:w-full  max-md:h-16" />
    <img src="\New folder\Image Container (3).png" alt="" className="shadow-lg max-md:w-full  max-md:h-16" />
    <img
      src="\New folder\Image Container (4).png"
      alt=""
      className="rounded-b-md shadow-lg max-md:w-full  max-md:h-16"
    />
  </div>

  <div
    className="absolute inset-0 rounded-md z-20 flex items-center justify-center"
    style={{
      background: 'linear-gradient(90deg, rgba(10, 10, 10, 0.7) 20%, rgba(15, 15, 15, 0.7) 20%, rgba(20, 10, 10, 0.7) 50%, rgba(200, 0, 0, 0.6) 100%)',
    }}
  >
    <div className="flex justify-between items-center w-full px-8 text-white z-40 max-md:flex-col">
      <div className="flex-1 max-md:flex-row">
        <h1 className="text-2xl font-bold">Start your free trial today!</h1>
        <p className="mt-2">
          This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.
        </p>
      </div>
      <button
        className="px-6 py-4 max-md:mt-4 bg-red-btn cursor-pointer rounded-md shadow-lg text-white"
   
      >
        Start a Free Trial
      </button>
    </div>
  </div>
</div>





        </div>
      </div>
    </div>
  );
};

export default HomePage;
