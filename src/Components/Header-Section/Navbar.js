import React from 'react';
import { Link, Navigate, } from 'react-router-dom';
import logo from '../../img/logo.png'
import { MdLightMode, MdOutlineLightMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useContext } from 'react';
import { AuthContext } from '../Contexts/UserContext';
import { toast } from 'react-toastify';
import { useState } from 'react';

const Navbar = () => {
  const [darkMood, setDarkMood] = useState(false)
  const { user, signOutUser } =useContext(AuthContext)


  const handleSignOut = () =>{
    signOutUser()
    .then(() =>{
      toast.success('Sign Out Successfully!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        <Navigate to ='/login' />
      })
    .catch(error =>{
      toast.error('User sign out failed!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
     })
  }


  return (
    <nav className='relative w-full'>
      <div 
      className='flex items-center justify-between container mx-auto
                border-y border-darkBlue py-3 px-4 md:px-0  my-4'
      >
        <Link to ='/'>
          <img
          className='w-28 md:w-40'
          src={logo} alt="" />
        </Link>


        <div 
        className={`text-md font-medium space-x-4 
                   hidden md:block`}
        >
          <Link className='hover:border-b-2 pb-1 text-darkBlue font-semibold ' to= '/'>Home</Link>
          <Link className='hover:border-b-2 pb-1 text-darkBlue font-semibold ' to= '/courses'>Courses</Link>
          <Link className='hover:border-b-2 pb-1 text-darkBlue font-semibold ' to= '/faq'>FAQ</Link>
          <Link className='hover:border-b-2 pb-1 text-darkBlue font-semibold ' to= '/blog'>Blog</Link>
          {user?.displayName && <h4 className='inline font-semibold text-black'>{user.displayName}</h4>}
          

          
          {user?.photoURL && <img className='inline w-10 rounded-full' title={user?.displayName} src={user.photoURL} alt="" />}
          
          {
            darkMood?
            <MdLightMode onClick={() => setDarkMood(!darkMood)} className= 'inline text-2xl text-darkBlue cursor-pointer'/>
            :
            <MdOutlineLightMode onClick={() => setDarkMood(!darkMood)} className= 'inline text-2xl text-darkBlue cursor-pointer'/>
          }

          {
            user?.uid?
            <button
            onClick={handleSignOut} 
            className='bg-darkBlue px-4 py-2 text-[#fff] rounded-lg' >Sign out</button>
            :
            <Link to= '/login'><button className='bg-darkBlue px-4 py-2 text-[#fff] rounded-lg border-none'>Login</button></Link>
          }
        </div>
        <div className='md:hidden'>
        <GiHamburgerMenu className='text-4xl text-black'/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;