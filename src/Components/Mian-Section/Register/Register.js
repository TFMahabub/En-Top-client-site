import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import SignUpWithMedia from './SignUpWithMedia';

const Register = () => {
  const { signUp } = useContext(AuthContext)

  const handleOnSubmit = e =>{
    e.preventDefault();

    const form = e.target;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const password = form.password.value;

    signUp(email, password)
    .then(result =>{
      console.log(result.user);
    })
    .catch(error => console.error(error))

  }
  return (
    <div className='container mx-auto px-3 md:px-0'>
      <h2 className='text-center mt-10 text-3xl font-bold text-darkBlue'>Create your account</h2>
      <h5 className='text-center text-[19px] font-medium text-black'><small>Already registered? <Link to ='/login' className='text-darkBlue'>Log In</Link></small></h5>

      <form 
      onSubmit={handleOnSubmit}
      className='border border-darkBlue rounded max-w-sm mt-6 mx-auto p-5'
      action=""
      >
        <div
        className=''
        >
          <label htmlFor="" className='block font-semibold'>Full Name:</label>
          <input 
          className='rounded-md font-medium w-full border-darkBlue focus:ring-black'
          type="text" 
          name='fullName' 
          placeholder='Enter your full name' 
          required />
        </div>


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
        >
          Sign Up
        </button>
      <SignUpWithMedia></SignUpWithMedia>
      </form>
    </div>
  );
};

export default Register;