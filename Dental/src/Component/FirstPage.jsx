import React from 'react'

function FirstPage() {
  return (
    <div className='h-screen w-full flex bg-[#d5e8f3] '>
        <div className='h-[90%] w-1/2 flex flex-col pt-20 pl-28'>
        <h1 className='text-5xl mt-24 mb-10 w-[90%] font-bold text-start font-sans text-[#268FBC]'>Discover <span className='text-[#989DA0]'>Exceptional Dental</span> Care with a Tender Approach</h1>
        <p className='font-medium text-lg text-start mb-12'>It is a well-known fact that readers often become distracted by the content of a page while examining its layout. The purpose of using Lorem Ipsum is that it provides a text that is fairly standard and resembles natural language.</p>
        <button className='bg-[#268FBC] rounded-full h-12 text-lg font-medium  w-64 shadow-2xl shadow-slate-600 text-white text-center '>Make An Appointment</button>
        <div className='w-full border-b-[1px] border-gray-400 mt-16'></div>
        </div>
        <div className='h-full w-1/2 flex justify-center items-end'>
            <img className='h-[85%] object-contain' src="./images/hero-img.png" alt="" />
        </div>
    </div>
  )
}

export default FirstPage