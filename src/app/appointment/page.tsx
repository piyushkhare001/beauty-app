'use client';

import MenuItem from '@mui/material/MenuItem';
import React, { FormEvent, useState } from 'react';
import { BackgroundBeams } from '@/app/components/ui/background-beams';
import Select from '@mui/material/Select';
import toast, { Toaster } from 'react-hot-toast';
import Footer from '../components/common/Footer';

function Appointment() {



  const handleSubmit = () => {
    
    toast.success('your slot have been booked! our team will touch with you')
      console.log("data have reciuved ")
      alert('your slot have been booked! our team will touch with you')
   
  };

  return (
    <>
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
      {' '}
      {/* Ensure the container is relative */}
      {/* BackgroundBeams with adjusted z-index */}
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      {/* Content with higher z-index */}
      <div className="max-w-2xl mx-auto  relative z-10   ">
        {' '}
        {/* Add relative and z-10 to bring content to the front */}
        <h1 className="text-6xl  text-center font-sans font-bold  text-white app">
        Book Your First Appointment With US....
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center app">
          We&apos;re Book a free appointment today and indulge in our exceptional beauty services, tailored just for you dont miss out on the opportunity to experience luxury and relaxation at its finest!.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4 app">
        <input
            type="name"
            placeholder="Your your name"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            required
          />
          <input
            type="email"
         
            placeholder="Your email address"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            required
          />
               <input
            type="Moblie Number"
            placeholder="Your your mobile number"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            required
          />
<div className='rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700'>
 
<input type="date"
       
     
 
         min="2024-08-08"
             max="2024-12-31"
             className="text-white bg-black"
        
             required
     />
</div>

<div className='rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700'>
    <label>  Select your Service : </label>
<Select     required  className='text-white'
       
   
        >
       
          <MenuItem value={10}>Massage</MenuItem>
          <MenuItem value={20}>MakeUp</MenuItem>
          <MenuItem value={30}>Facial</MenuItem>
          <MenuItem value={40}> Hair Cut
 
 </MenuItem>
        </Select>
</div>
        
          <button
      type='submit'
            className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium btn hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
        BOOK NOW
          </button>
        </form>
      </div>
  
    </div>
    <Footer/>
</>
  );
}

export default Appointment;