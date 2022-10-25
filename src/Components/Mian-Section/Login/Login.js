import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../img/logo.png'

const Login = () => {
  return (
    <div className='container mx-auto px-3 md:px-0'>
      <h2 className='text-center mt-16 text-3xl font-bold text-darkBlue'>Please LogIn</h2>
      <h5 className='text-center text-[19px] font-medium text-black'><small>Haven't account? <Link to ='/register' className='text-darkBlue'>Register</Link></small></h5>
      <form 
      className='border border-darkBlue rounded max-w-sm mt-6 mx-auto p-5'
      action=""
      >


        <div
        className='mt-5'
        >
          <label htmlFor="" className='block font-semibold'>Email:</label>
          <input 
          className='rounded-md font-medium w-full border-darkBlue focus:ring-black'
          type="email" 
          name='email' 
          placeholder='Enter your email' 
          required />
        </div>


        <div
        className='mt-5'
        >
          <label htmlFor="" className='block font-semibold'>Password:</label>
          <input 
          className='rounded-md font-medium w-full border-darkBlue focus:ring-black'
          type="password" 
          name='password' 
          placeholder='Enter your password' 
          required />
        </div>
        
        <button
        className='bg-darkBlue px-6 py-[8px] mt-5 text-lg rounded-md font-medium text-[#fff]'
        >Log In</button>

      </form>
    </div>
  );
};

export default Login;