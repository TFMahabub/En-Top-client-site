import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer-Section/Footer';
import Navbar from './Header-Section/Navbar';

const MainOutlet = () => {
  return (
    <div className='font-Montserrat px-3 md:px-0'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainOutlet;