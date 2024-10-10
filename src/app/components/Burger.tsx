import React from 'react';

const burgers = [
  {
    id: 1,
    title: "Bacon BBQ Burger",
    category: "Fixing",
    price: 250.00,
    imageUrl: "https://i.pinimg.com/564x/d5/d4/bb/d5d4bb7e8a83e3cc20f3383e4ca3e5c7.jpg",
    bgColor: "bg-amber-500"
  },
  {
    id: 2,
    title: "Classic Cheeseburger",
    category: "Delights",
    price: 400.00,
    imageUrl: "https://i.pinimg.com/564x/22/29/0d/22290dcfd246cc18d795fe19750e6e68.jpg",
    bgColor: "bg-teal-500"
  },
  { 
    id: 3,
    title: "Caprese Burger",
    category: "Fixing",
    price: 600.00,
    imageUrl: "https://i.pinimg.com/564x/06/f8/84/06f884c13b794514ec82428336308822.jpg",
    bgColor: "bg-amber-500"
  },
];

const BurgerList = () => { 
  return (
    <div className='p-4 flex items-center justify-center overflow-x-auto px-6 space-x-6'>
      {burgers.map((burger) => (
        <div key={burger.id} className={`flex-shrink-0 ${burger.bgColor} rounded-lg shadow-lg w-80 border-b-4 border-gray-300`}>
          <img className="w-full h-64 object-cover rounded-t-lg" src={burger.imageUrl} alt={burger.title} />
          <div className='text-white px-6 py-4'>
            <span className='block opacity-75 text-sm'>{burger.category}</span>
            <div className='flex justify-between items-center'>
              <span className='font-semibold text-lg truncate'>{burger.title}</span>
              <span className='bg-white rounded-full text-orange-500 text-sm font-bold px-3 py-2 leading-none'>
                {burger.price.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BurgerList;
