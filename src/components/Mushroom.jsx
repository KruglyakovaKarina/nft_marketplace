import React from 'react';
import { motion } from 'framer-motion';
import mushroom from '../assets/MagicMushrooms.png';
import avatar from '../assets/avatarPlaceholder.png';
import eye from '../assets/Eye.svg';
import { useNavigate } from 'react-router-dom';

const Mushroom = () => {
  const navigate = useNavigate();

  return (
    <div className='lg:py-20 py-10'>
      <div className='bg-gradient-to-b from-transparent to-purple z-10 w-full h-[600px] absolute lg:px-5 sm:px-36 md:px-20 px-12'>
        <div className='max-w-5xl mx-auto flex md:flex-row lg:flex-row flex-col justify-between lg:items-end md:items-end  h-full py-16'>
          <div className='flex flex-col gap-8 items-start '>
            <motion.div
              onClick={() => {
                navigate('/artist-page');
              }}
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1.0 }}
              className='bg-gray cursor-pointer flex flex-row rounded-full max-w-fit px-5 py-2 gap-3 items-center'
            >
              <img src={avatar} alt='' className='rounded-full w-7' />
              Shroomie
            </motion.div>
            <h1 className='lg:text-5xl md:text-5xl text-4xl font-semibold'>
              Magic Mashrooms
            </h1>
            <motion.button
              onClick={() => {
                navigate('/nft-page');
              }}
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1.0 }}
              className='bg-white rounded-2xl max-w-fit text-black font-semibold px-6 py-4 flex flex-row gap-3'
            >
              <img src={eye} alt='' className='w-6' />
              See NFT
            </motion.button>
          </div>
          <div className='bg-graySecond/70  px-8 py-7 rounded-2xl space-y-3 lg:w-[320px] w-[260px]'>
            <p>Auction ends in:</p>
            <p className='lg:text-5xl text-4xl font-semibold'>12 : 43 : 45</p>
            <div className='flex flex-row gap-4 justify-between'>
              <p>Hours</p>
              <p>Minutes</p>
              <p>Seconds</p>
            </div>
          </div>
        </div>
      </div>
      <img
        src={mushroom}
        alt=''
        className='w-full h-[600px] object-cover z-20'
      />
    </div>
  );
};

export default Mushroom;
