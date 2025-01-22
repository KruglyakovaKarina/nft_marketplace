import React from 'react';
import { useNavigate } from 'react-router-dom';
import eye from '../assets/Eye.svg';
import { motion } from 'framer-motion';
import avatarImg from '../assets/avatarPlaceholder.png';
import nft1 from '../assets/NFT1.png';
import nft2 from '../assets/NFT2.png';
import nft3 from '../assets/NFT3.png';

const DiscoverMore = () => {
  const navigate = useNavigate();

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
  ];

  return (
    <div className='max-w-5xl mx-auto lg:py-20 py-10 lg:px-5 sm:px-36 md:px-20 px-12'>
      <div className='flex flex-row justify-between items-end'>
        <div className='mr-5'>
          <h1 className='lg:text-3xl text-2xl font-semibold lg:max-w-max md:max-w-max max-w-[150px]'>
            Discover More NFTs
          </h1>
          <p className='mt-3 lg:text-xl lg:max-w-max md:max-w-max max-w-[150px]'>
            Explore new trending NFTs
          </p>
        </div>
        <motion.button
          onClick={() => {
            navigate('/nft-page');
          }}
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 1.0 }}
          className='text-white border-2 border-purple rounded-2xl max-w-fit font-semibold lg:px-12 md:px-12 px-3 py-4 flex flex-row gap-4 items-center'
        >
          <img src={eye} alt='' className='w-6' />
          See NFT
        </motion.button>
      </div>
      <div className='mt-10 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 sm:gap-5 lg:gap-8'>
        {nfts.map((nft, index) => (
          <motion.div
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 1.0 }}
            onClick={() => {
              navigate('/nft-page');
            }}
            className=' bg-graySecond rounded-2xl cursor-pointer overflow-hidden'
          >
            <img className='object-center object-cover ' src={nft.img} alt='' />
            <div className='mx-5 my-4 space-y-3'>
              <h3 className='text-xl font-semibold'>{nft.name}</h3>
              <div className='inline-flex items-center gap-4'>
                <img src={avatarImg} alt='' className='w-[30px] rounded-full' />
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
  );
};

export default DiscoverMore;
