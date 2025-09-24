import React from 'react';
import billingicon from '@/app/assets/images/bullinIcon.png'
import clanderIcon from '@/app/assets/images/clander2.png'
import customerIcon from '@/app/assets/images/coustomericon.png'
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
interface ICloudFeatures {
  image: string | StaticImageData,
  title: string,
  des: string
}

const CloudFeatures = () => {
  const cloudData: ICloudFeatures[] = [
    {
      image: billingicon,
      title: 'Online Billing, Invoicing, & Contracts',
      des: 'Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts',
    },
    {
      image: clanderIcon,
      title: 'Easy Scheduling & Attendance Tracking',
      des: 'Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance',
    },
    {
      image: customerIcon,
      title: 'Customer Tracking',
      des: 'Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization ',
    },
  ];
  return (
    <div className="py-10 container mx-auto">
      <div className="text-black flex flex-col items-center justify-center gap-4 text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold">
          <span className="text-[#2F327D]">All-In-One</span>{' '}
          <span className="text-[#00CBB8]">Cloud Software</span>
        </h2>
        <p className="text-[#696984] text-sm sm:text-xl md:text-2xl max-w-[837px] text-center">
          TOTC is one powerful online software suite that combines all the tools
          needed to run a successful school or office.
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-12 md:gap-15 mt-20 md:mt-40 px-4 md:px-8'>
        {cloudData.map((item, i) => {
          return (
            <div
              key={i}
              className="flex flex-col items-center justify-center bg-white shadow-custom rounded-[20px] px-6 md:px-[53px] pb-12 pt-20 relative "
            >
              <Image
                src={item.image}
                className="size-[110px] absolute  -top-11  rounded-full"
                alt="image"
                height={100}
                width={100}
              />
              <div className="flex flex-col items-center justify-center text-center space-y-6">
                <h2 className="text-[#2F327D] text-2xl font-[500] md:text-3xl">{item.title}</h2>
                <p className="text-[#696984] text-lg  md:text-xl">{item.des}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CloudFeatures;
