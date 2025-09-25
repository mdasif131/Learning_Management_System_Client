import React from 'react';
import Link from 'next/link';
import mainImgSvg from '@/app/assets/images/mainLogo2.svg';
import Image from 'next/image';
interface FooterLink {
  label: string;
  link: string;
}

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerData: FooterLink[] = [
    { label: 'Careers', link: '/careers' },
    { label: 'Privacy Policy', link: '/privacy' },
    { label: 'Terms & conditions', link: '/terms' },
  ];

  return (
    <div className="bg-[#252641]">
      <div className="container mx-auto py-10 w-full">
        <div className="grid grid-cols-1 w-full max-w-2xl mx-auto px-4">
          {/* Step 01 - Logo and Title */}
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-8 w-full max-w-md mx-auto">
            <div className="pl-14 flex justify-center border-r border-gray-300 pr-4 sm:pr-0">
              <Image
                src={mainImgSvg}
                alt="TOTC Logo"
                width={200}
                height={180}
                className="h-16 w-auto"
              />
            </div>
            <div className="flex justify-center sm:justify-start">
              <p className="text-white text-[22px] font-medium text-center sm:text-left">
                Virtual Class
                <br /> for Zoom
              </p>
            </div>
          </div>

          {/* Step 02 - Newsletter */}
          <div className="mt-10 sm:mt-20 px-4">
            <h3 className="text-[#B2B3CF] text-center text-[22px] sm:text-[26px]">
              Subscribe to get our Newsletter
            </h3>

            <form className="flex flex-col sm:flex-row items-center gap-4 mt-5 w-full max-w-md mx-auto">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
                className="border border-gray-400 rounded-full px-6 py-3 w-full text-gray-400 mb-2 sm:mb-0"
              />
              <button
                type="button"
                className="rounded-full px-6 py-3 bg-[#49BBBD] text-white cursor-pointer w-full sm:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Step 03 - Links and Copyright */}
          <div className="text-[#B2B3CF] flex flex-col items-center gap-4 mt-10 px-4">
            <ul className="grid grid-cols-1 sm:grid-cols-3 items-center justify-center gap-4 w-full max-w-md">
              {footerData.map((item, i) => {
                return (
                  <li
                    key={i}
                    className={`text-center py-2 ${
                      i < 2
                        ? 'border-b sm:border-b-0 sm:border-r border-gray-400'
                        : ''
                    }`}
                  >
                    <Link
                      href={item.link}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <p className="text-center">
              &copy; {currentYear} Class Technologies Inc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
