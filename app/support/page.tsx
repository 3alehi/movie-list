import Questions from "@/components/Questions";
import React from "react";

const page: React.FC = () => {
  return (
    <div className="container mx-auto mt-24 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-[auto_60%] gap-10">
        {/* بخش متن و تصاویر */}
        <div>
          <h1 className="text-4xl max-lg:text-3xl max-md:text-2xl">
            Welcome to our support page!
          </h1>
          <p className="text-gray-9 mt-3 text-base max-lg:text-sm">
            We re here to help you with any problems you may be having with our
            product.
          </p>
          <div className="border-8 rounded-lg mt-10 border-hr">
            {/* تصاویر */}
            <img
              className="w-full"
              src="/New folder (2)/Image Container.png"
              alt="Container"
            />
            <img
              className="w-full"
              src="/New folder (2)/Image Container (1).png"
              alt="Container 1"
            />
            <img
              className="w-full"
              src="/New folder (2)/Image Container (2).png"
              alt="Container 2"
            />
            <img
              className="w-full"
              src="/New folder (2)/Image Container (3).png"
              alt="Container 3"
            />
          </div>
        </div>

        {/* فرم تماس */}
        <div className="border-4 border-hr rounded-lg bg-black-velvet p-6 max-lg:p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <h1 className="text-sm max-lg:text-xs">First Name</h1>
              <input
                placeholder="Enter First Name"
                className="w-full rounded-md p-3 border mt-2 border-hr outline-none bg-black text-sm max-lg:text-xs"
                type="text"
              />
            </div>
            <div>
              <h1 className="text-sm max-lg:text-xs">Last Name</h1>
              <input
                placeholder="Enter Last Name"
                className="w-full rounded-md p-3 border mt-2 border-hr outline-none bg-black text-sm max-lg:text-xs"
                type="text"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
            <div>
              <h1 className="text-sm max-lg:text-xs">Email</h1>
              <input
                placeholder="Enter Email"
                className="w-full rounded-md p-3 border mt-2 border-hr outline-none bg-black text-sm max-lg:text-xs"
                type="text"
              />
            </div>
            <div>
              <h1 className="text-sm max-lg:text-xs">Phone Number</h1>
              <input
                placeholder="Enter Phone Number"
                className="w-full rounded-md p-3 border mt-2 border-hr outline-none bg-black text-sm max-lg:text-xs"
                type="text"
              />
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-sm max-lg:text-xs">Message</h1>
            <textarea
              placeholder="Enter your message here..."
              className="resize-none w-full border-hr outline-none bg-black rounded-lg p-3 mt-2 text-sm max-lg:text-xs"
              rows={3}
            ></textarea>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center mt-5">
            <div className="text-sm text-gray-400 max-lg:text-xs text-center sm:text-left">
              I agree with Terms of Use and Privacy Policy
            </div>
            <button className="rounded-lg bg-red-btn px-5 py-3 mt-4 sm:mt-0 text-sm max-lg:text-xs">
              Send Message
            </button>
          </div>
        </div>
      </div>
      <Questions />
    </div>
  );
};

export default page;
