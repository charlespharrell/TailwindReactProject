import React from 'react'
import laptop from '../images/laptop.jpg'

function Analytics() {
  return (
    <div className='bg-white w-full py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[700px] mx-auto my-0'src={laptop} alt="" />
            <div className='flex flex-col justify-center '>
                <p className='text-[#00df9a] text-2xl uppercase font-bold'>Trading Analytics Dashboard</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Trading Analysis Centrally</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, inventore!
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis veritatis 
                   provident similique aut facilis eos, id enim at excepturi. Illo. 
                </p>
                <button className='bg-black w-[200px] rounded-md font-medium mx-auto md:mx-0 my-6 py-3 text-[#00df9a]'>
                    Get Started
                </button>
            </div>
        </div>
        
    </div>
  )
}

export default Analytics