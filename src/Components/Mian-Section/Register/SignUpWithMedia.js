import React from 'react';
import { useContext } from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../Contexts/UserContext';
//react-toastify-
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUpWithMedia = () => {
  const { user, signInWithGoogle } = useContext(AuthContext);

  const handleGoogleSignIn = () =>{
    signInWithGoogle()
    .then(result =>{
      console.log(result.user);
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
    })
    .catch(error => {
      console.error(error)

    })

  }
  return (
    <>
     <button
     onClick={handleGoogleSignIn}
     className='mt-5 w-full border border-darkBlue rounded-full py-3 flex items-center justify-center
                text-md font-semibold text-darkBlue'
     >
      <FaGoogle className='mr-2 text-2xl'/> Login With Google
     </button>
     <button
     className='mt-3 w-full border border-darkBlue rounded-full py-3 flex items-center justify-center
                text-md font-semibold text-darkBlue'
     >
      <FaGithub className='mr-2 text-2xl'/> Login With Github
     </button>
    </>
  );
};

export default SignUpWithMedia;