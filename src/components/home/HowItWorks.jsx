import React from 'react';
import { motion } from 'framer-motion';
import hiw1 from '../../assets/HowItWorks1.png';
import hiw2 from '../../assets/HowItWorks2.png';
import hiw3 from '../../assets/HowItWorks3.png';

const HowItWorks = () => {
  const info = [
    {
      img: hiw1,
      name: 'Setup Your wallet',
      description:
        'Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.',
    },
    {
      img: hiw2,
      name: 'Create Collection',
      description:
        'Upload your work and setup your collection. Add a description, social links and floor price.',
    },
    {
      img: hiw3,
      name: 'Start Earning',
      description:
        'Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.',
    },
  ];

  return (
    <div className='max-w-5xl mx-auto lg:pt-20 pt-10 lg:pb-40 pb-20 lg:px-5 sm:px-36 md:px-20 px-12'>
      <div className='flex flex-col'>
        <h1 className='lg:text-3xl text-2xl font-semibold '>How it works</h1>
        <p className='mt-3 lg:text-xl'>Find out how to get started</p>
      </div>
      <div className='mt-10  grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 sm:gap-5 lg:gap-8'>
        {info.map((info, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 0.9 }}
            className=' bg-graySecond flex flex-col items-center text-center rounded-2xl overflow-hidden '
          >
            <img
              className='object-center object-cover lg:w-[250px] lg:h-[250px] md:w-[230px] md:h-[230px] sm:w-[170px] sm:h-[170px] w-[200px] h-[200px]'
              src={info.img}
              alt=''
            />
            <div className='mx-8 my-4 space-y-3'>
              <h1 className='text-xl font-semibold'>{info.name}</h1>
              <p>{info.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
