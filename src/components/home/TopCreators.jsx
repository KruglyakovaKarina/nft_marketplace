import React from 'react';
import { useNavigate } from 'react-router-dom';
import avatarImg from '../../assets/avatarPlaceholder.png';
import { motion } from 'framer-motion';
import eye from '../../assets/Eye.svg';

const TopCreators = () => {
  const navigate = useNavigate();

  const creators = [
    {
      place: 1,
      name: 'Keepitreal',
      sales: 34.53,
    },
    {
      place: 2,
      name: 'Digilab',
      sales: 32.22,
    },
    {
      place: 3,
      name: 'Gravityone',
      sales: 26.55,
    },
    {
      place: 4,
      name: 'Juanie',
      sales: 23.78,
    },
    {
      place: 5,
      name: 'Mr Fox',
      sales: 22.89,
    },
    {
      place: 6,
      name: 'Bluewale',
      sales: 21.99,
    },
    {
      place: 7,
      name: 'Animakid',
      sales: 19.54,
    },
    {
      place: 8,
      name: 'Schroomie',
      sales: 17.11,
    },
    /**  {
      place: 9,
      name: 'Robotica',
      sales: 15.33,
    },
    {
      place: 10,
      name: 'Dodgu',
      sales: 11.76,
    },
    {
      place: 11,
      name: 'RustyRobot',
      sales: 10.87,
    },
    {
      place: 12,
      name: 'Ghiblier',
      sales: 7.92,
    },*/
  ];

  return (
    <div className='max-w-5xl mx-auto lg:py-20 py-10 lg:px-5 sm:px-36 md:px-20 px-12'>
      <div className='flex flex-row justify-between items-end'>
        <div>
          <h1 className='lg:text-3xl text-2xl font-semibold'>Top Creators</h1>
          <p className='mt-3 lg:text-xl lg:max-w-max md:max-w-[250px] max-w-[150px]'>
            Checkout Top Rated Creators On The Nft Marketplace
          </p>
        </div>
        <motion.button
          onClick={() => {
            navigate('/rankings');
          }}
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 1.0 }}
          className='text-white border-2 border-purple rounded-2xl max-w-fit font-semibold lg:px-12 md:px-12 px-3 py-4 flex flex-row gap-4 items-center'
        >
          <img src={eye} alt='' className='w-6' />
          View Rankings
        </motion.button>
      </div>
      <div className='mt-10 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-2 sm:gap-5 lg:gap-8 '>
        {creators.map((creator, index) => (
          <motion.div
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 1.0 }}
            key={index}
            className='relative bg-graySecond flex flex-col align-middle items-center rounded-2xl cursor-pointer'
            onClick={() => {
              navigate('/artist-page');
            }}
          >
            <p className='bg-gray rounded-full flex justify-center left-4 top-4 text-grayThird absolute w-6'>
              {creator.place}
            </p>
            <img
              className='rounded-full my-5 w-20 sm:w-24 lg:w-32'
              src={avatarImg}
              alt=''
            />
            <h3 className='text-xl font-semibold'>{creator.name}</h3>
            <p className='mb-5 mt-1 px-4'>
              <span className='text-grayThird'>Total sales: </span>
              {creator.sales} ETH
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TopCreators;
