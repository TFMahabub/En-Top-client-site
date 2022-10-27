import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../../../img/Home-page-illustration.png'

const Home = () => {
  return (
    <section
    className='md:h-[520px]'
      >
      <div 
      className='flex flex-col-reverse md:flex-row px-4 md:px-13 lg:px-20
                  items-center justify-evenly md:justify-between container mx-auto h-[520px]'
      >
        <div className='md:w-1/2 text-center md:text-left'>
          <h3 
          className='text-lg md:text-2xl font-Montserrat font-semibold text-black'
          >
          Start your favourite course
          </h3>
          <h2
          className='text-xl md:text-4xl font-Montserrat font-bold text-darkBlue mt-4 md:mt-0 tracking-wide'
          >
          Now learning from anywhere, and build your bright career.
          </h2>
          <div className='mt-5'>
          <Link 
          to = '/courses'
          className=' bg-darkBlue px-6 py-3 text-[#fff] rounded-lg text-lg font-medium'
          >
          Start A Course
          </Link>
          </div>
        </div>
        <div>
          <img 
          className='w-[370px]'
          src={bannerImage} alt="" 
          />
        </div>
      </div>
    </section>
  );
};

export default Home;