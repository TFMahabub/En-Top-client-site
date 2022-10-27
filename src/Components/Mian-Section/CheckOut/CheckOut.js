import { HiOutlineUserCircle } from "react-icons/hi";
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/UserContext';
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const selectedCourse = useLoaderData();
  const { _id, title, course_fee, course_duration } = selectedCourse;
  const { displayName, email, emailVerified, photoURL } = user;

  return (
    <section className="h-[360px]">
      <div className='md:flex justify-evenly p-6 container max-w-lg mt-3 mx-auto border border-darkBlue rounded-lg'>
        {
          user?.photoURL?
          <img className='rounded-full h-28 w-28' src={photoURL} alt="" />
          :
          <HiOutlineUserCircle className="text-[120px] text-darkBlue"/>
        }
        <div>
          <h2 className=' text-lg font-semibold text-darkBlue'>Name: {displayName}</h2>
          <p className='mt-1 text-sm font-medium'>Email: {email}</p>
          {
            emailVerified?
              <p className='mt-1 text-sm font-medium'>Email-Varification: <span className='text-darkBlue font-medium'>Varified</span></p>
              :
              <p className='mt-1 text-sm font-medium'>Email-Varification: <span className='font-medium text-[#dd0808]'>Not-Varified</span></p>
          }
          <div className="mt-6 space-y-1">
            <h2 className="text-xl font-semibold text-darkBlue">Selected Course:</h2>
            <h3 className="text-lg font-medium">Course Id: <span className="text-darkBlue">{_id}</span></h3>
            <h3 className="text-lg font-medium">Course Title: <span className="text-darkBlue">{title.slice(0, 16)+'..'}</span></h3>
            <h3 className="text-lg font-medium">Course fee: <span className="text-darkBlue">{course_fee}</span></h3>
            <h3 className="text-lg font-medium">Course Duration: <span className="text-darkBlue">{course_duration}</span></h3>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default CheckOut;