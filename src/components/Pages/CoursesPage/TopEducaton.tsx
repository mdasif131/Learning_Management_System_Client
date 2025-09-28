import React from 'react'
import new_img_1 from '@/app/assets/images/news_Image/news_Img_1.png'
import new_img_2 from '@/app/assets/images/news_Image/news_Img_2.png'
import new_img_3 from '@/app/assets/images/news_Image/news_Img_4.png'
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
interface ITop {
  id: number;
  discount: string;
  avater: string | StaticImageData;
  title: string;
  des: string;

}
const TopEducaton = () => {
  const TopData: ITop[] = [
{ id: 1, discount:'50%',avater:new_img_2, title:'Lorem ipsum dolor', des:" Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor"},
{ id: 2, discount:'10%',avater:new_img_3, title:'Lorem ipsum dolor', des:" Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor"},
{ id: 3, discount:'20%',avater:new_img_2, title:'Lorem ipsum dolor', des:" Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor"},
  ]
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-20 ">
        <div className="flex items-center justify-between">
          <h3 className="text-black text-lg sm:text-xl  lg:text-3xl">
            Top Education offers and deals are listed here
          </h3>
          <button className="font-bold text-lg md:text-xl text-[#49BBBD]">
            See all
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {TopData.map((item, i) => {
            return (
              <div key={i}>
                <div className="relative z-20 ">
                  <Image
                    src={item.avater}
                    alt="avater"
                    fill
                    objectFit="cover"
                    className="-z-20 h-full max-h-[500px] rounded-2xl w-full max-w-[500px]"
                  />
                  <div className="bg-black/50 rounded-2xl -z-20 h-full max-h-[500px] w-full absolute top-0"></div>
                  <div className="z-30 px-6 py-6">
                    <div className="size-[80px] lg:size-[124px]  bg-[#49BBBD] text-white text-3xl lg:text-5xl font-bold rounded-[10px] flex items-center justify-center">
                      <h1 className="text-white">{item.discount}</h1>
                    </div>
                    <div className='flex flex-col mt-4 space-y-4'>
                      <h2 className='text-xl font-bold text-white'>{item.title}</h2>
                      <p className='text-gray-400'>{item.des}</p>
                    </div> 
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TopEducaton