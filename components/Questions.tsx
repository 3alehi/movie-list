"use client"
import React, { useState } from 'react';
import faqe from '@/public/data/faqs.json';

const Questions: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <div>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5  mt-28 max-md:mt-12 ">
    <div className="lg:w-3/5 max-md:w-full">
      <h1 className="text-4xl max-lg:text-2xl max-md:text-xl font-semibold">
        Frequently Asked Questions
      </h1>
      <p className="text-gray-9 mt-4 max-lg:text-base">
        Got questions? We ve got answers! Check out our FAQ section to find
        answers to the most common questions about StreamVibe.
      </p>
    </div>
    <div className="flex justify-start lg:justify-end lg:w-2/5 max-md:w-full">
      <button className="bg-red-btn px-6 py-4 rounded-lg text-white font-medium max-lg:text-base">
        Ask a Question
      </button>
    </div>
  </div>
    <div className="grid grid-cols-2 mt-28 max-md:mt-12 gap-2 my-5 max-lg:grid-cols-1">
      {faqe.FAQs.map((data) => (
        <div key={data.id}>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <p className="bg-bg-black px-5 py-5 rounded-lg mx-5">{data.id}</p>
              <h1>{data.question}</h1>
            </div>
            {openId === Number(data.id) ? (
              <svg
                onClick={() => handleToggle(Number(data.id))}
                className="cursor-pointer"
                width="20"
                height="4"
                viewBox="0 0 20 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.75 0.75H1.25C0.918479 0.75 0.600537 0.881696 0.366117 1.11612C0.131696 1.35054 0 1.66848 0 2C0 2.33152 0.131696 2.64946 0.366117 2.88388C0.600537 3.1183 0.918479 3.25 1.25 3.25H18.75C19.0815 3.25 19.3995 3.1183 19.6339 2.88388C19.8683 2.64946 20 2.33152 20 2C20 1.66848 19.8683 1.35054 19.6339 1.11612C19.3995 0.881696 19.0815 0.75 18.75 0.75Z"
                  fill="white"
                />
              </svg>
            ) : (
              <svg
                onClick={() => handleToggle(Number(data.id))}
                className="cursor-pointer"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.75 9.25H11.25V1.75C11.25 1.41848 11.1183 1.10054 10.8839 0.866117C10.6495 0.631696 10.3315 0.5 10 0.5C9.66848 0.5 9.35054 0.631696 9.11612 0.866117C8.8817 1.10054 8.75 1.41848 8.75 1.75V9.25H1.25C0.918479 9.25 0.600537 9.3817 0.366117 9.61612C0.131696 9.85054 0 10.1685 0 10.5C0 10.8315 0.131696 11.1495 0.366117 11.3839C0.600537 11.6183 0.918479 11.75 1.25 11.75H8.75V19.25C8.75 19.5815 8.8817 19.8995 9.11612 20.1339C9.35054 20.3683 9.66848 20.5 10 20.5C10.3315 20.5 10.6495 20.3683 10.8839 20.1339C11.1183 19.8995 11.25 19.5815 11.25 19.25V11.75H18.75C19.0815 11.75 19.3995 11.6183 19.6339 11.3839C19.8683 11.1495 20 10.8315 20 10.5C20 10.1685 19.8683 9.85054 19.6339 9.61612C19.3995 9.3817 19.0815 9.25 18.75 9.25Z"
                  fill="white"
                />
              </svg>
            )}
          </div>
          {openId === Number(data.id) && (
            <div className="mt-2 mx-5 text-gray-9 px-20 max-md:px-0">
              <p>{data.answer}</p>
            </div>
          )}
<hr className="bg-red-btn h-[0.5px] rounded-lg my-4 border-none" />
</div>
      ))}
    </div>
    </div>
  );
};

export default Questions;
