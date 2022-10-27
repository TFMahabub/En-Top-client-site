import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Header-Section/Navbar';

const MainOutlet = () => {
  return (
    <div className='font-Montserrat px-3 md:px-0'>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainOutlet;