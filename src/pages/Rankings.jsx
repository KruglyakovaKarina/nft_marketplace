import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import avatarImg from '../assets/avatarPlaceholder.png';
import { useNavigate } from 'react-router-dom';

const Rankings = () => {
  const btnTime = ['Today', 'This Week', 'This Month', 'All Time'];

  const [time, setTime] = useState('Today');

  const topCreators = [
    {
      name: 'Jaydon Ekstrom Bothman',
      change: '1.43',
      nftSold: 603,
      volume: '12.6',
    },
    {
      name: 'Ruben Carder',
      change: '1.40',
      nftSold: 600,
      volume: '12.2',
    },
    {
      name: 'Alfredo Septimus',
      change: '1.42',
      nftSold: 604,
      volume: '12.5',
    },
    {
      name: 'Davis Franci',
      change: '1.39',
      nftSold: 601,
      volume: '12.3',
    },
    {
      name: 'Livia Rosser',
      change: '1.41',
      nftSold: 602,
      volume: '12.4',
    },
    {
      name: 'Kianna Donin',
      change: '1.40',
      nftSold: 600,
      volume: '12.2',
    },
    {
      name: 'Phillip Lipshutz',
      change: '1.43',
      nftSold: 605,
      volume: '12.6',
    },
    {
      name: 'Maria Rosser',
      change: '1.38',
      nftSold: 599,
      volume: '12.1',
    },
    {
      name: 'Kianna Stanton',
      change: '1.44',
      nftSold: 606,
      volume: '12.7',
    },
    {
      name: 'Angel Lubin',
      change: '1.40',
      nftSold: 601,
      volume: '12.3',
    },
    {
      name: 'Allison Torff',
      change: '1.39',
      nftSold: 601,
      volume: '12.3',
    },
    {
      name: 'Davis Workman',
      change: '1.42',
      nftSold: 603,
      volume: '12.6',
    },
    {
      name: 'Lindsey Lipshutz',
      change: '1.40',
      nftSold: 600,
      volume: '12.2',
    },
    {
      name: 'Randy Carder',
      change: '1.41',
      nftSold: 602,
      volume: '12.4',
    },
    {
      name: 'Lydia Culhane',
      change: '1.39',
      nftSold: 601,
      volume: '12.3',
    },
    {
      name: 'Rayna Bator',
      change: '1.43',
      nftSold: 604,
      volume: '12.6',
    },
    {
      name: 'Jocelyn Westervelt',
      change: '1.41',
      nftSold: 602,
      volume: '12.4',
    },
    {
      name: 'Marilyn Torff',
      change: '1.40',
      nftSold: 600,
      volume: '12.2',
    },
    {
      name: 'Skylar Levin',
      change: '1.44',
      nftSold: 606,
      volume: '12.7',
    },
    {
      name: 'Terry Dorwart',
      change: '1.38',
      nftSold: 599,
      volume: '12.1',
    },
  ];

  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className='bg-gray'>
        <div className='max-w-5xl mx-auto lg:pt-20 pt-10 pb-10 lg:px-5 sm:px-16 md:px-20 px-12'>
          <div>
            <h1 className='lg:text-[40px] text-[30px] font-semibold mb-3'>
              Top Creators
            </h1>
            <p className='lg:text-[20px] md:text-[18px] text-[16px]'>
              Check out top ranking NFT artists on the NFT Marketplace.
            </p>
          </div>
          <div className='lg:mt-20 md:mt-10 mt-7'>
            <div className='flex flex-row justify-between items-center'>
              {btnTime.map((btn, ind) => (
                <button
                  onClick={() => setTime(btn)}
                  className={`lg:text-[20px] md:text-[16px] text-[14px] font-semibold lg:px-16 md:px-10 px-5 py-3 ${
                    time === btn ? 'border-b-grayThird border-b-2' : ''
                  }`}
                  key={ind}
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>
          <div className='mt-7'>
            <div className='w-full flex flex-row py-3 gap-4 border border-graySecond rounded-3xl '>
              <p className='w-[60px] text-center text-grayThird lg:inline md:inline sm:inline hidden'>
                #
              </p>
              <p className='w-[370px] text-grayThird lg:pl-0 md:pl-0 sm:pl-0 pl-5'>
                Artist
              </p>
              <p className='w-[180px] text-grayThird lg:inline md:inline hidden'>
                Change
              </p>
              <p className='w-[180px] text-grayThird lg:inline hidden '>
                NFTs Sold
              </p>
              <p className='text-grayThird lg:w-[180px] md:w-[130px] w-[120px]'>
                Volume
              </p>
            </div>
            <div className='flex flex-col gap-4 mt-5'>
              {topCreators.map((creator, ind) => (
                <motion.div
                  onClick={() => {
                    navigate('/artist-page');
                  }}
                  whileHover={{ scale: 0.95 }}
                  whileTap={{ scale: 1.0 }}
                  key={ind}
                  className='flex flex-row gap-4 items-center bg-graySecond rounded-2xl py-3'
                >
                  <div className='w-[60px] justify-center lg:flex md:flex sm:flex hidden'>
                    <p className='w-[25px] text-center text-grayThird bg-gray rounded-full '>
                      {ind + 1}
                    </p>
                  </div>
                  <div className='flex flex-row items-center gap-4 w-[380px] lg:pl-0 md:pl-0 sm:pl-0 pl-5'>
                    <img
                      src={avatarImg}
                      alt=''
                      className='lg:w-[50px] md:w-[50px] sm:w-[50px] w-[30px] rounded-full'
                    />
                    <p className='font-medium lg:text-[20px] md:text-[20px] sm:text-[18px] text-[16px]'>
                      {creator.name}
                    </p>
                  </div>
                  <p className='w-[180px] text-green lg:inline md:inline hidden'>
                    +{creator.change}%
                  </p>
                  <p className='w-[180px] lg:inline hidden '>
                    {creator.nftSold}
                  </p>
                  <p className='lg:w-[180px] md:w-[130px] w-[120px]'>
                    {creator.volume} ETH
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Rankings;
