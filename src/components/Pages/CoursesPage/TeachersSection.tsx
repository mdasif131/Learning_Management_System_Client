import React from 'react'
import tacher_1 from '@/app/assets/images/courses_Image/tacher_1.png'
import tacher_2 from '@/app/assets/images/courses_Image/tacher_2.png'
import tacher_3 from '@/app/assets/images/courses_Image/tacher_3.png'
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
interface ITeachers {
  id:number,
  avater: string | StaticImageData;
  name: string,
  des: string,

}
const TeachersSection = () => {
  const toughtData: ITeachers[] = [
    { id: 1, avater: tacher_1, name:"Jane Cooper", des:"Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor"},
    { id:2, avater: tacher_2, name:"Adam", des:"Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor"},
    { id: 3, avater: tacher_3, name:"Tomara", des:"Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor"},
    { id: 1, avater: tacher_1, name:"Jane Cooper", des:"Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor"},
    { id: 1, avater: tacher_3, name:"Tomara", des:"Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor"},
    { id: 1, avater: tacher_2, name:"Adam", des:"Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor"},
  ]
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-20 ">
        <div className="flex items-center justify-between">
          <h3 className="text-black text-lg sm:text-xl  lg:text-3xl">
            Classes tought by real creators
          </h3>
          <button className="font-bold text-lg md:text-xl text-[#49BBBD]">
            See all
          </button>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10'>
          {toughtData.map((item, i) => {
            return (
              <div key={i} className="bg-transparent relative cursor-pointer hover:bg-cyan-300/20">
                <Image
                  className="z-50 mx-auto"
                  src={item.avater}
                  alt="avater"
                  width={278}
                  height={277}
                />
                <div className="w-full -z-10 bg-white max-w-[516px] shadow-[2px_2px_10px_2px_rgba(0,0,0,0.25)] flex flex-col space-y-4 items-center justify-center py-6 pt-26 -mt-20">
                  <h3 className="text-2xl text-[#252641]">{item.name}</h3>
                  <p className="text-gray-500 max-w-[377px]">{item.des}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TeachersSection