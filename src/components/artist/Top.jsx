import React from 'react';
import artistBg from '../../assets/ArtistBg.png';
import artistImg from '../../assets/avatarPlaceholder.png';
import discord from '../../assets/DiscordLogo.png';
import inst from '../../assets/InstagramLogo.png';
import youtube from '../../assets/YoutubeLogo.png';
import twitter from '../../assets/TwitterLogo.png';
import { motion } from 'framer-motion';
import { IoCopyOutline } from 'react-icons/io5';
import { FaPlus } from 'react-icons/fa6';

const Top = () => {
  return (
    <div>
      <div className='w-full lg:h-[320px] md:h-[220px] sm:h-[200px] h-[150px] bg-gradient-to-b from-transparent to-purple z-10 absolute'></div>
      <img
        src={artistBg}
        alt=''
        className='object-cover w-full lg:h-[320px] md:h-[220px] sm:h-[200px] h-[150px] z-20'
      />
      <div className='bg-gray static border-b border-graySecond'>
        <div className='max-w-5xl mx-auto  lg:px-5 sm:px-24 md:px-20 px-12'>
          <div>
            <div className='relative'>
              <img
                src={artistImg}
                alt=''
                className='absolute top-[-50px] left-0 h-[100px] w-[100px] z-10 rounded-3xl border-black border-2 '
              />
              <div className='pt-24 pb-10 flex lg:flex-row md:flex-row flex-col gap-10 justify-between'>
                <div className='flex flex-col gap-10'>
                  <h1 className='lg:text-[50px] text-4xl font-semibold  '>
                    Animakid
                  </h1>
                  <div className='flex flex-row justify-between lg:space-x-24'>
                    <div>
                      <h4 className='text-[24px] font-semibold'>250k+</h4>
                      <p className='text-[18px]'>Volume</p>
                    </div>
                    <div>
                      <h4 className='text-[24px] font-semibold'>50+</h4>
                      <p className='text-[18px]'>NFTs Sold</p>
                    </div>
                    <div>
                      <h4 className='text-[24px] font-semibold'>3000+</h4>
                      <p className='text-[18px]'>Followers</p>
                    </div>
                  </div>
                  <div className='space-y-2'>
                    <h4 className='text-grayThird text-[20px]'>Bio</h4>
                    <p className='text-[18px]'>
                      The internet's friendliest designer kid.
                    </p>
                  </div>
                  <div className='space-y-2'>
                    <h4 className='text-grayThird text-[20px]'>Links</h4>
                    <div className='flex flex-row gap-2 cursor-pointer'>
                      <img src={discord} alt='' />
                      <img src={inst} alt='' />
                      <img src={youtube} alt='' />
                      <img src={twitter} alt='' />
                    </div>
                  </div>
                </div>
                <div className='flex lg:flex-row gap-5 md:flex-col'>
                  <motion.button
                    whileHover={{ scale: 0.9 }}
                    whileTap={{ scale: 1.0 }}
                    onClick={() => {
                      navigator.clipboard.writeText('0xc0E3...B79C');
                    }}
                    className='bg-purple rounded-2xl px-5 py-4 flex items-center justify-center gap-3 h-min'
                  >
                    <IoCopyOutline className=' text-xl' />
                    0xE3...B9C
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 0.9 }}
                    whileTap={{ scale: 1.0 }}
                    onClick={() => {}}
                    className='border-purple border rounded-2xl px-5 py-4 flex items-center justify-center gap-3 h-min'
                  >
                    <FaPlus className='text-xl' />
                    Follow
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
