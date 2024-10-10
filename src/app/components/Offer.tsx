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
    <section className='py-10'>
      <div
      id='offer'
       className='container mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-6 text-white'>Special Offers</h2>
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