import React, { useState } from 'react'
import logo from "../assets/logo.svg"
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
function Header() {
    const [open, setOpen] = useState(false)
    return (
        <header className='bg-primary'>
            <div className='container mx-auto py-5 md:px-0 px-4'>
                <div className='flex justify-between'>
                    <a href="#"><img src={logo} alt="xinder" /></a>
                    <div className={`inline-flex flex-col md:flex-row items-center md:static fixed md:w-auto w-full z-10 md:py-0 py-10 bg-primary   transition-all ease-in ${open ? 'left-0' : 'left-[-100%]'}`}>
                        <nav className='font-roboto text-white flex flex-col md:flex-row  md:w-auto w-full'>
                            <a href="#" className='text-base px-5 md:py-0 py-2 inline-block '>Explore</a>
                            <a href="#" className='text-base px-5 md:py-0 py-2 inline-block'>Solutions</a>
                            <a href="#" className='text-base px-5 md:py-0 py-2 inline-block'>Articles</a>
                            <a href="#" className='text-base px-5 md:py-0 py-2 inline-block'>Sign in</a>
                        </nav>
                        <button className='border border-white rounded-[4px] text-white px-3 py-1.5 hover:bg-white hover:text-black transtions-all ease-in duration-400'>Join Now</button>
                    </div>
                    <button onClick={() => setOpen(!open)} className="inline-block w-[30px] md:hidden z-10">
                        {open ? <XMarkIcon className="w-[24px] text-white " /> : <Bars3Icon className="w-[24px] text-white " />}
                    </button>

                </div>
            </div>
        </header>
    )
}

export default Header
