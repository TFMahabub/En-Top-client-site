import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Contexts/UserContext';
import SignUpWithMedia from './SignUpWithMedia';


const Register = () => {
  const { user, signUp, updateUserProfile, userEmailVarification } = useContext(AuthContext)

  const handleOnSubmit = e =>{
    e.preventDefault();

    const form = e.target;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const password = form.password.value;

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

      updateUserProfile(fullName)
      .then(()=>{
        console.log(user?.displayName);
        userEmailVarification()
        .then(() =>{
          toast.warn('Please check your email and varify!', {
            position: "top-right",
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
      .catch(() =>{
        toast.error('Display Name save failed!', {
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
        className='bg-darkBlue px-6 py-[8px] mt-3 text-lg rounded-md font-medium text-[#fff]'
        >
          Sign Up
        </button>
      <SignUpWithMedia></SignUpWithMedia>
      </form>
    </div>
  );
};

export default Register;