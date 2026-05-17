import React from 'react';
import Hero from '../components/Hero';
import CategoriesSlider from '../components/CategoriesSlider';
import TrendingProducts from '../components/TrendingProducts';

const Home = () => {
  return (
    <>
    <div className="space-y-12 md:space-y-20"></div>
      <Hero />
      <CategoriesSlider />
      <TrendingProducts />
    </>
  );
};

export default Home;
