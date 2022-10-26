import React from 'react';
import { AiOutlineClockCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';

const SingleCard = ({course}) => {
  const { image_url, title, _id, rating, lectures, course_fee, course_duration, category_id } = course;




  return (
    <div 
    className='border border-darkBlue p-2 rounded-lg'
    >
      <img 
      src={image_url}
      className ='rounded-md'
      alt="" />
      <div className='px-3'>
        <h2 className='text-lg font-medium text-black mt-3'>{title}</h2>
        <div className='mt-2 flex justify-between items-center'>
          <p className='text-md font-normal flex items-center'><AiOutlineClockCircle className='mr-1'/>{course_duration}</p>
          <p className='text-md font-normal'>{lectures}</p>
        </div>
      </div>
      <Link to ={`/course/${_id}`}>
        <button
        className='w-full mt-3 bg-darkBlue hover:bg-black rounded-md py-2 text-[#fff]'
        >
        Details
        </button>
      </Link>
    </div>
  );
};

export default SingleCard;