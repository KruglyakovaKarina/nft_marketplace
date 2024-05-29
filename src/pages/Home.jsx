import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Trending from '../components/Trending';

const Home = () => {
  return (
    <div className='bg-gray'>
      <Navbar />
      <Banner />
      <Trending />
    </div>
  );
};

export default Home;
