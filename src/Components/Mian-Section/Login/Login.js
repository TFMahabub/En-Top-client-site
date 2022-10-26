import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../../../img/logo.png'
import { AuthContext } from '../../Contexts/UserContext';
import SignUpWithMedia from '../Register/SignUpWithMedia';

const Login = () => {
  const { logInUser } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || "/";


  const handleOnSubmit = e =>{
    e.preventDefault()

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logInUser(email, password)
    .then(result =>{
      console.log(result.user);
      toast.success('User login successfully!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        navigate(from, { replace: true });
    })
    .catch(error => {
      console.error(error)
      toast.error('Something is wrong!', {
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
      <h2 className='text-center mt-16 text-3xl font-bold text-darkBlue'>Please LogIn</h2>
      <h5 className='text-center text-[19px] font-medium text-black'><small>Haven't account? <Link to ='/register' className='text-darkBlue'>Register</Link></small></h5>
      <form 
      onSubmit={handleOnSubmit}
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
        type='submit'
        className='bg-darkBlue px-6 py-[8px] mt-5 text-lg rounded-md font-medium text-[#fff]'
        >Log In</button>

      <SignUpWithMedia />
      </form>
    </div>
  );
};

export default Login;