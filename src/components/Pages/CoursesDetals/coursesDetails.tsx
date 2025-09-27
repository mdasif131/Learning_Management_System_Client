import React from 'react';
interface CoursesDetailsProps {
  details: ICourse;
}
import {
  FaMoneyBillWave,
  FaLaptop,
  FaCertificate,
  FaBook,
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
} from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md';
import { ICourse } from '../CoursesPage/CoursesCard';
import Image from 'next/image';

const CoursesDetails: React.FC<CoursesDetailsProps> = ({ details }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      {/* Course Image */}
      <div className="w-full h-48 bg-gray-200 p-4">
        <Image
          src={details.image || ''}
          alt="Course Preview"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Price Section */}
      <div className="p-6">
        {/* Price Display */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-3xl font-bold text-gray-900">
            ${details.discountPrice}
          </span>
          <span className="text-xl text-gray-400 line-through">
            ${details.price}
          </span>
          <span className="text-xl font-bold text-green-600">New offer</span>
        </div>

        {/* Countdown Timer */}
        <div className="text-sm text-blue-500 mb-6 flex items-center gap-1">
          <MdAccessTime className="inline" /> 11 hour left at this price
        </div>
        <h2 className='text-xl font-bold py-4'>{details.title}</h2>
        <div className="text-lg text-gray-500 mb-6 flex items-center gap-1">
          {details.des}
        </div>

        {/* Buy Now Button */}
        <button className="w-full py-3 px-4 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-lg transition-colors duration-300">
          Buy Now
        </button>

        {/* Divider */}
        <div className="my-6 border-t border-gray-200"></div>

        {/* Course Features */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">This Course included</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <FaMoneyBillWave className="text-teal-500" />
              <span>Money Back Guarantee</span>
            </li>
            <li className="flex items-center gap-2">
              <FaLaptop className="text-teal-500" />
              <span>Access on all devices</span>
            </li>
            <li className="flex items-center gap-2">
              <FaCertificate className="text-teal-500" />
              <span>Certification of completion</span>
            </li>
            <li className="flex items-center gap-2">
              <FaBook className="text-teal-500" />
              <span>32 Modules</span>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-200"></div>

        {/* Training Section */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">
            Training 5 or more people
          </h3>
          <p className="text-gray-600 text-sm">
            Class, launched less than a year ago by Blackboard co-founder
            Michael Chasen, integrates exclusively...
          </p>
        </div>

        {/* Share Section */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Share this course</h3>
          <div className="flex gap-3">
            <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
              <FaTwitter className="text-gray-700" />
            </button>
            <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
              <FaFacebook className="text-gray-700" />
            </button>
            <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
              <FaYoutube className="text-gray-700" />
            </button>
            <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
              <FaInstagram className="text-gray-700" />
            </button>
            <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
              <FaTelegram className="text-gray-700" />
            </button>
            <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
              <FaWhatsapp className="text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesDetails;
