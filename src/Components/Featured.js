import React from 'react'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
function Featured() {
    const featured =[
        {img:require('../assets/featured/image-1.jpg'),title:'Vases Family',subtitle:'Pottery'},
        {img:require('../assets/featured/image-2.png'),title:'Camel Portrait',subtitle:'Oil Painting'},
        {img:require('../assets/featured/image-3.jpg'),title:'Euforia ',subtitle:'Abstract Painting'},
        {img:require('../assets/featured/image-4.jpg'),title:'Classic Watch',subtitle:'Object Design'},
        {img:require('../assets/featured/image-5.jpg'),title:'White Angel',subtitle:'Sculpture'},
    
       
    ]
  return (
    <section className='py-10'  data-aos="fade-up" data-aos-delay="400">
        <div className='container mx-auto md:px-0 px-5'>
            <div className='flex justify-between items-center mb-8'>
                <h2 className='text-titleColor md:text-3xl text-xl font-bold font-roboto flex-1 text-left'>Featured art categories</h2>
                <button className='inline-flex text-lightBlue items-center'>
                            <span className='mr-1 md:text-md text-xs'>Featured art categories </span><ArrowLongRightIcon className="w-[24px] " />
                </button>
            </div>
            <div className='grid md:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-5 '>
               
                {
                    featured.map((category,index)=>(
                       <div key={index} className='relative rounded-[4px] overflow-hidden'>
                            <div className='absolute top-5 left-5 text-left text-white '>
                                <p className='text-xs '>{category.subtitle}</p>
                                <h5 className='text-lg'>{category.title}</h5>
                            </div>
                            <img className='w-full h-full object-cover' src={category.img} alt={category.title}/>
                       </div> 
                    ))
                }
                <div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Featured
