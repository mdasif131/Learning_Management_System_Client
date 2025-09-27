import React from 'react';
import { IoIosStar } from 'react-icons/io';

const ReviewPage = () => {
  // Mock data for reviews
  const reviews = [
    {
      id: 1,
      user: {
        name: 'Lina',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      },
      rating: 5,
      comment:
        'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...',
      date: '3 Month',
    },
    {
      id: 2,
      user: {
        name: 'Lina',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      },
      rating: 5,
      comment:
        'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...',
      date: '3 Month',
    },
  ];

  // Star rating component
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

  // Rating distribution chart
  const RatingDistribution = () => {
    const ratings = [
      { stars: 5, percentage: 80 },
      { stars: 4, percentage: 75 },
      { stars: 3, percentage: 60 },
      { stars: 2, percentage: 45 },
      { stars: 1, percentage: 30 },
    ];

    return (
      <div className="flex flex-col gap-2">
        {ratings.map((rating, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="text-sm font-medium w-12">
              {rating.stars} Stars
            </span>
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div
                className="bg-teal-500 h-2 rounded-full"
                style={{ width: `${rating.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-blue-50 p-6 rounded-xl max-w-2xl mx-auto">
      {/* Overall Rating Section */}
      <div className="flex gap-6 mb-6">
        {/* Left side - Overall Rating */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-2xl font-bold">4 out of 5</div>
          <div className="mt-2">
            <div className="flex  items-center space-x-2">{renderStars(4)}</div>
          </div>
          <div className="mt-2 text-sm text-gray-600">Top Rating</div>
        </div>

        {/* Right side - Rating Distribution */}
        <div className="flex-1">
          <RatingDistribution />
        </div>
      </div>

      {/* Reviews Section */}
      <div className="space-y-6">
        {reviews.map(review => (
          <div key={review.id} className="border-t pt-4">
            <div className="flex justify-between items-start">
              <div className="flex gap-3">
                <img
                  src={review.user.avatar}
                  alt={review.user.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="font-semibold">{review.user.name}</div>
                  <div className="mt-1">
                    <div className="flex  items-center space-x-2">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-xs text-gray-500 flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {review.date}
              </div>
            </div>
            <p className="mt-3 text-gray-700 leading-relaxed">
              {review.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewPage;
