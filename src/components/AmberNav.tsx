import React from 'react'

function AmberNav() {
    return (
        <div className='bg-primary w-screen h-[70px] px-[200px] flex md:flex-row flex-col'>
            <div className=' flex items-center justify-center'><p className='text-3xl font-bold text-white'>ReadPedia</p></div>
            <div className=' flex items-center justify-center px-5'>
                <input className="focus:border-transparent rounded-md px-2 h-8 focus:ring-blue-500 focus:border-blue-500 shadow-md" type="text" placeholder="Search..." />

            </div>
            <div className=' flex items-center justify-center text-white px-4'>
                <a href="/">Discover</a>
            </div>
            <div className=' mx-auto'></div>
            <div className=' px-5 flex items-center justify-center'>
                <button className='h-8 rounded-md bg-white px-5 txt-primary text-sm hover:bg-[#fcd93d] hover:text-white'>Start Writing</button>
            </div>
            <div className=' flex items-center justify-center '>
                <div className='bg-slate-600 rounded-md w-8 h-8'></div>
            </div>
        </div>
    )
}

export default AmberNav