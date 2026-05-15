import React from 'react';
import Hero from '../components/Hero';
import CategoriesSlider from '../components/CategoriesSlider';
import TrendingProducts from '../components/TrendingProducts';

const Home = () => {
  return (
    <>
      <Hero />
      <CategoriesSlider />
      <TrendingProducts />
    </>
  );
};

export default Home;
