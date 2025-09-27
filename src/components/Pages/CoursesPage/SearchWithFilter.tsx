'use client';
import React, { useState } from 'react';
import filterbg from '@/app/assets/images/courses_Image/filterBg.png';
import Image from 'next/image';

const SearchWithFilter: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    subject: '',
    partner: '',
    program: '',
    language: '',
    ability: '',
    learningType: '',
  });

  const subjects = [
    'All Subjects',
    'Computer Science',
    'Business',
    'Engineering',
    'Arts',
    'Mathematics',
  ];
  const partners = [
    'All Partners',
    'Stanford University',
    'MIT',
    'Harvard',
    'Yale',
    'Princeton',
  ];
  const programs = [
    'All Programs',
    'Bachelor',
    'Master',
    'PhD',
    'Certificate',
    'Short Course',
  ];
  const languages = [
    'All Languages',
    'English',
    'Spanish',
    'French',
    'German',
    'Chinese',
    'Japanese',
  ];
  const abilities = [
    'All Levels',
    'Beginner',
    'Intermediate',
    'Advanced',
    'Expert',
  ];
  const learningTypes = [
    'All Types',
    'Online',
    'On-campus',
    'Hybrid',
    'Self-paced',
    'Instructor-led',
  ];

  const handleFilterChange = (filterName: string, value: string) => {
    setFilters(prev => ({ ...prev, [filterName]: value }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching with:', { searchQuery, filters });
  };

  return (
    <div className="w-full">
      <div className="relative w-full max-h-[400px] bg-gray-200 overflow-hidden">
        <Image
          src={filterbg}
          alt="Filter background"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          quality={75}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 py-10 md:py-16 lg:py-20">
          <div className="w-full max-w-6xl mx-auto space-y-6">
            {/* Search Bar */}
            <form
              onSubmit={handleSearch}
              className="flex flex-col sm:flex-row gap-3 w-full"
            >
              <div className="flex-grow">
                <input
                  type="text"
                  placeholder="Search your favourite course"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-800 placeholder-gray-500 bg-white"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-lg transition-colors duration-200 whitespace-nowrap"
              >
                Search
              </button>
            </form>

            {/* Filter Row */}
            <div className="flex flex-wrap gap-3 justify-center">
              {Object.entries(filters).map(([key, value]) => {
                let options: string[] = [];
                switch (key) {
                  case 'subject':
                    options = subjects;
                    break;
                  case 'partner':
                    options = partners;
                    break;
                  case 'program':
                    options = programs;
                    break;
                  case 'language':
                    options = languages;
                    break;
                  case 'ability':
                    options = abilities;
                    break;
                  case 'learningType':
                    options = learningTypes;
                    break;
                  default:
                    options = [];
                }

                return (
                  <div key={key} className="relative">
                    <select
                      value={value}
                      onChange={e => handleFilterChange(key, e.target.value)}
                      className="appearance-none px-4 py-2 bg-white/90 backdrop-blur-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer text-gray-800 min-w-[140px] text-sm md:text-base"
                    >
                      {options.map(option => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchWithFilter;
