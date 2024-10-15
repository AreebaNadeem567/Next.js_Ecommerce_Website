'use client';

import React from 'react';

type Offer = {
  title: string;
  description: string;
};

const SpecialOffers: React.FC = () => {
  const offers: Offer[] = [
    {
      title: 'Happy Hour',
      description: 'Get 50% off on all drinks from 5 PM to 7 PM.'
    },
    {
      title: 'Family Burger Deal',
      description: 'Order 2 main courses and use the option to avail the family burger deal.'
    },
    {
      title: 'Weekly Branch',
      description: 'Enjoy a complimentary free drink.'
    },
  ];

  const handleOfferClick = (description: string) => {
    alert(description); 
  };

  return (
    <section className='py-10 bg-gray-100'> {/* Added background color */}
      <div id='offer' className='container mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-6 text-gray-800'>Special Offers</h2> {/* Changed text color to darker for contrast */}
        <div className='flex justify-center mb-6'>
          {/* GitHub Logo with Custom Color */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 16 16" 
            fill="currentColor" 
            className="w-8 h-8 text-red-500" // Change text-red-500 to any color class you want
          >
            <path d="M8 .198A8 8 0 0 0 0 8c0 3.536 2.291 6.537 5.47 7.594.4.074.55-.173.55-.385 0-.189-.007-.691-.01-1.357-2.24.486-2.715-1.079-2.715-1.079-.366-.928-.89-1.176-.89-1.176-.727-.497.055-.487.055-.487.804.056 1.225.826 1.225.826.715 1.227 1.877.872 2.334.666.072-.518.28-.872.508-1.073-1.776-.202-3.644-.888-3.644-3.946 0-.87.31-1.581.82-2.14-.082-.203-.355-1.028.078-2.138 0 0 .67-.214 2.2.82A7.647 7.647 0 0 1 8 3.14a7.645 7.645 0 0 1 2.002.27c1.53-1.034 2.2-.82 2.2-.82.433 1.11.16 1.935.078 2.138.51.559.82 1.27.82 2.14 0 3.063-1.88 3.744-3.66 3.944.29.25.55.742.55 1.494 0 1.08-.01 1.95-.01 2.215 0 .213.15.461.56.384A8 8 0 0 0 16 8a8 8 0 0 0-8-7.802z" />
          </svg>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {offers.map((offer, index) => (
            <button 
              key={index} 
              onClick={() => handleOfferClick(offer.description)} 
              className='bg-white shadow-lg rounded-lg text-center hover:bg-gray-300 transition duration-300 transform hover:scale-105 p-4'
            >
              <h3 className='text-2xl font-semibold text-red-700'>{offer.title}</h3>
              <p className='text-slate-700 mt-3'>{offer.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
