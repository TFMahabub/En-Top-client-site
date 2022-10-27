import { HiOutlineUserCircle } from "react-icons/hi";
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/UserContext';

const CheckOut = () => {
  const { user } = useContext(AuthContext)
  const { displayName, email, emailVerified, photoURL, phoneNumber } = user;

  return (
    <section className='md:flex justify-evenly p-6 container max-w-lg mt-3 mx-auto border border-darkBlue rounded-lg'>
      {
        user?.photoURL?
        <img className='rounded-full h-28 w-28' src={photoURL} alt="" />
        :
        <HiOutlineUserCircle className="text-[120px] text-darkBlue"/>
      }
      <div>
        <h2 className=' text-lg font-semibold'>Name: {displayName}</h2>
        <p className='mt-3 text-sm font-medium'>Email: {email}</p>
        {
          emailVerified?
            <p className='mt-3 text-sm font-medium'>Email-Varification: <span className='text-darkBlue font-medium'>Varified</span></p>
            :
            <p className='mt-3 text-sm font-medium'>Email-Varification: <span className='font-medium text-[#dd0808]'>Not-Varified</span></p>
        }
        <p className='mt-3 text-sm font-medium'>Phone-Number: {phoneNumber? <span className='text-darkBlue'>phoneNumber</span>: <span className='text-darkBlue'>Not found</span>}</p>
      </div>
      
    </section>
  );
};

export default CheckOut;