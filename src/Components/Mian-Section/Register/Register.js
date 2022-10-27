import { getAuth, sendEmailVerification } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import app from '../../../firebase/firebase.config';
import { AuthContext } from '../../Contexts/UserContext';
import SignUpWithMedia from './SignUpWithMedia';

const auth = getAuth(app)


const Register = () => {
  const { signUp, updateUserProfile } = useContext(AuthContext)

  const handleOnSubmit = e =>{
    e.preventDefault();

    const form = e.target;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;

    signUp(email, password)
    .then(result =>{
      toast.success('User Create Successfully!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

      updateUserProfile(fullName, photoUrl)
      .then(result=>{
        
        //send Email varification-
        sendEmailVerification(auth.currentUser)
        .then(() =>{
          toast.warn('Please check your email to varify!', {
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
      })
      //display name save error-
      .catch(error =>{
          console.error(error)
          toast.error('Display name saved field!', {
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
      console.log(result.user);
      form.reset()
    })

    //user create error-
    .catch(error => {
      console.error(error)
      toast.error('Somethig is wrong', {
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
    <div className='container mx-auto px-3 md:px-0'>
      <h2 className='text-center mt-10 text-3xl font-bold text-darkBlue'>Create your account</h2>
      <h5 className='text-center text-[19px] font-medium text-black'><small>Already registered? <Link to ='/login' className='text-darkBlue'>Log In</Link></small></h5>

      <form 
      onSubmit={handleOnSubmit}
      className='border border-darkBlue rounded max-w-sm mt-3 mx-auto p-5'
      action=""
      >

        <div
        className=''
        >
          <label htmlFor="" className='block font-semibold'>Photo URL:</label>
          <input 
          className='rounded-md font-medium w-full border-darkBlue focus:ring-black'
          type="text" 
          name='photoUrl' 
          placeholder='Enter your photo url' 
           />
        </div>

        <div
        className='mt-5'
        >
          <label htmlFor="" className='block font-semibold'>Full Name:</label>
          <input 
          className='rounded-md font-medium w-full border-darkBlue focus:ring-black'
          type="text" 
          name='fullName' 
          placeholder='Enter your full name' 
           />
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
        className='bg-darkBlue w-full py-[8px] mt-5 text-lg rounded-md font-medium text-[#fff]'
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;