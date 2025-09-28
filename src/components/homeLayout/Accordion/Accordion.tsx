// 'use client';

// import { useState } from 'react';
// import Image, { StaticImageData } from 'next/image';

// // Define props type for AccordionItem
// interface AccordionItemProps {
//   title: string;
//   content: string;
//   isOpen: boolean;
//   onToggle: () => void;
//   color: string;
//   image: string | StaticImageData;
//   price?: string;
//   rating?: number;
// }

// const AccordionItem = ({
//   title,
//   content,
//   isOpen,
//   onToggle,
//   color,
//   image,
//   price = '$450',
//   rating = 5,
// }: AccordionItemProps) => {
//   return (
//     <div
//       className={`relative flex-shrink-0 cursor-pointer transition-all duration-500 ease-in-out rounded-2xl shadow-md transform ${
//         isOpen ? 'w-96 rotate-0' : 'w-16 -rotate-6'
//       }`}
//       style={{ backgroundColor: color }}
//       onClick={onToggle}
//     >
//       <div className="h-full flex flex-col justify-center items-center p-4 text-white">
//         {!isOpen && (
//           <span
//             className="font-semibold transition-all duration-300 text-sm md:text-base"
//             style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}
//           >
//             {title}
//           </span>
//         )}
//         {isOpen && (
//           <div className="absolute top-0 left-full ml-4 md:ml-6 w-[280px] md:w-[320px] h-auto bg-white rounded-2xl shadow-lg p-4 md:p-6 flex flex-col">
//             <div className="relative w-full h-32 md:h-40 mb-4 rounded-lg overflow-hidden">
//               <Image src={image} alt={title} fill className="object-cover" />
//             </div>
//             <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
//               {title}
//             </h2>
//             <p className="text-gray-600 flex-1 text-xs md:text-sm leading-relaxed">
//               {content}
//             </p>
//             <div className="mt-4 flex items-center justify-between">
//               <span className="text-yellow-500">{'★'.repeat(rating)}</span>
//               <span className="text-sm md:text-lg font-semibold text-gray-800">
//                 {price}
//               </span>
//             </div>
//             <button className="mt-4 px-3 md:px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 text-sm md:text-base">
//               Explore
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default function Accordion() {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const accordionData = [
//     {
//       title: 'Ut Sed Eros',
//       content: 'Sample content for Ut Sed Eros',
//       color: '#f87171',
//       image: '/assets/food1.jpg',
//       price: '$299',
//       rating: 4,
//     },
//     {
//       title: 'Curabitur Egestas',
//       content: 'Sample content for Curabitur Egestas',
//       color: '#fb923c',
//       image: '/assets/food2.jpg',
//       price: '$199',
//       rating: 5,
//     },
//     {
//       title: 'Quisque Commodo',
//       content: 'Sample content for Quisque Commodo',
//       color: '#fbbf24',
//       image: '/assets/food3.jpg',
//       price: '$399',
//       rating: 3,
//     },
//     {
//       title: 'Cras Convallis',
//       content: 'Sample content for Cras Convallis',
//       color: '#34d399',
//       image: '/assets/food4.jpg',
//       price: '$250',
//       rating: 4,
//     },
//     {
//       title: 'Vestibulum Facilisi',
//       content: 'Sample content for Vestibulum Facilisi',
//       color: '#a78bfa',
//       image: '/assets/food5.jpg',
//       price: '$150',
//       rating: 5,
//     },
//     {
//       title: 'Ut Sed Eros',
//       content: 'Sample content again for Ut Sed Eros',
//       color: '#38bdf8',
//       image: '/assets/food6.jpg',
//       price: '$349',
//       rating: 4,
//     },
//     {
//       title: 'Vestibulum Habitu',
//       content: 'Sample content for Vestibulum Habitu',
//       color: '#4ade80',
//       image: '/assets/food7.jpg',
//       price: '$279',
//       rating: 5,
//     },
//   ];

//   const handleToggle = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 py-12 px-4">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//             Fancy Horizontal Accordion
//           </h1>
//           <p className="text-gray-600 max-w-md mx-auto text-sm md:text-base">
//             Click on a tab to expand and view details
//           </p>
//         </div>

//         <div className="flex space-x-3 md:space-x-4 overflow-x-auto pb-6 scrollbar-hide">
//           {accordionData.map((item, index) => (
//             <AccordionItem
//               key={index}
//               title={item.title}
//               content={item.content}
//               color={item.color}
//               image={item.image}
//               price={item.price}
//               rating={item.rating}
//               isOpen={openIndex === index}
//               onToggle={() => handleToggle(index)}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client"
import { useState } from 'react';

interface BarItem {
  title: string;
  content: string;
}

interface CarouselItemProps {
  bars: BarItem[];
}

const CarouselItem: React.FC<CarouselItemProps> = ({ bars }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleBar = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="carousel-item">
      {bars.map((bar, index) => (
        <div key={index}>
          <div className="bar" onClick={() => toggleBar(index)}>
            {bar.title}
          </div>
          {openIndex === index && <div className="content">{bar.content}</div>}
        </div>
      ))}
    </div>
  );
};

const Carousel: React.FC = () => {
  const carouselData: BarItem[][] = [
    [
      { title: 'Bar 1', content: 'Content for Bar 1' },
      { title: 'Bar 2', content: 'Content for Bar 2' },
    ],
    [
      { title: 'Bar 3', content: 'Content for Bar 3' },
      { title: 'Bar 4', content: 'Content for Bar 4' },
    ],
    [
      { title: 'Bar 5', content: 'Content for Bar 5' },
      { title: 'Bar 6', content: 'Content for Bar 6' },
    ],
  ];

  return (
    <div className="carousel">
      {carouselData.map((bars, idx) => (
        <CarouselItem key={idx} bars={bars} />
      ))}
      <style jsx>{`
        .carousel {
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          width: 80%;
          margin: 20px auto;
          border: 1px solid #ccc;
          border-radius: 10px;
        }
        .carousel-item {
          flex: 0 0 300px;
          margin: 10px;
          padding: 10px;
          background: #f4f4f4;
          border-radius: 10px;
          scroll-snap-align: start;
        }
        .bar {
          background: #3498db;
          color: white;
          padding: 10px;
          margin: 10px 0;
          cursor: pointer;
          border-radius: 5px;
          text-align: center;
        }
        .content {
          background: #ecf0f1;
          padding: 10px;
          margin-top: 5px;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};

export default Carousel;
