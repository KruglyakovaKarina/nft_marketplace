import React from 'react';
import avatarImg from '../../assets/avatarPlaceholder.png';
import animals1 from '../../assets/Animals1.png';
import animals2 from '../../assets/Animals2.png';
import animals3 from '../../assets/Animals3.png';
import mushrooms1 from '../../assets/Mushrooms1.png';
import mushrooms2 from '../../assets/Mushrooms2.png';
import mushrooms3 from '../../assets/Mushrooms3.png';
import machines1 from '../../assets/Machines1.png';
import machines2 from '../../assets/Machines2.png';
import machines3 from '../../assets/Machines3.png';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Trending = () => {
  const navigate = useNavigate();

  return (
    <div className='max-w-5xl mx-auto lg:py-20 py-10 lg:px-5 sm:px-36 md:px-20 px-12 space-y-10'>
      <div>
        <h1 className='lg:text-3xl text-2xl font-semibold'>
          Trending Collection
        </h1>
        <p className='mt-3 lg:text-xl'>
          Checkout our weekly updated trending collection.
        </p>
      </div>
      <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
        <div className='space-y-3'>
          <motion.div
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 1.0 }}
            onClick={() => {
              navigate('/nft-page');
            }}
          >
            <img src={animals1} alt='' className='rounded-2xl cursor-pointer' />
          </motion.div>
          <div className='grid grid-cols-3 gap-3 max-w-fit'>
            <motion.img
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 1.0 }}
              src={animals2}
              alt=''
              className='rounded-2xl cursor-pointer'
              onClick={() => {
                navigate('/nft-page');
              }}
            />
            <motion.img
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 1.0 }}
              src={animals3}
              alt=''
              className='rounded-2xl cursor-pointer'
              onClick={() => {
                navigate('/nft-page');
              }}
            />
            <motion.div
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 1.0 }}
              onClick={() => {
                navigate('/marketplace');
              }}
              className='bg-purple rounded-2xl flex items-center justify-center text-lg cursor-pointer'
            >
              <p>1025+</p>
            </motion.div>
          </div>
          <div>
            <h3 className='font-semibold lg:text-2xl text-lg'>DSGN Animals</h3>
            <div
              onClick={() => {
                navigate('/artist-page');
              }}
              className='inline-flex items-center gap-3 mt-1 cursor-pointer'
            >
              <img src={avatarImg} alt='' className='rounded-full w-8' />
              <p>MrFox</p>
            </div>
          </div>
        </div>
        <div className='space-y-3'>
          <div>
            <motion.img
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 1.0 }}
              src={mushrooms1}
              alt=''
              className='rounded-2xl cursor-pointer'
              onClick={() => {
                navigate('/nft-page');
              }}
            />
          </div>
          <div className='grid grid-cols-3 gap-3 max-w-fit'>
            <motion.img
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 1.0 }}
              src={mushrooms2}
              alt=''
              className='rounded-2xl cursor-pointer'
              onClick={() => {
                navigate('/nft-page');
              }}
            />
            <motion.img
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 1.0 }}
              src={mushrooms3}
              alt=''
              className='rounded-2xl cursor-pointer'
              onClick={() => {
                navigate('/nft-page');
              }}
            />
            <motion.div
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 1.0 }}
              onClick={() => {
                navigate('/marketplace');
              }}
              className='bg-purple rounded-2xl flex items-center justify-center text-lg cursor-pointer'
            >
              <p>1025+</p>
            </motion.div>
          </div>
          <div>
            <h3 className='font-semibold lg:text-2xl text-lg'>
              Magic Mushrooms
            </h3>
            <div
              onClick={() => {
                navigate('/artist-page');
              }}
              className='inline-flex items-center gap-3 mt-1 cursor-pointer'
            >
              <img src={avatarImg} alt='' className='rounded-full w-8' />
              <p>Shroomie</p>
            </div>
          </div>
        </div>
        <div className='space-y-3'>
          <div>
            <motion.img
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 1.0 }}
              src={machines1}
              alt=''
              className='rounded-2xl cursor-pointer'
              onClick={() => {
                navigate('/nft-page');
              }}
            />
          </div>
          <div className='grid grid-cols-3 gap-3 max-w-fit'>
            <motion.img
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 1.0 }}
              src={machines2}
              alt=''
              className='rounded-2xl cursor-pointer'
              onClick={() => {
                navigate('/nft-page');
              }}
            />
            <motion.img
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 1.0 }}
              src={machines3}
              alt=''
              className='rounded-2xl cursor-pointer'
              onClick={() => {
                navigate('/nft-page');
              }}
            />
            <motion.div
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 1.0 }}
              onClick={() => {
                navigate('/marketplace');
              }}
              className='bg-purple rounded-2xl flex items-center justify-center text-lg cursor-pointer'
            >
              <p>1025+</p>
            </motion.div>
          </div>
          <div>
            <h3 className='font-semibold lg:text-2xl text-lg'>
              Disco Machines
            </h3>
            <div
              onClick={() => {
                navigate('/artist-page');
              }}
              className='inline-flex items-center gap-3 mt-1 cursor-pointer'
            >
              <img src={avatarImg} alt='' className='rounded-full w-8' />
              <p>BeKind2Robots</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
