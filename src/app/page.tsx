import React from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Progressor from './components/Progressor';
import ProductList from './components/ProductList';
import Banner from './components/Banner';
import Burger from './components/Burger';
import MenuItems from './components/MenuItems';
import Offer from './components/Offer';
import Card from './components/Card';
import Reservation from './components/Reservation';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className='bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen text-white'>
      <Navbar />
      <div className='container mx-auto px-4'>
        <Carousel />
        <Progressor />
        <ProductList />
        <Banner />
        <Burger />
        <MenuItems />
        <Offer />
        <Card />
        <Reservation />
      </div>
      <Footer />
    </div>
  );
}
