import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import logo from '../../img/logo.png'
import { BiUserCircle } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useContext } from 'react';
import { AuthContext } from '../Contexts/UserContext';
import { toast } from 'react-toastify';

const Navbar = () => {

  const { user, signOutUser } =useContext(AuthContext)

  console.log(user);

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
        <Navigate to ='/' />
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
        <div>
          <img
          className='w-40'
          src={logo} alt="" />
        </div>
        <div 
        className='text-md font-medium space-x-4 
                    hidden md:block'
        >
          <Link className='hover:border-b-2 pb-1 text-darkBlue font-semibold' to= '/'>Home</Link>
          <Link className='hover:border-b-2 pb-1 text-darkBlue font-semibold' to= '/courses'>Courses</Link>
          <Link className='hover:border-b-2 pb-1 text-darkBlue font-semibold' to= '/faq'>FAQ</Link>
          <Link className='hover:border-b-2 pb-1 text-darkBlue font-semibold' to= '/blog'>Blog</Link>
          {user?.displayName && <h4 className='inline font-semibold text-black'>{user.displayName}</h4>}

          {
            user?.photoURL?
            <img className='inline w-10 rounded-full' src={user.photoURL} alt="" />
            :
            < BiUserCircle  className='text-[40px] inline cursor-pointer text-darkBlue'/>
          }
          
          {
            user?.uid?
            <button
            onClick={handleSignOut} 
            className='bg-darkBlue px-4 py-2 text-[#fff] rounded-lg' to= '/login'>Sign out</button>
            :
            <Link className='bg-darkBlue px-4 py-2 text-[#fff] rounded-lg' to= '/login'>Login</Link>
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