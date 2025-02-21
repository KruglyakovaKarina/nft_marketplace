import React, { useState } from 'react';
import { motion } from 'framer-motion';
import avatarImg from '../../assets/avatarPlaceholder.png';
import nft1 from '../../assets/NFT1.png';
import nft2 from '../../assets/NFT2.png';
import nft3 from '../../assets/NFT3.png';
import nft4 from '../../assets/NFT4.png';
import nft5 from '../../assets/NFT5.png';
import nft6 from '../../assets/NFT6.png';
import nft7 from '../../assets/NFT7.png';
import nft8 from '../../assets/NFT8.png';
import nft9 from '../../assets/NFT9.png';
import { useNavigate } from 'react-router-dom';

const Bottom = () => {
  const nfts = [
    {
      img: nft1,
      name: 'Distant Galaxy',
      author: 'MoonDancer',
      price: 1.67,
      bid: 0.25,
    },
    {
      img: nft2,
      name: 'Life On Edena',
      author: 'NebulaKid',
      price: 1.25,
      bid: 0.85,
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

  const [activeArtistCollection, setActiveArtistCollection] =
    useState('created');

  const navigate = useNavigate();

  return (
    <div className='static border-b border-graySecond'>
      <div className='bg-gray border-b-2 border-gray'>
        <div className=' max-w-5xl mx-auto lg:px-5 sm:px-24 md:px-20 px-12 flex lg:flex-row flex-col lg:justify-between justify-center items-center'>
          <button
            onClick={() => setActiveArtistCollection('created')}
            className={`flex flex-row gap-3 text-[20px] font-semibold items-center px-24 py-3 ${
              activeArtistCollection === 'created'
                ? 'border-b-grayThird border-b-2'
                : ''
            }`}
          >
            Created{' '}
            <div className='bg-grayThird rounded-2xl px-2 text-[16px] font-normal'>
              302
            </div>
          </button>
          <button
            onClick={() => setActiveArtistCollection('owned')}
            className={`flex flex-row gap-3 text-[20px] font-semibold items-center px-24 py-3 ${
              activeArtistCollection === 'owned'
                ? 'border-b-grayThird border-b-2'
                : ''
            }`}
          >
            Owned{' '}
            <div className='bg-graySecond rounded-2xl px-2 text-[16px] font-normal'>
              67
            </div>
          </button>
          <button
            onClick={() => setActiveArtistCollection('collection')}
            className={`flex flex-row gap-3 text-[20px] font-semibold items-center px-24 py-3 ${
              activeArtistCollection === 'collection'
                ? 'border-b-grayThird border-b-2'
                : ''
            }`}
          >
            Collection{' '}
            <div className='bg-graySecond rounded-2xl px-2 text-[16px] font-normal'>
              4
            </div>
          </button>
        </div>

        <div className='bg-graySecond'>
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
                      <p className='text-grayThird text-[16px]'>Highest Bid</p>
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
  );
};

export default Bottom;
