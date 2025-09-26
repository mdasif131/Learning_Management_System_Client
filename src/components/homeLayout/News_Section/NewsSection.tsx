'use client';

import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IoArrowForwardOutline } from 'react-icons/io5';
import type { StaticImageData } from 'next/image';
import news_Img_1 from '@/app/assets/images/news_Image/news_Img_1.png';
import news_Img_2 from '@/app/assets/images/news_Image/news_Img_2.png';
import news_Img_3 from '@/app/assets/images/news_Image/news_Img_3.png';
import news_Img_4 from '@/app/assets/images/news_Image/news_Img_4.png';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  image: string | StaticImageData;
  category: string;
  date: string;
}

const NewsSection: FC = () => {
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title:
        'Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution',
      excerpt:
        'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...',
      image:news_Img_1,
      category: 'NEWS',
      date: 'May 15, 2023',
    },
    {
      id: 2,
      title:
        'Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand',
      excerpt: 'Class Technologies Inc., the company that created Class,...',
      image: news_Img_2,
      category: 'PRESS RELEASE',
      date: 'May 10, 2023',
    },
    {
      id: 3,
      title:
        "Zoom's earliest investors are betting millions on a better Zoom for schools",
      excerpt:
        'Zoom was never created to be a consumer product. Nonetheless, the...',
      image: news_Img_3,
      category: 'NEWS',
      date: 'May 5, 2023',
    },
    {
      id: 4,
      title:
        'Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms',
      excerpt:
        'This year, investors have reaped big financial returns from betting on Zoom...',
      image: news_Img_4,
      category: 'NEWS',
      date: 'April 28, 2023',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-indigo-800 mb-4">
            Latest News and Resources
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See the developments that have occurred to TOTC in the world
          </p>
        </div>

        {/* Main News Item */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5}}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={newsItems[0].image}
              alt={newsItems[0].title}
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="bg-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {newsItems[0].category}
                </span>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                {newsItems[0].title}
              </h2>
              <p className="text-gray-600 mb-4">{newsItems[0].excerpt}</p>
              <button className="text-teal-600 font-medium flex items-center hover:text-teal-800 transition-colors">
                Read more <IoArrowForwardOutline className="ml-1 w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Sidebar News Items */}
          <div className="space-y-6">
            {newsItems.slice(1).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex"
              >
                <div className="w-1/3">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-2/3 p-4">
                  <div className="flex items-center mb-2">
                    <span className="bg-teal-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {item.excerpt}
                  </p>
                  <button className="text-teal-600 text-sm font-medium flex items-center hover:text-teal-800 transition-colors">
                    Read more <IoArrowForwardOutline className="ml-1 w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default NewsSection;
