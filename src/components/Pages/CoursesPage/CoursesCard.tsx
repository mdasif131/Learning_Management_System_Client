import React from 'react';
import coursesCard_1 from '@/app/assets/images/courses_Image/coursesCard_1.png';
import coursesCard_2 from '@/app/assets/images/courses_Image/coursesCard_2.png';
import coursesCard_3 from '@/app/assets/images/courses_Image/coursesCard_3.png';
import coursesCard_4 from '@/app/assets/images/courses_Image/coursesCard_4.png';
import coursesCard_5 from '@/app/assets/images/courses_Image/coursesCard_5.png';
import coursesCard_6 from '@/app/assets/images/courses_Image/coursesCard_6.png';
import coursesCard_7 from '@/app/assets/images/courses_Image/coursesCard_7.png';
import coursesCard_8 from '@/app/assets/images/courses_Image/coursesCard_8.png';
import mantor_Img from '@/app/assets/images/courses_Image/mantor_img.png';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { RiBox3Line } from 'react-icons/ri';
import { GoStopwatch } from 'react-icons/go';

export interface IMentor {
  img: string | StaticImageData;
  name: string;
}

export interface ICourse {
  image: string | StaticImageData;
  title: string;
  des: string;
  times: string;
  mentor: IMentor;
  discount: boolean;
  price: string;
  discountPrice: string;
}

const CoursesCard = () => {
  const coursesData: ICourse[] = [
    {
      image: coursesCard_1,
      title: 'AWS Certified Solutions Architect',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      times: '3 Month',
      mentor: { img: mantor_Img, name: 'Lina' },
      discount: true,
      price: '100',
      discountPrice: '80',
    },
    {
      image: coursesCard_2,
      title: 'AWS Certified Solutions Architect',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      times: '3 Month',
      mentor: { img: mantor_Img, name: 'Lina' },
      discount: true,
      price: '100',
      discountPrice: '80',
    },
    {
      image: coursesCard_3,
      title: 'AWS Certified Solutions Architect',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      times: '3 Month',
      mentor: { img: mantor_Img, name: 'Lina' },
      discount: true,
      price: '100',
      discountPrice: '80',
    },
    {
      image: coursesCard_4,
      title: 'AWS Certified Solutions Architect',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      times: '3 Month',
      mentor: { img: mantor_Img, name: 'Lina' },
      discount: true,
      price: '100',
      discountPrice: '80',
    },
    {
      image: coursesCard_5,
      title: 'AWS Certified Solutions Architect',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      times: '3 Month',
      mentor: { img: mantor_Img, name: 'Lina' },
      discount: true,
      price: '100',
      discountPrice: '80',
    },
    {
      image: coursesCard_6,
      title: 'AWS Certified Solutions Architect',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      times: '3 Month',
      mentor: { img: mantor_Img, name: 'Lina' },
      discount: true,
      price: '100',
      discountPrice: '80',
    },
    {
      image: coursesCard_7,
      title: 'AWS Certified Solutions Architect',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      times: '3 Month',
      mentor: { img: mantor_Img, name: 'Lina' },
      discount: false,
      price: '100',
      discountPrice: '80',
    },
    {
      image: coursesCard_8,
      title: 'AWS Certified Solutions Architect',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      times: '4 Month',
      mentor: { img: mantor_Img, name: 'Lina' },
      discount: true,
      price: '120',
      discountPrice: '100',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-full mx-auto">
      {coursesData.map((item, i) => {
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
          <div
            key={i}
            className="w-full max-w-[380px] rounded-[20px] bg-white shadow-[0_18.83px_47.08px_0_rgba(47,50,125,0.10)] p-4"
          >
            {/* Image */}
            <div className="p-2">
              <Image src={item.image} alt="image" width={400} height={300} />
            </div>

            {/* Meta */}
            <div className="flex items-center justify-between">
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
        );
      })}
    </div>
  );
};

export default CoursesCard;
