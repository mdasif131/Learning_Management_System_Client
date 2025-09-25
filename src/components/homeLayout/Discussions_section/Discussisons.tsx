import React from 'react'
import discussionsImg from '@/app/assets/images/discussions_Image.png'
import Image from 'next/image';
const Discussisons = () => {
  return (
    <div className="container mx-auto py-20 grid grid-cols-1 md:grid-cols-2 items-center justify-between px-4">
      <div className='max-md:order-2'>
        <Image src={discussionsImg} alt="teacherImg" width={630} height={615} />
      </div>
      <div className='max-md:order-1'>
        <h1 className="text-[#2F327D] font-bold text-4xl leading-[160%]">
          One-on-One
          <br /> <span className="text-[#00CBB8]"> Discussions</span>
        </h1>
        <p className="text-lg lg:text-2xl text-gray-400 max-w-[548px] mt-5">
          Teachers and teacher assistants can talk with students privately
          without leaving the Zoom environment.
        </p>
      </div>
    </div>
  );
}

export default Discussisons