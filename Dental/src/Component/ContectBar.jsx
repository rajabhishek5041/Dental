import React from 'react'

function ContectBar() {
  return (
    <div className='bg-[#d5e8f3]'>
        <div className='w-full h-52 bg-[#268FBC] flex justify-evenly items-center '>
        <div className='border-r-[1px] h-[70%] w-[33%] flex items-center justify-center'>
            <div className='h-[40%] object-contain '>
                <img className='h-full object-contain mr-6' src=".\images\phone.png" alt="" />
            </div>
            <div>
                <h1 className='text-2xl font-bold text-white'>Need Dental Services ?</h1>
                <p className='text-xl font-medium text-white'>Call on : (+01) 987 828 745</p>
            </div>
        </div>
        <div className='border-r-[1px] h-[70%] w-[33%] flex items-center justify-center'>
            <div className='h-[40%] object-contain '>
                <img className='h-full object-contain mr-6' src=".\images\clock.png" alt="" />
            </div>
            <div>
                <h1 className='text-2xl font-bold text-white'>Opening Hours</h1>
                <p className='text-xl font-medium text-white'>Mon to Sat 9:00AM to 9:00PM</p>
            </div>
        </div>
        <div className=' w-[33%]'></div>
    </div>
    </div>
  )
}

export default ContectBar