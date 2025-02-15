import React from 'react';
import logo from '../assets/logo.png';
import discord from '../assets/DiscordLogo.png';
import inst from '../assets/InstagramLogo.png';
import youtube from '../assets/YoutubeLogo.png';
import twitter from '../assets/TwitterLogo.png';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className=''>
      <div className='bg-graySecond'>
        <div className='max-w-5xl mx-auto lg:px-5 sm:px-36 md:px-20 px-12 py-10'>
          <div className='grid lg:grid-cols-3 lg:grid-rows-1 grid-rows-3 lg:gap-0'>
            <div className='space-y-6'>
              <div className='flex flex-row gap-4'>
                <img src={logo} alt='' />
                <h1 className='text-[22px]'>NFT Marketplace</h1>
              </div>
              <div className='space-y-2'>
                <p className='text-grayFourth'>Join our community</p>
                <div className='flex flex-row gap-3 cursor-pointer'>
                  <img src={discord} alt='' />
                  <img src={inst} alt='' />
                  <img src={youtube} alt='' />
                  <img src={twitter} alt='' />
                </div>
              </div>
            </div>
            <div>
              <h1 className='text-[22px] mb-5'>Explore</h1>
              <div className='flex flex-col gap-4 items-start'>
                <button
                  onClick={() => {
                    navigate('/marketplace');
                  }}
                  className='text-grayFourth'
                >
                  Marketplace
                </button>
                <button
                  onClick={() => {
                    navigate('/rankings');
                  }}
                  className='text-grayFourth'
                >
                  Rankings
                </button>
                <button
                  onClick={() => {
                    navigate('/connect-wallet');
                  }}
                  className='text-grayFourth'
                >
                  Connect a wallet
                </button>
              </div>
            </div>
            <div className='pt-10 lg:pt-0'>
              <h1 className='text-[22px] mb-5'>Join our weekly digest</h1>
              <div className='space-y-5'>
                <p className='text-grayFourth'>
                  Get exclusive promotions & updates straight to your inbox.
                </p>
                <div className='flex flex-row justify-end'>
                  <input
                    type='email'
                    placeholder='Enter your email here'
                    className='text-gray rounded-xl px-5 py-3 outline-none static w-full'
                  />
                  <button
                    type='submit'
                    className='bg-purple font-semibold rounded-xl px-5 py-3 absolute'
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
