'use client';

import React from 'react'
import Logo from '@components/Nav-bar/Logo'



const Nav = () => {
  
  return (
    <nav className='flex justify-center px-30 pt-10 pb-2'>
        <div className='flex justify-between w-3/4 mx-auto px-8 py-4 bg-oxfordblue text-platinum border-platinum border-solid border-2 text-opacity-100 bg-opacity-50 rounded-2xl'>
            <Logo />
            <div className='flex justify-center space-x-5 '>
                <ul className='flex space-x-20 '>
                  <li>
                    <a href="text-white opacity-30">Home</a>
                  </li>
                  <li>
                    <a href="text-white opacity-30">About</a>
                  </li>
                  <li>
                    <a href="text-white opacity-30">Projects</a>
                  </li>
                </ul>
            </div> 
        </div>
    </nav>
        
    
       
  )
}


export default Nav