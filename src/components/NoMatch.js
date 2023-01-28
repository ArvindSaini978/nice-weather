import React from 'react'
import { Link } from 'react-router-dom'

export default function NoMatch() {
 
  return (
    <div className='bg-white w-[100vw] z-[997] h-[90vh] py-[2pc] flex flex-col justify-center items-center'>
      <img src="../NotFound.png" alt="" className='h-[60%] object-cover select-none'/>
      <div className="flex flex-col w-[70%] justify-center items-start">
        <span className='text-xl 2xsm:text-2xl xsm:text-3xl md:text-5xl font-sans font-medium text-[#534444]'>Something's wrong here.</span>
        <span className='text-sm 2xsm:text-base xsm:text-lg md:text-xl mt-4 font-serif text-[gray]'>This is a 404 error, which means you've clicked on a bad link or entered an invalid URL. Maybe what you are looking for can be found at <Link to="/" className='font-medium text-[#6a6565] underline italic hover:text-[#463a3a] transition-all duration-100'>Home</Link> or you can try to enter the location again.</span>

      </div>
      
    </div>
  )
}
