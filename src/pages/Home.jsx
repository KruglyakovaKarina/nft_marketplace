import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Trending from '../components/Trending';
import TopCreators from '../components/TopCreators';
import Categories from '../components/Categories';
import Mushroom from '../components/Mushroom';

const Home = () => {
  return (
    <div className='bg-gray'>
      <Navbar />
      <Banner />
      <Trending />
      <Categories />
      <TopCreators />
      <Mushroom />
    </div>
  );
};

export default Home;
