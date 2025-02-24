import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import foto from '../assets/CreateAccount.png';

const ConnectWallet = () => {
  return (
    <div className='flex flex-col min-h-screen bg-gray'>
      <Navbar />

      <div className='flex flex-1 lg:flex-row md:flex-row flex-col'>
        <img
          src={foto}
          alt=''
          className='lg:w-1/2 md:w-1/2 w-full lg:h-[70vh] md:h-[70vh] h-[40vh] object-cover overflow-hidden '
        />

        <div className='lg:w-1/2 md:w-1/2 w-full flex items-center justify-center mb-5'>
          <div className='max-w-md w-full text-center p-6 rounded-lg '>
            <h1 className='lg:text-4xl md:text-4xl text-3xl font-semibold mb-4'>
              Connect wallet
            </h1>
            <p className='lg:text-lg md:text-lg text-base mb-6'>
              Choose a wallet you want to connect. There are several wallet
              providers.
            </p>

            <form className='space-y-4 text-black'>
              <button
                type='submit'
                className='w-full py-3 px-10 border border-purple text-white lg:text-2xl md:text-2xl text-xl font-semibold rounded-xl flex flex-row items-center gap-5 hover:bg-graySecond'
              >
                <img
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/2048px-MetaMask_Fox.svg.png'
                  alt=''
                  className='w-[50px]'
                />
                Metamask
              </button>
              <button
                type='submit'
                className='w-full py-3 px-10 border border-purple text-white lg:text-2xl md:text-2xl text-xl font-semibold rounded-xl flex flex-row items-center gap-5 hover:bg-graySecond'
              >
                <img
                  src='https://repository-images.githubusercontent.com/204001588/a5169900-c66c-11e9-8592-33c7334dfd6d'
                  alt=''
                  className='w-[50px]'
                />
                Wallet Connect
              </button>
              <button
                type='submit'
                className='w-full py-3 px-10 border border-purple text-white lg:text-2xl md:text-2xl text-xl font-semibold rounded-xl flex flex-row items-center gap-5 hover:bg-graySecond'
              >
                <img
                  src='https://brandlogo.org/wp-content/uploads/2024/04/Coinbase-Wallet-Logo.png.webp'
                  alt=''
                  className='w-[50px]'
                />
                Coinbase
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ConnectWallet;
