import React from 'react'

const main = () => {
  return (
    <section className='w-full h-screen flex justify-center items-center'>
      <div className='grid h-3/4 w-3/4 grid-cols-5 gridrows-3 gap-6'>
        <div className="font-display font-bold  col-span-1 row-span-1 bg-kaki rounded-xl flex justify-center items-center">Clock</div> 
        <div className="font-display font-bold  col-span-2 row-span-3 bg-kaki rounded-xl flex justify-center items-center">About</div>
        <div className="font-display font-bold  col-span-1 row-span-1 bg-kaki rounded-xl flex justify-center items-center">Project 1</div>
        <div className="font-display font-bold  col-span-1 row-span-1 bg-kaki rounded-xl flex justify-center items-center">Project 2</div>
        <div className="font-display font-bold  col-span-1 row-span-2 bg-kaki rounded-xl flex justify-center items-center">Portrait</div>
        <div className="font-display font-bold  col-span-2 row-span-1 bg-kaki rounded-xl flex justify-center items-center">Name</div>
        <div className="font-display font-bold  col-span-2 row-span-2 bg-kaki rounded-xl flex justify-center items-center">Filler Image</div>
        <div className="font-display font-bold  col-span-3 row-span-1 bg-kaki rounded-xl flex justify-center items-center">Contacts</div>
      </div>
    </section>
  )
}

export default main