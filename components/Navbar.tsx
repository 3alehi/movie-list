'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'; // برای گرفتن مسیر فعلی

interface MenuItem {
  id: number;
  title: string;
  href: string;
}

const Navbar: React.FC = () => {
  const pathname = usePathname(); // گرفتن مسیر فعلی
  const [activeItems, setActiveItems] = useState<number | null>(1);

  const menuItems: MenuItem[] = [
    { id: 1, title: 'Home', href: '/' },
    { id: 2, title: 'Movies & Shows', href: '/movies-shows' },
    { id: 3, title: 'Support', href: '/support' },
    { id: 4, title: 'Subscriptions', href: '/subscriptions' },
  ];

  useEffect(() => {
    // یافتن آیتم فعال براساس مسیر فعلی
    const activeItem = menuItems.find((item) => item.href === pathname);
    if (activeItem) {
      setActiveItems(activeItem.id);
    }
  }, [pathname]); // بروزرسانی در صورت تغییر مسیر

  return (
    <div className="w-full flex justify-between container mx-auto my-5">
      {/* Logo */}
      <div className="flex items-center cursor-pointer">
        <i className="mx-1">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M41.4862 20.07C41.1363 9.11059 32.2559 0.266489 21.2596 0C20.9763 0 20.7431 0.216522 20.7431 0.499667L20.7264 7.86143C20.7264 8.22785 20.4432 8.51099 20.0766 8.52765C9.11363 8.86076 0.266578 17.7548 0 28.7475C0 29.0306 0.216594 29.2638 0.499833 29.2638L7.84738 29.2805C8.21393 29.2805 8.49717 29.5636 8.51383 29.93C8.86371 40.8894 17.7607 49.7335 28.7404 50C29.0237 50 29.2569 49.7835 29.2569 49.5003L29.2736 42.1386C29.2736 41.7722 29.5568 41.489 29.9234 41.4724C40.8864 41.1226 49.7334 32.2285 50 21.2525C50 20.9694 49.7834 20.7362 49.5002 20.7362L42.1526 20.7195C41.7861 20.7195 41.5028 20.4364 41.4862 20.07ZM28.5405 41.4224C22.3092 41.056 17.3109 35.9927 17.0776 29.7302C17.061 29.4637 16.8444 29.2472 16.5778 29.2472L9.24692 29.2305C8.86371 29.2305 8.56381 28.9141 8.58047 28.531C8.94702 22.3018 14.012 17.3051 20.2766 17.072C20.5431 17.0553 20.7597 16.8388 20.7597 16.5723L20.7764 9.22718C20.7764 8.8441 21.093 8.5443 21.4762 8.56096C27.7074 8.92738 32.7058 13.9907 32.939 20.2532C32.9557 20.5197 33.1723 20.7362 33.4389 20.7362L40.7697 20.7528C41.1529 20.7528 41.4528 21.0693 41.4362 21.4524C41.0696 27.8481 35.7547 32.928 29.2736 32.928L29.2569 40.7562C29.2403 41.1392 28.9237 41.439 28.5405 41.4224Z"
              fill="#E60000"
            />
          </svg>
        </i>
      </div>

      {/* Menu Links */}
      <ul className="bg-black flex items-center rounded-xl py-5 px-8 max-md:hidden">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`mx-4 cursor-pointer text-text-gray ${
              item.id === activeItems &&
              'text-white bg-black-velvet rounded-lg px-5 py-3'
            }`}
          >
            <Link  className='max-lg:text-sm' href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <div className='bg-black-velvet py-4 px-4 rounded-lg border border-black md:hidden '>
        <i><svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0 0.75C0 0.335786 0.335786 0 0.75 0H17.25C17.6642 0 18 0.335786 18 0.75C18 1.16421 17.6642 1.5 17.25 1.5H0.75C0.335786 1.5 0 1.16421 0 0.75ZM0 6C0 5.58579 0.335786 5.25 0.75 5.25H17.25C17.6642 5.25 18 5.58579 18 6C18 6.41421 17.6642 6.75 17.25 6.75H0.75C0.335786 6.75 0 6.41421 0 6ZM8.25 11.25C8.25 10.8358 8.58579 10.5 9 10.5H17.25C17.6642 10.5 18 10.8358 18 11.25C18 11.6642 17.6642 12 17.25 12H9C8.58579 12 8.25 11.6642 8.25 11.25Z" fill="white"/>
</svg>
</i>
      </div>

      <div className="flex  items-center max-md:hidden">
      <i className='cursor-pointer'>
        <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.75 26.75L19.388 19.388M19.388 19.388C21.3108 17.4653 22.5 14.809 22.5 11.875C22.5 6.00697 17.743 1.25 11.875 1.25C6.00697 1.25 1.25 6.00697 1.25 11.875C1.25 17.743 6.00697 22.5 11.875 22.5C14.809 22.5 17.4653 21.3108 19.388 19.388Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
        </i>
        <i className="mx-4 cursor-pointer">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.8569 15.0817C14.7514 14.857 16.5783 14.4116 18.3111 13.7719C16.8743 12.177 15.9998 10.0656 15.9998 7.75V7.04919C15.9999 7.03281 16 7.01641 16 7C16 3.68629 13.3137 1 10 1C6.68629 1 4 3.68629 4 7L3.9998 7.75C3.9998 10.0656 3.12527 12.177 1.68848 13.7719C3.4214 14.4116 5.24843 14.857 7.14314 15.0818M12.8569 15.0817C11.92 15.1928 10.9666 15.25 9.9998 15.25C9.03317 15.25 8.07988 15.1929 7.14314 15.0818M12.8569 15.0817C12.9498 15.3711 13 15.6797 13 16C13 17.6569 11.6569 19 10 19C8.34315 19 7 17.6569 7 16C7 15.6797 7.05019 15.3712 7.14314 15.0818"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>


        </i>
   
      </div>
    </div>
  );
};

export default Navbar;
