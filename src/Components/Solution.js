import React from 'react'
import solutionImg from '../assets/solution.png'
function Solution() {
  return (
    <section className='bg-lightNavyBlue md:py-20 py-5'  data-aos="fade-up" data-aos-delay="400">
        <div className='container mx-auto md:px-0 px-4'>
            <div className='flex md:flex-row flex-col items-center'>
                <div className='md:w-1/2 w-full text-left md:pr-5 pr-0'>
                    <h1 className='md:text-5xl text-2xl text-white mb-5 font-bold'>Best solutions for your<br/> demanding collection</h1>
                    <p className='text-base text-white mb-5'>Odio vulputate cras vel lacinia turpis volutpat adipiscing. Sollicitudin at velit, blandit tempus nunc in.</p>
                    <button className='border border-white rounded-[4px] text-white px-3 py-1.5 hover:bg-white hover:text-black transtions-all ease-in duration-400'>Explore Xinder</button>
                </div>
                <div className='md:w-1/2 w-full md:mt-0 mt-8'>
                    <img src={solutionImg} alt="solution_img" className='w-full'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Solution
