'use client'

import React from "react";
import AcmeLogo from "../common/Logo"
import link from "next/link";
import { Link, Element } from 'react-scroll';
import { useRouter } from 'next/navigation'
export default function App() {
  const router = useRouter()



  return (
<>
<div className="w-full flex justify-between mb-24  ">


        <div className="flex  gap-1 ">

            <AcmeLogo/>
            <h1 className=" text-white font-mono font-bold mt-1 "> Beauty Salon </h1>
        </div>

        <div className=" flex gap-10 justify-evenly mt-2 ">
            <div className="font-serif nav "> <Link to="#experts" smooth={true} duration={500} style={{ cursor: 'pointer' }}>Experts</Link></div>
            <div className="font-serif nav "> <Link to="#services" smooth={true} duration={500} style={{ cursor: 'pointer' }}>Services</Link></div>
            <div className="font-serif nav "> <Link to="#reviews" smooth={true} duration={500} style={{ cursor: 'pointer' }}>Reviews</Link></div>
        </div>

        <div  onClick = {() => router.push('/appointment')}className=" nav-btn focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" >
       Book An Appointment
        </div>
        
        </div>
  </>
  );
}

