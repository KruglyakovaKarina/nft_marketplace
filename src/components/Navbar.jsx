import { useState } from 'react';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { GoPerson } from 'react-icons/go';
import { HiOutlineXMark } from 'react-icons/hi2';
import { LuMenu } from 'react-icons/lu';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate();

  return (
    <div className=''>
      <div className='m-auto flex items-center'>
        <nav className='flex items-center text-lg font-semibold my-5 mx-10 justify-between w-[100vw]'>
          <a
            href='/'
            className='text-xl font-semibold flex items-center text-blue space-x-3'
          >
            <img src={logo} alt='' className='w-8' />
            <span>NFT Marketplace</span>
          </a>

          <ul className='md:flex space-x-12 hidden'>
            <li>
              <motion.button
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.0 }}
                onClick={() => {
                  navigate('/marketplace');
                }}
              >
                Marketplace
              </motion.button>
            </li>
            <li>
              <motion.button
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.0 }}
                onClick={() => {
                  navigate('/rankings');
                }}
              >
                Rankings
              </motion.button>
            </li>
            <li>
              <motion.button
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.0 }}
                onClick={() => {
                  navigate('/connect-wallet');
                }}
              >
                Connect a wallet
              </motion.button>
            </li>
          </ul>

          <div className='hidden md:flex space-x-12 items-center'>
            <motion.button
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1.0 }}
              onClick={() => {
                navigate('/create-account');
              }}
              className='bg-purple rounded-2xl w-36 py-4 flex items-center justify-center gap-3'
            >
              <GoPerson className='bg-purple text-2xl' />
              Sign Up
            </motion.button>
          </div>

          <div className='md:hidden mt-2'>
            <button onClick={toggleMenu} className='text-2xl'>
              {isMenuOpen ? (
                <HiOutlineXMark className='w-6 h-6 text-blue' />
              ) : (
                <LuMenu className='w-6 h-6 text-blue' />
              )}
            </button>
          </div>
        </nav>
      </div>
      <div className={`px-10 pt-2 pb-5 text-xl ${isMenuOpen ? '' : 'hidden'}`}>
        <ul className='space-y-3'>
          <li>
            <button
              onClick={() => {
                navigate('/marketplace');
              }}
            >
              Marketplace
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate('/rankings');
              }}
            >
              Rankings
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate('/connect-wallet');
              }}
            >
              Connect a wallet
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate('/create-account');
              }}
            >
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
