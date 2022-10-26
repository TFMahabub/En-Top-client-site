import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";
import { TbBook } from "react-icons/tb";

const CourseDetails = () => {
  const clickedCourse = useLoaderData();

  const { image_url, title, _id, rating, lectures, course_fee, course_duration, category_id } = clickedCourse;

  console.log(clickedCourse);
  return (
    <section className='container max-w-xl mx-auto'>
      <img className='w-full' src={image_url} alt="" />
      <div className='px-3'>
        <h2 className='mt-6 text-3xl font-semibold'>{title}</h2>
        <div className='flex items-center justify-between mt-4'>
          <p className='bg-lightBlue px-8 py-1 rounded-full flex items-center text-lg font-medium'><AiFillStar className='mr-1 text-darkBlue text-xl'/>{rating?.number}</p>
          <p className='bg-lightBlue px-8 py-1 rounded-full flex items-center text-lg font-medium'><TbBook className='mr-1 text-darkBlue text-2xl'/>{lectures}</p>
        </div>
        <div className='text-darkBlue text-center px-16 py-2 rounded-full bg-lightBlue mt-5 flex justify-between items-center'>
          <h2 className='text-2xl font-semibold'>{course_fee}</h2>
          <h3 className='text-lg font-medium'>{course_duration}</h3>
        </div>
      </div>
      <Link to ='/checkout'><button className='mt-6 bg-darkBlue w-full text-lg font-medium text-[#fff] py-2 rounded-full mb-16'>Get Premium Access</button></Link>
    </section>
  );
};

export default CourseDetails;