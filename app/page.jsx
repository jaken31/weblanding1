import React from 'react'


const main = () => {
  return (
    <section className='w-full h-screen flex flex-col  items-center'>
      
      <div className='grid h-3/4 w-3/4 grid-cols-5 grid-rows-5 gap-6 b-0' >
        <div className="font-display font-bold  col-span-1 row-span-1 bg-timberwolf 
        rounded-xl flex flex-col pt-10 pl-7 text-4xl">
          hi, i'm <br />
          <div className='text-prussianblue'>Nguyen Pham</div>
        </div> 
        <div className="font-display font-bold  col-span-4 row-span-3 bg-timberwolf rounded-xl flex justify-center items-center">Stuff</div>
        <div className="font-display font-bold  col-span-1 row-span-2 bg-timberwolf rounded-xl flex flex-col justify-center items-center ">
          <div className='text-4xl font-bold pb-10 px-7'>wanna do some projects? send me an email! </div>
          <button className='bg-bittersweet rounded-xl py-4 px-10 text-white text-lg'>nguyenpk31@gmail.com</button>
        </div>
        <div className="font-display font-bold  col-span-1 row-span-1 h-1/4 bg-timberwolf rounded-xl flex justify-center items-center"><a href="#">instagram</a></div>
        <div className="font-display font-bold  col-span-1 row-span-1 h-1/4 bg-timberwolf rounded-xl flex justify-center items-center"><a href="#">github</a></div>
        <div className="font-display font-bold  col-span-1 row-span-1 h-1/4 bg-timberwolf rounded-xl flex justify-center items-center"><a href="#">facebook</a></div>
        <div className="font-display font-bold  col-span-1 row-span-1 h-1/4 bg-timberwolf rounded-xl flex justify-center items-center"><a href="#">linkedlin</a></div>
        <div className="font-display font-bold  col-span-1 row-span-1 h-1/4 bg-timberwolf rounded-xl flex justify-center items-center"><a href="#">discord</a></div>
      </div>
    </section>
  )
}

export default main