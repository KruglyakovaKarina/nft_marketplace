import React from 'react';
import { motion } from 'framer-motion';
import { PiRocketLaunchLight } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';
import bannerImg from '../assets/bannerImage.png';
import avatarImg from '../assets/avatarPlaceholder.png';

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className='max-w-5xl mx-auto lg:py-20 py-10 lg:px-5 sm:px-36 md:px-20 px-12'>
      <div className='inline-flex md:flex-row lg:flex-row flex-col items-center justify-between lg:gap-x-32 md:gap-x-12 gap-y-12'>
        <div className='md:w-[50%] lg:w-[50%] w-[100%] space-y-8'>
          <h1 className='lg:text-6xl md:text-4xl sm:text-3xl text-2xl font-semibold'>
            Discover digital art & Collect NFTs
          </h1>
          <p className='lg:text-xl md:text-lg text-md'>
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>
          <motion.button
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 1.0 }}
            onClick={() => {
              navigate('/create-account');
            }}
            className='bg-purple rounded-2xl w-52 py-4 flex items-center justify-center gap-3 font-semibold text-lg'
          >
            <PiRocketLaunchLight className='bg-purple text-2xl' />
            Get Started
          </motion.button>
          <div className='inline-flex justify-between w-[100%] lg:text-2xl md:text-xl text-lg'>
            <div>
              <h3 className='font-bold'>240k+ </h3>
              <p>Total Sale</p>
            </div>
            <div>
              <h3 className='font-bold'>100k+</h3>
              <p>Auctions</p>
            </div>
            <div>
              <h3 className='font-bold'>240k+</h3>
              <p>Artists</p>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            navigate('/artist-page');
          }}
          className='md:w-[50%] lg:w-[50%] sm:w-[80%] w-[90%] bg-graySecond rounded-2xl'
        >
          <img src={bannerImg} alt='' />
          <div className='mx-5 my-4 space-y-3'>
            <h3 className='text-xl font-semibold'>Space Walking</h3>
            <div className='inline-flex items-center gap-4'>
              <img src={avatarImg} alt='' className='w-[30px] rounded-full' />
              <p>Animakid</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
