import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png'
import { BiUserCircle } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import HamburgerMenu from '../../img/HamburgerMenu.svg'

const Navbar = () => {
  return (
    <nav className='relative w-full'>
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
        className='text-lg font-medium space-x-4 
                    hidden md:block'
        >
          <Link className='hover:border-b-2 pb-1 text-darkBlue' to= '/'>Home</Link>
          <Link className='hover:border-b-2 pb-1 text-darkBlue' to= '/courses'>Courses</Link>
          <Link className='hover:border-b-2 pb-1 text-darkBlue' to= '/faq'>FAQ</Link>
          <Link className='hover:border-b-2 pb-1 text-darkBlue' to= '/blog'>Blog</Link>
          {/* <Link className='bg-darkBlue px-6 py-2 text-[#fff] rounded-lg' to= '/login'>Login</Link>
          <Link className='bg-darkBlue px-6 py-2 text-[#fff] rounded-lg' to= '/login'>Sign out</Link> */}
          < BiUserCircle  className='text-[40px] inline cursor-pointer text-darkBlue'/>
        </div>
        <div className='md:hidden'>
        <GiHamburgerMenu className='text-4xl text-black'/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;