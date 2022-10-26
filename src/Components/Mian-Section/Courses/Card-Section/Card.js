import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCard from './SingleCard';

const Card = () => {
  const courses = useLoaderData()
  console.log(courses);


  return (
    <div className='grid grid-cols-2 gap-6'>
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