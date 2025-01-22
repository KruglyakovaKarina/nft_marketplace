import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Trending from '../components/Trending';
import TopCreators from '../components/TopCreators';
import Categories from '../components/Categories';
import Mushroom from '../components/Mushroom';
import DiscoverMore from '../components/DiscoverMore';
import HowItWorks from '../components/HowItWorks';
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
