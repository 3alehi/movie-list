import React from 'react';
import Plans from "@/public/data/plans.json";

interface PlanBoxProps {
  id: number;
}

const PlanBox: React.FC<PlanBoxProps> = ({ id }) => {
  return (
    <div className="grid grid-cols-3 gap-7 mt-20 max-lg:grid-cols-2 justify-items-center max-md:grid-cols-1 max-md:mt-5">
      {Plans.plans.map((data) => (
        <div
          key={data.id}
          className="bg-black-velvet px-12 py-12 max-lg:px-8 max-md:px-6 max-lg:pt-9 rounded-lg w-full"
        >
          <h1 className="text-2xl font-bold max-lg:text-xl max-md:text-lg">
            {data.name}
          </h1>
          <p className="text-gray-9 mt-4 max-lg:text-sm">
            {data.description}
          </p>
          <p className="mt-12 flex items-baseline">
            <span className="text-white text-3xl max-lg:text-2xl max-md:text-xl">
              ${id === 1 ? data.monthly_price : data.yearly_price}
            </span>
            <span className="text-gray-9 ml-1 max-lg:text-sm">
              {id === 1 ? "/month" : "/year"}
            </span>
          </p>
          {/* دکمه‌ها */}
          <div className="flex flex-wrap justify-between mt-14 gap-5">
            <button className="py-4 px-6 rounded-lg max-lg:px-4 max-lg:py-3 max-md:py-2 max-lg:text-sm border border-bg-black w-full sm:w-auto">
              Start Free Trial
            </button>
            <button className="bg-red-btn py-4 px-7 rounded-lg max-lg:px-4 max-lg:py-3 max-md:py-2 max-lg:text-sm w-full sm:w-auto">
              Choose Plan
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlanBox;
