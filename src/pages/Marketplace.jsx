import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { IoSearchOutline } from 'react-icons/io5';
import nft1 from '../assets/NFT1.png';
import nft2 from '../assets/NFT2.png';
import nft3 from '../assets/NFT3.png';
import nft4 from '../assets/NFT4.png';
import nft5 from '../assets/NFT5.png';
import nft6 from '../assets/NFT6.png';
import nft7 from '../assets/NFT7.png';
import nft8 from '../assets/NFT8.png';
import nft9 from '../assets/NFT9.png';
import mushroom from '../assets/mushroom.png';
import bear from '../assets/bear.png';
import robot from '../assets/Robot.png';
import avatarImg from '../assets/avatarPlaceholder.png';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Marketplace = () => {
  const [activeBrowseMode, setActiveBrowseMode] = useState('nfts');

  const nfts = [
    {
      img: mushroom,
      name: 'Magic Mushroom 0325',
      author: 'Shroomie',
      price: 1.63,
      bid: 0.61,
    },
    {
      img: nft1,
      name: 'Distant Galaxy',
      author: 'MoonDancer',
      price: 1.67,
      bid: 0.25,
    },
    {
      img: bear,
      name: 'Designer Bear',
      author: 'Mr Fox',
      price: 1.23,
      bid: 0.68,
    },
    {
      img: nft2,
      name: 'Life On Edena',
      author: 'NebulaKid',
      price: 1.25,
      bid: 0.85,
    },
    {
      img: robot,
      name: 'Happy Robot 032',
      author: 'BeKind2Robots',
      price: 1.21,
      bid: 0.67,
    },
    {
      img: nft3,
      name: 'AstroFiction',
      author: 'Spaceone',
      price: 1.63,
      bid: 0.33,
    },
    {
      img: nft4,
      name: 'CryptoCity',
      author: 'Animakid',
      price: 1.35,
      bid: 0.13,
    },
    {
      img: nft5,
      name: 'ColorfulDog 0524',
      author: 'MoonDancer',
      price: 2.33,
      bid: 0.12,
    },
    {
      img: nft6,
      name: 'Space Tales',
      author: 'Animakid',
      price: 1.13,
      bid: 0.63,
    },
    {
      img: nft7,
      name: 'Cherry Blossom Girl',
      author: 'NebulaKid',
      price: 4.37,
      bid: 0.21,
    },
    {
      img: nft8,
      name: 'Dancing Robots 0987',
      author: 'Spaceone',
      price: 0.23,
      bid: 0.55,
    },
    {
      img: nft9,
      name: 'IceCream Ape',
      author: 'Animakid',
      price: 1.98,
      bid: 0.74,
    },
  ];

  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className='bg-gray'>
        <div>
          <div className='max-w-5xl mx-auto lg:pt-20 pt-10 lg:px-5 sm:px-16 md:px-20 px-12'>
            <h1 className='lg:text-[40px] text-[30px] font-semibold mb-3'>
              Browse Marketplace
            </h1>
            <p className='lg:text-[20px] md:text-[18px] text-[16px]'>
              Browse through more than 50k NFTs on the NFT Marketplace.
            </p>
          </div>
          <div className='max-w-5xl mx-auto lg:px-5 sm:px-16 md:px-20 px-12'>
            <div className='mt-10 mb-14 flex flex-row justify-between items-center  border border-graySecond rounded-2xl'>
              <input
                placeholder='Search your favorite NFTs'
                className='text-grayThird outline-none px-5 py-3 bg-transparent lg:w-[900px] md:w-[550px] sm:w-[400px] w-[200px]'
              ></input>
              <IoSearchOutline className='text-2xl cursor-pointer mr-5' />
            </div>
          </div>
          <div className='border-t border-graySecond '>
            <div className='flex flex-row justify-between items-center max-w-5xl mx-auto lg:px-5 sm:px-16 md:px-20 px-12'>
              <button
                onClick={() => setActiveBrowseMode('nfts')}
                className={`flex flex-row gap-3 lg:text-[20px] md:text-[18px] text-[16px] font-semibold  items-center lg:px-44 md:px-28 sm:px-20 px-6 py-3 ${
                  activeBrowseMode === 'nfts'
                    ? 'border-b-grayThird border-b-2'
                    : ''
                }`}
              >
                NFTs{' '}
                <div className='bg-grayThird rounded-2xl px-2 text-[16px] font-normal'>
                  302
                </div>
              </button>
              <button
                onClick={() => setActiveBrowseMode('collections')}
                className={`flex flex-row gap-3 lg:text-[20px] md:text-[18px] text-[16px] font-semibold items-center lg:px-44 md:px-28 sm:px-20 px-6 py-3 ${
                  activeBrowseMode === 'collections'
                    ? 'border-b-grayThird border-b-2'
                    : ''
                }`}
              >
                Collections{' '}
                <div className='bg-graySecond rounded-2xl px-2 text-[16px] font-normal'>
                  8
                </div>
              </button>
            </div>
          </div>
          <div className='bg-graySecond border-b-2 border-gray'>
            <div className='max-w-5xl mx-auto lg:px-5 sm:px-24 md:px-20 px-12 pt-10 pb-16 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 sm:gap-5 lg:gap-8'>
              {nfts.map((nft, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 0.9 }}
                  whileTap={{ scale: 1.0 }}
                  onClick={() => {
                    navigate('/nft-page');
                  }}
                  className='bg-gray rounded-2xl cursor-pointer overflow-hidden'
                >
                  <img
                    className='object-center object-cover '
                    src={nft.img}
                    alt=''
                  />
                  <div className='mx-5 my-4 space-y-3'>
                    <h3 className='text-xl font-semibold'>{nft.name}</h3>
                    <div className='inline-flex items-center gap-4'>
                      <img
                        src={avatarImg}
                        alt=''
                        className='w-[30px] rounded-full'
                      />
                      <p>{nft.author}</p>
                    </div>
                    <div className='flex flex-row justify-between'>
                      <div>
                        <p className='text-grayThird text-[16px]'>Price</p>
                        <p className='text-[18px]'>{nft.price} ETH</p>
                      </div>
                      <div>
                        <p className='text-grayThird text-[16px]'>
                          Highest Bid
                        </p>
                        <p className='text-[18px]'>{nft.bid} wETH</p>
                      </div>
                    </div>
                  </div>
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

export default Marketplace;
