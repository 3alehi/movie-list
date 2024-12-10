"use client"; // Add this directive at the top

import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchGenres } from "@/lib/api/genres";

import "swiper/css";
import Experience from "@/components/Experience";
import Questions from "@/components/Questions";
import PlanBox from "@/components/PlanBox";
import ExploreCategories from "@/components/ExploreCategort";

const HomePage: React.FC = () => {

  const [month, setMonth] = useState<number>(1)
  const { data, isLoading } = useQuery({
    queryKey: ["genres"],
    queryFn: fetchGenres,
  });

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([]) => {

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
<path fillRule="evenodd" clipRule="evenodd" d="M0 2.6527C0 1.22656 1.529 0.322511 2.7786 1.00979L14.3192 7.35711C15.6144 8.06947 15.6144 9.93056 14.3192 10.6429L2.7786 16.9902C1.529 17.6775 0 16.7735 0 15.3473V2.6527Z" fill="white"/>
</svg>

            Start Watching Now
          </button>
        </div>
      </div>

      <div className="container mx-auto mt-20">
      <ExploreCategories wich="Explore" data={data} isLoading={isLoading} title="Explore our wide variety of categories" desc="Whether you re looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new" />

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

  <Questions />
</div>

<div className="mt-36 max-md:mt-12">
  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5">
    <div className="lg:w-2/3 max-md:w-full">
      <h1 className="text-4xl max-lg:text-2xl max-md:text-xl font-semibold">
        Choose the plan that s right for you
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

      </div>
    </div>
  );
};

export default HomePage;
