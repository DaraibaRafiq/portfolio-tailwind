'use client';

import React from 'react';
import Navbar from "./Navbar";
import Typewriter from 'typewriter-effect';



const Hero = () => {
  return (
    <div className="min-h-screen bg-no-repeat bg-cover bg-black">
      {/* Navbar stays at the top */}
      <Navbar />

      {/* Hero Section */}
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)] items-center">
        {/* Circle image on the left */}
        <div className="flex justify-center items-center">
          <div 
            className="bg-[url(/proo.jpeg)] bg-cover bg-center rounded-full h-[300px] w-[300px]"
          />
        </div>
        

        {/* Text content on the right */}
        <div className="text-[40px] sm:text-[60px] lg:text-[80px] font-bold leading-tight flex justify-center items-center text-white">
          <div data-aos="zoom-in-up">
            <p>Hello I &apos;m</p>
           <div className="text-violet-600">
            <Typewriter
              options={{
                strings: ['Daraiba Rafiq', 'Full Stack Developer'],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
            </div>
        </div>
          </div>
        </div>
         <div className="mt-16 w-[98%] h-[2px] bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 rounded-full"></div>
      </div>
    
  );
}

export default Hero;     