import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import foto from '../assets/NFTPage.png';
import avatarImg from '../assets/avatarPlaceholder.png';
import { motion } from 'framer-motion';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import nft1 from '../assets/NFT1.png';
import nft2 from '../assets/NFT2.png';
import nft3 from '../assets/NFT3.png';

const NFTPage = () => {
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

  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className='bg-gray'>
        <img
          src={foto}
          alt=''
          className='object-cover w-full lg:h-[420px] md:h-[220px] sm:h-[200px] h-[150px]'
        />
        <div className='max-w-5xl mx-auto  lg:px-5 sm:px-24 md:px-20 px-12 '>
          <div className='py-10 flex lg:flex-row flex-col justify-between lg:gap-20 gap-10'>
            <div className='flex flex-col gap-7'>
              <div>
                <h1 className='lg:text-[40px] text-4xl font-semibold'>
                  The Orbitians
                </h1>
                <p className='text-grayThird text-[18px] mt-2'>
                  Minted on Sep 30, 2024
                </p>
              </div>
              <div className='flex flex-col gap-2'>
                <h4 className='text-[22px] text-grayThird font-semibold'>
                  Created By
                </h4>
                <div className='flex flex-row items-center gap-4'>
                  <img
                    src={avatarImg}
                    alt=''
                    className='h-[30px] rounded-full'
                  />
                  <p className='font-semibold text-[18px]'>Orbitian</p>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <h4 className='text-[22px] text-grayThird font-semibold'>
                  Description
                </h4>

                <p className=' text-[18px]'>
                  The Orbitians is a collection of 10,000 unique NFTs on the
                  Ethereum blockchain. <br></br>
                  <br></br>
                  There are all sorts of beings in the NFT Universe. The most
                  advanced and friendly of the bunch are Orbitians.<br></br>
                  <br></br>
                  They live in a metal space machines, high up in the sky and
                  only have one foot on Earth. These Orbitians are a peaceful
                  race, but they have been at war with a group of invaders for
                  many generations. The invaders are called Upside-Downs,
                  because of their inverted bodies that live on the ground, yet
                  do not know any other way to be. Upside-Downs believe that
                  they will be able to win this war if they could only get an
                  eye into Orbitian territory, so they've taken to make human
                  beings their target.
                </p>
              </div>
              <div className='flex flex-col gap-3'>
                <h4 className='text-[22px] text-grayThird font-semibold'>
                  Tags
                </h4>
                <div className='flex sm:flex-row flex-col gap-4'>
                  <p className='uppercase bg-graySecond rounded-2xl px-7 py-2 w-min'>
                    Animation
                  </p>
                  <p className='uppercase bg-graySecond rounded-2xl px-7 py-2 w-min'>
                    Illustration
                  </p>
                  <p className='uppercase bg-graySecond rounded-2xl px-7 py-2 w-min'>
                    Moon
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className='bg-graySecond/70  px-8 py-7 rounded-2xl space-y-3 lg:w-[320px] w-[260px]'>
                <p>Auction ends in:</p>
                <p className='lg:text-5xl text-4xl font-semibold'>
                  12 : 43 : 45
                </p>
                <div className='flex flex-row gap-4 justify-between pb-3'>
                  <p>Hours</p>
                  <p>Minutes</p>
                  <p>Seconds</p>
                </div>
                <motion.button
                  whileHover={{ scale: 0.95 }}
                  whileTap={{ scale: 1.0 }}
                  type='button'
                  className='w-full py-3 bg-purple text-white font-bold rounded-lg'
                >
                  Place Bid
                </motion.button>
              </div>
            </div>
          </div>

          <div className='mt-10'>
            <div className='flex flex-row justify-between items-center'>
              <h1 className='lg:text-[34px] text-3xl font-semibold'>
                More from this artist
              </h1>
              <button
                onClick={() => {
                  navigate('/artist-page');
                }}
                type='submit'
                className='hidden py-3 px-10 border border-purple text-white font-semibold rounded-2xl md:flex flex-row items-center gap-5 hover:bg-graySecond'
              >
                <FaArrowRightLong />
                Go To Artist Page
              </button>
            </div>

            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 sm:gap-5 lg:gap-8 pt-10 pb-10 lg:pb-20'>
              {nfts.map((nft, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 0.9 }}
                  whileTap={{ scale: 1.0 }}
                  onClick={() => {
                    navigate('/nft-page');
                  }}
                  className='bg-graySecond rounded-2xl cursor-pointer overflow-hidden'
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

export default NFTPage;
