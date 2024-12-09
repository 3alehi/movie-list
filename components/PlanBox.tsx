import React from 'react';
import Plans from "@/public/data/plans.json"
interface PlanBoxProps{
    id:number
}
const PlanBox: React.FC<PlanBoxProps> = ({id}) => {
    return (
        <div className='grid grid-cols-3 gap-7 mt-20 max-lg:grid-cols-2 justify-items-center max-md:grid-cols-1 max-md:mt-5 '>
            {Plans.plans.map(data  =>(
                <div key={data.id} className='bg-black-velvet px-12 py-12 max-lg:px-4 max-lg:pt-9 rounded-lg '>
                    <h1 className='text-2xl font-bold'>{data.name}</h1>
                    <p className='text-gray-9 mt-4'>{data.description}</p>
                    <p className='mt-12'>
                        <span className='text-white text-3xl'>${id === 1  ? data.monthly_price : data.yearly_price}</span><span className='text-gray-9'>{id === 1 ? "/month" : "/year"}</span>
                    </p>
                    <div className='flex justify-between mt-14 gap-5'>
                        <button className=' py-4 px-6 rounded-lg max-lg:px-4 max-lg:py-2 max-lg:text-sm border border-bg-black'>Start Free Trial</button>
                        <button className='bg-red-btn py-4 px-7 max-lg:px-4 max-lg:py-2 max-lg:text-sm rounded-lg'>Choose Plan</button>
                    </div>


                </div>
            ))}
        </div>
    );
};

export default PlanBox;