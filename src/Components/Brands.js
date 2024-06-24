import React from 'react'

function Brands() {
    const brands =[
        {img:require('../assets/brands/brand.png'),title:'brand1'},
        {img:require('../assets/brands/brand-1.png'),title:'brand2'},
        {img:require('../assets/brands/brand-2.png'),title:'brand3'},
        {img:require('../assets/brands/brand-3.png'),title:'brand4'},
        {img:require('../assets/brands/brand-4.png'),title:'brand5'}
       
    ]
  return (
    <section  data-aos="fade-up" data-aos-delay="00">
        <div className='container mx-auto md:px-0 px-5'>
            <div className='grid md:grid-cols-5 sm:grid-cols-2 grid-cols-1 py-8 items-center'>
                {
                    brands.map((brand,index)=>(
                       <div key={index} className='md:px-12 sm:px-10 px-5 md:py-0 sm:py-5 py-5 sm:w-full w-[60%] mx-auto'>
                            <img className=' w-full align-middle' src={brand.img} alt={brand.title}/>
                       </div> 
                    ))
                }
               
            </div>
        </div>
    </section>
  )
}

export default Brands
