import React from 'react';

const products = [
  {
    id: 1,
    title: "Chapli Burger",
    category: "Fixing",
    price: 300.00,
    imageUrl: "https://i.pinimg.com/564x/81/74/5a/81745a7b3dd0651cdef3ddc3f7c79d02.jpg",
    bgColor: "bg-amber-500"
  },
  {
    id: 2,
    title: "Mutton Cheese Burger",
    category: "Delights",
    price: 500.00,
    imageUrl: "https://i.pinimg.com/564x/d8/84/ed/d884edaf06c6a9f0117584a064b21dbe.jpg",
    bgColor: "bg-teal-500"
  },
  { 
    id: 3,
    title: "Grilled Chicken Burger",
    category: "Fixing",
    price: 700.00,
    imageUrl: "https://i.pinimg.com/564x/fd/cb/ff/fdcbffc27e95e5b0e46ad1aeae413d52.jpg",
    bgColor: "bg-amber-500"
  },   
];

const ProductList = () => { 
  return (
    <div className='p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'> {/* Responsive grid layout */}
      {products.map((product) => (
        <div key={product.id} className={`flex flex-col ${product.bgColor} rounded-lg shadow-lg border-b-4 border-gray-300 overflow-hidden`}>
          <img className="w-full h-64 object-cover" src={product.imageUrl} alt={product.title} /> {/* Increased height */}
          <div className='text-white px-4 py-4'> {/* Adjusted padding */}
            <span className='block opacity-75 text-sm'>{product.category}</span>
            <div className='flex justify-between items-center'>
              <span className='font-semibold text-lg truncate'>{product.title}</span> {/* Truncate text to fit in one line */}
              <span className='bg-white rounded-full text-orange-500 text-sm font-bold px-3 py-1 leading-none'>
                {product.price.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
