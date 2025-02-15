import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/home/Banner';
import Trending from '../components/home/Trending';
import TopCreators from '../components/home/TopCreators';
import Categories from '../components/home/Categories';
import Mushroom from '../components/home/Mushroom';
import DiscoverMore from '../components/home/DiscoverMore';
import HowItWorks from '../components/home/HowItWorks';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='bg-gray'>
      <Navbar />
      <Banner />
      <Trending />
      <Categories />
      <TopCreators />
      <DiscoverMore />
      <Mushroom />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Home;
