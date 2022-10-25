import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png'
import { FaBeer, FaHamburger } from 'react-icons/fa';
import HamburgerMenu from '../../img/HamburgerMenu.svg'

const Navbar = () => {
  return (
    <nav className='absolute z-10 w-full'>
      <div 
      className='flex items-center justify-between container mx-auto
                border-y border-darkBlue py-3 px-4 md:px-0  my-4'
      >
        <div>
          <img
          className='w-40'
          src={logo} alt="" />
        </div>
        <div 
        className='text-lg font-Montserrat font-medium space-x-6 text-darkBlue
                    hidden md:block'
        >
          <Link className='hover:border-b-2 pb-1' to= '/'>Home</Link>
          <Link className='hover:border-b-2 pb-1' to= '/courses'>Courses</Link>
          <Link className='hover:border-b-2 pb-1' to= '/faq'>FAQ</Link>
          <Link className='hover:border-b-2 pb-1' to= '/Blog'>Blog</Link>
        </div>
        <div className='md:hidden'>
        <img 
        className='w-10'
        src={HamburgerMenu} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;