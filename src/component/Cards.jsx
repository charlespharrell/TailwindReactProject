import React from 'react'
import single from '../images/single.png'
import double from '../images/double.png'
import tripple from '../images/triple.png'

function Cards() {
  return (
    <div className=' w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col  px-2 py-4 my-4 border-8 rounded-lg hover:scale-105 duration-300'>
                <img src={single} className='w-20 mx-auto mt-[-3rem] bg-white ' alt="" />
                <h2 className='text-2xl font-bold text-center'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium mt-6'>
                    <p className='py-2 border-b mx-8' mt-8>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Franted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                </div>
                <button  className='bg-black  w-[200px] rounded-md font-medium mx-auto my-6 py-3 text-[#00df9a]'>Start Trial</button>
            </div>

            <div className='w-full bg-gray-100 shadow-xl flex flex-col  px-2 py-4 my-8 md:my-0 border-8 rounded-lg hover:scale-105 duration-300'>
                <img src={double}  className='w-20 bg-transparent mx-auto mt-[-3rem] bg-white ' alt="" />
                <h2 className='text-2xl font-bold text-center'>Double User</h2>
                <p className='text-center text-4xl font-bold'>$299</p>
                <div className='text-center font-medium mt-6'>
                    <p className='py-2 border-b mx-8' mt-8>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Franted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                </div>
                <button  className='bg-black  w-[200px] rounded-md font-medium mx-auto my-6 py-3 text-[#00df9a]'>Start Trial</button>
            </div>

            <div className='w-full shadow-xl flex flex-col  px-2 py-4 my-4 border-8 rounded-lg hover:scale-105 duration-300'>
                <img src={tripple} className='w-20 mx-auto mt-[-3rem] bg-white ' alt="" />
                <h2 className='text-2xl font-bold text-center'>Tripple User</h2>
                <p className='text-center text-4xl font-bold'>$449</p>
                <div className='text-center font-medium mt-6'>
                    <p className='py-2 border-b mx-8' mt-8>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Franted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                </div>
                <button  className='bg-black  w-[200px] rounded-md font-medium mx-auto my-6 py-3 text-[#00df9a]'>Start Trial</button>
            </div>

        </div>

    </div>
  )
}

export default Cards