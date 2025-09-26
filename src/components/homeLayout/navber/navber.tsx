// Add this at the top of the file to mark it as a client-side component
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import mainLogo from '@/app/assets/images/mainLogo.png';
import { HiMenu, HiX } from 'react-icons/hi';
const Navbar = () => {
  // State to manage the mobile menu's open/closed status
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`${isOpen ? 'bg-gray-500' : 'bg-[#49BBBD]'} relative  shadow`}
    >
      <div className=" container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image
                className="w-auto h-16 "
                src={mainLogo}
                alt="Company Logo"
                width={150}
                height={100}
              />
            </Link>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-white hover:text-gray-600 "
                aria-label="toggle menu"
              >
                {/* Conditionally render hamburger or close icon */}
                {!isOpen ? (
                  <HiMenu className="w-6 h-6" />
                ) : (
                  <HiX className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-whitelg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
              isOpen
                ? 'translate-x-0 opacity-100 bg-gray-500'
                : 'opacity-0 -translate-x-full'
            }`}
          >
            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
              <Link
                href={'/'}
                className="px-3 py-2 mx-3 mt-2 rounded-md lg:mt-0 text-gray-100 hover:text-black transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                href={'/courses'}
                className="px-3 py-2 mx-3 mt-2 rounded-md lg:mt-0  text-gray-100 hover:text-black transition-colors duration-300"
              >
                Courses
              </Link>
              <Link
                href={'/careers'}
                className="px-3 py-2 mx-3 mt-2 rounded-md lg:mt-0  text-gray-100 hover:text-black transition-colors duration-300"
              >
                Careers
              </Link>
              <Link
                href={'/blogs'}
                className="px-3 py-2 mx-3 mt-2 rounded-md lg:mt-0  text-gray-100 hover:text-black transition-colors duration-300"
              >
                Blog
              </Link>
              <Link
                href={'/about'}
                className="px-3 py-2 mx-3 mt-2 rounded-md lg:mt-0  text-gray-100 hover:text-black transition-colors duration-300"
              >
                About Us
              </Link>
            </div>

            <div className="flex items-center gap-5 mt-4 lg:mt-0">
              <Link href={'authLogin'}>
                <button className="rounded-full px-6 py-2 text-black bg-white cursor-pointer transform hover:scale-x-[105%] ">
                  Login
                </button>
              </Link>

              <Link href={'authLogin'}>
                <button className="rounded-full px-6 py-2 text-white bg-white/35 cursor-pointer hover:scale-x-[105%]">
                  Signup
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
