import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCard from './SingleCard';

const Card = () => {
  const courses = useLoaderData()


  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      {
        courses.map(course => 
        <SingleCard 
          key={course._id}
          course = {course}
          />)
      }
    </div>
  );
};

export default Card;