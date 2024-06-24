import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import HeroImg from '../assets/hero.png'
function Hero() {
    return (
        <section className='bg-primary md:py-0 pt-5' >
            <div className='container mx-auto md:px-0 px-4'>
                <div className='flex md:flex-row flex-col items-center'>
                    <div className='md:w-1/2 w-full text-left md:pr-5 pr-0'>
                        <h1 className='md:text-6xl text-4xl text-white mb-5 font-bold'>Search the work of <br />the best artists</h1>
                        <form className='flex'>
                            <div className='flex-1 mr-3 relative'>
                            <MagnifyingGlassIcon className="size-6 w-[40px] text-gray-500 absolute left-0 top-2" />
                                <input type="text" placeholder="search for artists, work name, or category" id="hero-field" name="hero-field" className="w-full  rounded border  border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 pl-[40px] leading-8 transition-colors duration-200 ease-in-out"  /></div>
                            <button type='submit' className='btn-bg text-base text-white px-4 py-1.5 rounded-[4px] hover:opacity-90'>seacrh</button>
                        </form>
                        <div className='flex mt-2 '>
                            <button className='border border-white md:text-sm text-[10px] text-white px-2 py-1 rounded-[4px] mr-2'>Oil Painting</button>
                            <button className='border border-white md:text-sm text-[10px] text-white px-2 py-1 rounded-[4px] mr-2'>Abstract Art</button>
                            <button className='border border-white md:text-sm text-[10px] text-white px-2 py-1 rounded-[4px] mr-2'>Sculpture</button>
                            <button className='border border-white md:text-sm text-[10px] text-white px-2 py-1 rounded-[4px] mr-2'>Art Deco</button>
                            <button className='border border-white md:text-sm text-[10px] text-white px-2 py-1 rounded-[4px] mr-2'>Pop Art</button>
                        </div>
                    </div>
                    <div className='md:w-1/2 w-full md:mt-0 mt-8'>
                        <img src={HeroImg} alt="hero_img" className='w-full'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
