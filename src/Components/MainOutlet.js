import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Header-Section/Navbar';

const MainOutlet = () => {
  return (
    <div className='relative'>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainOutlet;