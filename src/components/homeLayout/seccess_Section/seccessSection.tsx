import React from 'react';

type SuccessItem = {
  name: string;
  label: string;
};

const SuccessSection: React.FC = () => {
  const data: SuccessItem[] = [
    { name: '15k+', label: 'Students' },
    { name: '75%', label: 'Total Success' },
    { name: '35', label: 'Main Questions' },
    { name: '26', label: 'Chief Experts' },
    { name: '16', label: 'Years of Experience' },
  ];

  return (
    <div className="px-6 pt-10">
      <div className="flex flex-col items-center justify-center gap-y-4 text-center">
        <h1 className="text-5xl font-bold">Our Success</h1>
        <p className="text-lg text-gray-400 max-w-2xl">
          Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae
          sollicitudin at nec  nam et pharetra gravida. Adipiscing a quis
          ultrices eu ornare tristique vel nisl orci.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 ipad1:grid-cols-4 xl:grid-cols-5 gap-6 text-center lg:px-14 py-10">
        {data.map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  text-transparent bg-clip-text bg-gradient-to-r from-[#136CB5] to-[#49BBBD]">
              {item.name}
            </h2>
            <p className="text-gray-700 text-sm lg:text-[32px]">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessSection;
