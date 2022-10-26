import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card-Section/Card';
import SIdebar from './SIdebar';

const Course = () => {


  return (
    <div className='container mx-auto'>
      <div className='grid grid-rows md:grid-cols-3 gap-6 md:gap-14'>
        <div className='order-2 md:col-span-2'>
          <Card></Card>
        </div>
        <div className='border border-darkBlue order-1 md:order-3'>
          <SIdebar></SIdebar>
        </div>
      </div>
    </div>
  );
};

export default Course;