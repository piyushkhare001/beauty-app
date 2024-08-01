'use client'
import React from "react";
import { Vortex } from "../ui/vortex";
import Navbar from "@/app/components/common/Nabvar"
import Link from "next/link";

export default function VortexDemo() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
         
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col gap-5 justify-center px-2 md:px-10 py-4 w-full h-full"
      >
          <Navbar/>
   
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
       Welcome To Beauty Salon ...
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
     
        Explore our wide range of beauty services designed to rejuvenate, relax, and reveal your inner glow
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
       <Link href= "/appointment">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
          Book an Appoinment
          </button>
          </Link>
         
         <Link href= {"#services"}> <button className="px-4 py-2  text-white ">Services</button></Link>
        </div>
      </Vortex>
    </div>
  );
}
