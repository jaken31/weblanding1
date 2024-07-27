import React from 'react'
import Nav from '@components/Nav-bar/Nav';
import { BackgroundGradientAnimation } from '@components/ui/background-gradient-animation';
import { TypewriterEffect } from '@components/ui/typewriter-effect';

const Hero = () => {
  const words = [
    {
      text: "An",
      
    },
    {
      text: "AI",
    },
    {
      text: "developer ",
    },
  ];
  return (
    <section>
      
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <p className="bg-clip-text text-transparent flex items-center justify-center drop-shadow-2xl bg-gradient-to-b from-white/80 to-platinum/20">
          Hi, I am  <span className='text-transparent drop-shadow-2xl bg-clip-text bg-gradient-to-b from-oxfordblue/80 to-richblack/100'> Nguyen Pham</span>
        </p>
        <TypewriterEffect words={words} className='aboslute z-50 inset-0 flex items-center mt-6 justify-center text-white text-center'/>
      </div>
      
    </BackgroundGradientAnimation>
  </section>
    
  )
}

export default Hero