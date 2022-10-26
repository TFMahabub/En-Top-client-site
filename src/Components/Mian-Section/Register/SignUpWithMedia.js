import React from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa";

const SignUpWithMedia = () => {
  return (
    <>
     <button
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