import React from 'react'
import { coursesData } from './CoursesCard';
import Image from 'next/image';
import { RiBox3Line } from 'react-icons/ri';
import { GoStopwatch } from 'react-icons/go';
import Link from 'next/link';

const Recommended = () => {
  return (
    <div className="bg-[#EEF6FF]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-20">
        <div className="flex items-center justify-between">
          <h3 className="text-black text-lg sm:text-xl  lg:text-3xl">Recommended for you</h3>
          <button className="font-bold text-lg md:text-xl text-[#49BBBD]">See all</button>
        </div>
        <div className=" mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-full mx-auto">
          {coursesData.slice(0,4).map((item, i) => {
            let price = (
              <p className="mx-auto text-lg sm:text-xl md:text-2xl font-bold text-[#49BBBD]">
                ${item.price}
              </p>
            );
            if (item.discount === true) {
              price = (
                <p className="flex items-center gap-2 sm:gap-4">
                  <span className="text-gray-500 text-xs sm:text-sm md:text-base">
                    <del>${item.price}</del>
                  </span>
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#49BBBD]">
                    ${item.discountPrice}
                  </span>
                </p>
              );
            }
            return (
              <Link href={`/courses-details/${item.id}`} key={i}>
                <div className="w-full max-w-[380px] mx-auto rounded-[20px] bg-white shadow-[0_18.83px_47.08px_0_rgba(47,50,125,0.10)] p-4">
                  {/* Image */}
                  <div className="p-2">
                    <Image
                      src={item.image}
                      alt="image"
                      width={400}
                      height={300}
                    />
                  </div>

                  {/* Meta */}
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-gray-400 flex items-center gap-2 sm:gap-3 text-sm md:text-base">
                      <RiBox3Line className="text-lg sm:text-xl" />
                      <span>Design</span>
                    </p>
                    <p className="text-gray-400 flex items-center gap-2 sm:gap-3 text-sm md:text-base">
                      <GoStopwatch className="text-lg sm:text-xl" />
                      <span>{item.times}</span>
                    </p>
                  </div>

                  {/* Title + Description */}
                  <div className="flex flex-col gap-4 sm:gap-6 mt-4">
                    <h2 className="text-[#252641] text-lg sm:text-xl md:text-2xl font-medium">
                      {item.title}
                    </h2>
                    <p className="text-[#696984] text-sm sm:text-base md:text-lg leading-relaxed md:leading-[180%]">
                      {item.des}
                    </p>
                  </div>

                  {/* Mentor + Price */}
                  <div className="flex items-center justify-between gap-4 sm:gap-6 mt-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Image
                        src={item.mentor.img}
                        alt="image"
                        width={44}
                        height={44}
                        className="rounded-full"
                      />
                      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium">
                        {item.mentor.name}
                      </h3>
                    </div>
                    <div>{price}</div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Recommended