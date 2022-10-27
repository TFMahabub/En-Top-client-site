import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";
import { TbBook } from "react-icons/tb";
import Pdf from "react-to-pdf";


const CourseDetails = () => {
  const clickedCourse = useLoaderData();

  const { image_url, title, rating, lectures, course_fee, course_duration } = clickedCourse;

  const ref = React.createRef();
  

  return (
    <section className=''>
      <div ref={ref} className='container max-w-lg mx-auto'>
        <img className='w-full' src={image_url} alt="" />
        <div className=''>
          <h2 className='mt-6 text-3xl font-semibold'>{title}</h2>
          <div className='flex items-center justify-between mt-4'>
            <p className='bg-lightBlue px-8 py-1 rounded-lg flex items-center text-lg font-medium'><AiFillStar className='mr-1 text-darkBlue text-xl'/>{rating?.number}</p>
            <p className='bg-lightBlue px-8 py-1 rounded-lg flex items-center text-lg font-medium'><TbBook className='mr-1 text-darkBlue text-2xl'/>{lectures}</p>
          </div>
          <div className='text-darkBlue text-center px-16 py-2 rounded-lg bg-lightBlue mt-5 flex justify-between items-center'>
            <h2 className='text-2xl font-semibold'>{course_fee}</h2>
            <h3 className='text-lg font-medium'>{course_duration}</h3>
          </div>
        </div>
        <Pdf targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) => <button onClick={toPdf} className='text-darkBlue text-center px-16 w-full py-2 rounded-lg bg-lightBlue mt-5 text-lg font-medium'>
              Download PDF</button>}
        </Pdf>
        <Link to ='/checkout'><button className='mt-6 bg-darkBlue w-full text-lg font-medium text-[#fff] py-2 rounded-lg mb-16'>Get Premium Access</button></Link>
      </div>
    </section>
  );
};

export default CourseDetails;