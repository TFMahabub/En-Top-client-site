import React from 'react';
import { useContext } from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../Contexts/UserContext';
//react-toastify-
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';

const SignUpWithMedia = () => {
  const { setLoading,signInWithGoogle, signInWithGithub } = useContext(AuthContext);

  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || "/";


  const handleGoogleSignIn = () =>{
    signInWithGoogle()
    .then(result =>{
      toast.success('User Login Successfully with Google!', {
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
      toast.error('Google login failed!', {
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
    .finally(() => {
      setLoading(false);
    })

  }


  const handleGithubSignIn = () =>{
    console.log('button clicked');
    signInWithGithub()
    .then(result =>{
      console.log(result.user);
      toast.success('User Login Successfully with Github!', {
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
    .catch(error => {
      console.error(error)
    })

  }
  return (
    <>
     <button
     onClick={handleGoogleSignIn}
     className='mt-5 w-full border border-darkBlue rounded-full py-2 flex items-center justify-center
                text-md font-semibold text-darkBlue'
     >
      <FaGoogle className='mr-2 text-2xl'/> Login With Google
     </button>


     <button
     onClick={handleGithubSignIn}
     className='mt-3 w-full border border-darkBlue rounded-full py-2 flex items-center justify-center
                text-md font-semibold text-darkBlue'
     >
      <FaGithub className='mr-2 text-2xl'/> Login With Github
     </button>
    </>
  );
};

export default SignUpWithMedia;