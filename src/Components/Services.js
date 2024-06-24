import React from 'react'

function Services() {
    const services = [
        { img: require('../assets/services/Icon.png'), title: 'Nibh viverra', },
        { img: require('../assets/services/Icon-1.png'), title: 'Cursus amet', },
        { img: require('../assets/services/Icon-2.png'), title: 'Ipsum fermentum', },
        { img: require('../assets/services/Icon-3.png'), title: 'Quisque euismod', },
        { img: require('../assets/services/Icon-4.png'), title: 'Arcu vulputate', },
        { img: require('../assets/services/Icon-5.png'), title: 'Cras auctor', },

    ]
    return (
        <div>
            <section className='py-10'  data-aos="fade-up" data-aos-delay="400">
                <div className='container mx-auto md:px-0 px-5'>
                    <div className='flex justify-between items-center mb-8'>
                        <h2 className='text-titleColor md:text-3xl text-xl font-bold font-roboto flex-1 '>Expanding services</h2>
                       
                    </div>
                    <div className='grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-5 pt-8 '>
                        {
                            services.map((category, index) => (
                                <div key={index} className=''>
                                    <img className='w-1/3 mx-auto' src={category.img} alt={category.title} />
                                    <h5 className='text-md mt-4'>{category.title}</h5>
                                </div>
                            ))
                        }
                        
                    </div>
                    <button type='submit' className='btn-bg text-base text-white px-5 py-1.5 rounded-[4px] hover:opacity-90 mt-14'>Find Services</button>
                </div>
            </section>
        </div>
    )
}

export default Services
