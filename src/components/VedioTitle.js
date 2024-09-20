import React from 'react'

const VedioTitle = ({ title, overview }) => {

    return (
        <div className='   px-[5%] py-[25%] md:py-0 md:px-28 md:mt-72 md:w-6/12  absolute text-white'>
            <h1 className='font-bold text-xl md:text-6xl md:p-2'>{title}</h1>
            <p className='hidden md:inline-block text-xs md:text-base md:p-2'>{overview}</p>
            <div className='flex'>
                <button className=' py-1 mx-1 md:py-3 bg-white text-lg text-black w-32 m-2 p-3 rounded-md'>▶ Play</button>
                <button className='hidden md:inline-block text-white bg-gray-500 w-32 m-2 p-3 rounded-md opacity-80'> ⓘ More info</button>
            </div>
        </div>
    )
}

export default VedioTitle