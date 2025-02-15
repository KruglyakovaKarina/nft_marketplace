import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import art from '../../assets/Art.png';
import сollectibles from '../../assets/Collectibles.png';
import music from '../../assets/Music.png';
import photography from '../../assets/Photography.png';
import video from '../../assets/Video.png';
import utility from '../../assets/Utility.png';
import sport from '../../assets/Sport.png';
import worlds from '../../assets/VirtualWorlds.png';
import brush from '../../assets/Brush.svg';
import palette from '../../assets/Palette.svg';
import musicIcon from '../../assets/Music.svg';
import camera from '../../assets/Camera.svg';
import videoIcon from '../../assets/Video.svg';
import magic from '../../assets/Magic.svg';
import basketball from '../../assets/Basketball.svg';
import planet from '../../assets/Planet.svg';

const Categories = () => {
  const navigate = useNavigate();

  const categories = [
    {
      name: 'Art',
      img: art,
      icon: brush,
    },
    {
      name: 'Collectibles',
      img: сollectibles,
      icon: palette,
    },
    {
      name: 'Music',
      img: music,
      icon: musicIcon,
    },
    {
      name: 'Photography',
      img: photography,
      icon: camera,
    },
    {
      name: 'Video',
      img: video,
      icon: videoIcon,
    },
    {
      name: 'Utility',
      img: utility,
      icon: magic,
    },
    {
      name: 'Sport',
      img: sport,
      icon: basketball,
    },
    {
      name: 'Virtual Worlds',
      img: worlds,
      icon: planet,
    },
  ];

  return (
    <div className='max-w-5xl mx-auto lg:py-20 py-10 lg:px-5 sm:px-36 md:px-20 px-12'>
      <div>
        <h1 className='lg:text-3xl text-2xl font-semibold cursor-pointer'>
          Browse Categories
        </h1>
        <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-2 sm:gap-5 lg:gap-8 mt-10'>
          {categories.map((category, index) => (
            <motion.div
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 1.0 }}
              className='overflow-hidden rounded-2xl relative cursor-pointer'
              onClick={() => {
                navigate('/marketplace');
              }}
              key={index}
            >
              <img
                src={category.icon}
                alt=''
                className='absolute  my-auto lg:w-24 md:w-16 sm:w-16 w-12 blur-none z-20 lg:top-[40%] md:top-[40%] sm:top-[40%] top-[35%] left-[50%] mr-[-50%] translate-y-[-50%] translate-x-[-50%]'
              />
              <img src={category.img} alt='' className='blur-md z-10' />
              <div className='bg-graySecond py-4 blur-none min-h-full'>
                <p className='text-xl break-words font-semibold px-5'>
                  {category.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
