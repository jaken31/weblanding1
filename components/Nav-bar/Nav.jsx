import React from 'react'
import Logo from '@components/Nav-bar/Logo'

const Nav = () => {
  return (
    <div className='flex justify-center px-30 pt-10 pb-2'>
        <div className='flex justify-between w-3/4 mx-auto px-8 py-4 bg-kaki rounded-2xl'>
            <Logo />
            <nav className='flex justify-center space-x-5'>
                <div className='flex space-x-20 text-richblack '>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Projects</a>
                </div>
            </nav> 
        </div>
    </div>
        
    
       
  )
}

export default Nav