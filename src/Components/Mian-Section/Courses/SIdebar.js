import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SidebarSIngle from './SidebarSIngle';

const SIdebar = () => {
  const coursesData = useLoaderData()

  return (
    <div className='p-4'>
      <h2 className='text-xl pb-1 mb-6 font-semibold border-b-2 border-darkBlue'>Courses</h2>
      {
        coursesData.map(cd => <SidebarSIngle key={cd._id} cd = {cd}></SidebarSIngle>)
      }
    </div>
  );
};

export default SIdebar;<h2>sidebar</h2>