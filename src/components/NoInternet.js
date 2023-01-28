import React from 'react'

export default function NoInternet() {
  return (
    <div className='bg-white w-[100vw] z-[997] h-[100vh] absolute py-[2pc] top-0 left-0 flex flex-col justify-center items-center text-center'>
        <img src="../NoInternet.webp" alt="" className='object-cover 2xsm:object-fit h-[90%] select-none'/>
        <span className="h-[5%] sm:h-[10%] text-lg 2xsm:text-xl sm:text-2xl font-medium font-serif text-[gray] select-none">Slow or No Internet Connection !</span>
        <span className="h-[5%] sm:h-[10%] text-lg 2xsm:text-xl sm:text-2xl font-medium font-serif text-[gray] select-none">Please check your internet settings.</span>
    </div>
  )
}
