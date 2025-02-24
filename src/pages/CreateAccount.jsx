import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import foto from '../assets/CreateAccount.png';

const CreateAccount = () => {
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
              Create Account
            </h1>
            <p className='lg:text-lg md:text-lg text-base mb-6'>
              Welcome! Enter Your Details And Start Creating, Collecting, And
              Selling NFTs.
            </p>

            <form className='space-y-4 text-black'>
              <input
                type='text'
                placeholder='Username'
                className='w-full p-3 rounded-lg outline-none'
              />
              <input
                type='email'
                placeholder='Email Address'
                className='w-full p-3 rounded-lg outline-none'
              />
              <input
                type='password'
                placeholder='Password'
                className='w-full p-3 rounded-lg outline-none'
              />
              <input
                type='password'
                placeholder='Confirm Password'
                className='w-full p-3 rounded-lg outline-none'
              />
              <button
                type='submit'
                className='w-full py-3 bg-purple text-white font-bold rounded-lg'
              >
                Create account
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CreateAccount;
