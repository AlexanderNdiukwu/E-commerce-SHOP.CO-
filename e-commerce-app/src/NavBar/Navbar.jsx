import React, { useState } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='grid lg:mx-24 py-2.5 items-center'>
      <div className='grid grid-cols-2 lg:grid-cols-4 justify-center  items-center bg text-sm'>
        <div className='flex mx-2 lg:mx-0 lg:grid-cols-1 items-center gap-2.5'>
          <p className=' lg:hidden grid justify-end items-center '>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg>
          </p>
          <p className='text-[32px] font-bold whitespace-nowrap text-center  grid justify-start'>SHOP.CO</p>
        </div>

        <div className=' lg:grid grid-cols-4 hidden '>
          <div className='relative'>
            <button onClick={toggleDropdown} className='focus:outline-none'>
              Shop
            </button>
            {isDropdownOpen && (
              <div className='absolute z-50 mt-2 w-48 bg-white border rounded shadow-lg'>
                <ul>
                  <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Category 1</li>
                  <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Category 2</li>
                  <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Category 3</li>
                </ul>
              </div>
            )}
          </div>

          <div className='whitespace-nowrap'>
            on Sale
          </div>

          <div className='whitespace-nowrap'>
            new Arrivals
          </div>

          <div className='whitespace-nowrap'>
            Brand
          </div>
        </div>

        <div className='hidden lg:flex items-center '>
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="search for products..."
              className="border rounded-2xl pl-10 pr-2 py-1 w-full "
            />
          </div>
        </div>

        <div className='grid grid-cols-5 lg:grid-cols-2 gap-2 items-center '>
            <div className='grid col-span-3 justify-end lg:hidden'>
                <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
              </svg>
            </span>
            </div>

          <div>
            <p className='grid justify-center lg:justify-end'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </p>
          </div>

          <div className='grid lg:justify-start'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;