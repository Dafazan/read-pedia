import Image from 'next/image'
import AmberNav from '@/components/AmberNav'

export default function Home() {
  return (
    <main className='bg-white'>
      <AmberNav />
      <div className=' md:px-[200px] p-5'>
        <div className='bg-slate-400 md:h-72 h-60 rounded-xl'></div>
      </div>
      <div className='md:px-[200px] p-5'>
        <div >
          <p className='text-[30px] font-bold'>Top Picks For You {String.fromCharCode(33)}</p>
          <p className='text-slate-700'>Dive Deep from start to finish</p>
        </div>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-5 pt-2'>
          <div className=' md:h-72 h-52 flex gap-1'>
            <div className='bg-slate-800 md:w-5/12 w-4/12 rounded-s-lg shadow-xl'>ad</div>
            <div className='bg-slate-200 md:w-7/12 w-8/12 rounded-e-lg shadow-xl p-5'>
              <div className='w-full flex'>
                <div className='flex flex-col w-4/6'>
                  <h1 className='text-xl font-semibold line-clamp-1'>asdsad asdasdsa Judul disini lorem ipsum</h1>
                  <h2 className='text-sm'>By <span className='txt-primary'>Dafazan</span></h2>
                </div>
                <div className='w-1/6'></div>
                <div className=' flex items-center justify-center'>
                  <button className='bg-primary rounded-xl p-2'>
                    <img className='w-[20px] h-[20px]' src="./assets/icons/mark.svg" alt="" />
                  </button>
                </div>
              </div>
              <div className=' py-2 text-sm line-clamp-10 font-medium'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet sapien eget tellus malesuada vestibulum. Maecenas nec nunc at ligula bibendum fringilla ac eu arcu. Nulla facilisi. Proin in odio sit amet neque pharetra elementum.
                </p>
              </div>
            </div>
          </div>
          <div className='bg-blue-500 h-72'>card</div>
          <div className='bg-blue-500 h-72'>card</div>
          <div className='bg-blue-500 h-72'>card</div>
          <div className='bg-blue-500 h-72'>card</div>
        </div>
      </div>

    </main>
  )
}
