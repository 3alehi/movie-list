import React from 'react'

export default function StartFree() {
  return (
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





    </div>  )
}
