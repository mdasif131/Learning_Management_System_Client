'use client';

import { useState } from 'react';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { IoIosStar } from 'react-icons/io';
import carosul_img_1 from '@/app/assets/images/Carousel_Image/Carousel_img_1.png'
import carosul_img_2 from '@/app/assets/images/Carousel_Image/Carousel_img_2.png'
import carosul_img_3 from '@/app/assets/images/Carousel_Image/Carousel_img_3.png'
import carosul_img_4 from '@/app/assets/images/Carousel_Image/Carousel_img_4.png'
import type { StaticImageData } from 'next/image';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  reviews: number;
  image: string | StaticImageData;
}

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Gloria Rose',
      text: "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking.",
      rating: 5,
      reviews: 12,
      image: carosul_img_1,
    },
    {
      id: 2,
      name: 'Michael Chen',
      text: 'This platform transformed how we manage our projects. The intuitive interface and powerful features have made collaboration seamless across our entire team.',
      rating: 5,
      reviews: 8,
      image: carosul_img_2,
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      text: "I was skeptical at first, but after using this for just one week, I'm completely sold. The customer support is outstanding and the features are exactly what we needed.",
      rating: 4,
      reviews: 15,
      image: carosul_img_3,
    },
    {
      id: 4,
      name: 'Sarah Johnson',
      text: "I was skeptical at first, but after using this for just one week, I'm completely sold. The customer support is outstanding and the features are exactly what we needed.",
      rating: 3,
      reviews: 15,
      image: carosul_img_4,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % testimonials.length);
  };

  // const prevSlide = () => {
  //   setCurrentSlide(
  //     prev => (prev - 1 + testimonials.length) % testimonials.length
  //   );
  // };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <IoIosStar
        key={i}
        className={`text-xl ${
          i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="">
      <div className="relative  w-full">
        {/* Image */}
        <div className="max-w-[560px] z-10 bg-blue-100 rounded-2xl relative">
          <Image
            src={testimonials[currentSlide].image}
            alt={testimonials[currentSlide].name}
            className="w-full h-full object-cover"
            width={560}
            height={700}
          />

          {/* Navigation buttons */}
          {/* <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <MdKeyboardDoubleArrowRight className="w-5 h-5 rotate-180 text-gray-600" />
            </button> */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <MdKeyboardDoubleArrowLeft className="w-6 h-6 rotate-180 text-[#1EA4CE]" />
          </button>
        </div>

        {/* Testimonial content */}
        <div className="absolute z-20 -bottom-20 left-5 w-full lg:w-[680px] transform lg:-translate-x-20 xl:w-[680px]  ">
          <div className="p-6 pt-4">
            <div className="bg-white rounded-lg  p-5 border-l-4 border-orange-400 shadow-lg ">
              <p className="text-gray-500 text-xs sm:text-sm md:text-lg md:text-[22px] mb-4 leading-relaxed">
                "{testimonials[currentSlide].text}"
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {testimonials[currentSlide].name}
                  </h3>
                </div>
                <div className="text-right">
                  <div className="flex  items-center space-x-1 mb-1">
                    {renderStars(testimonials[currentSlide].rating)}
                  </div>
                  <p className="text-sm text-gray-500">
                    {testimonials[currentSlide].reviews} reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
