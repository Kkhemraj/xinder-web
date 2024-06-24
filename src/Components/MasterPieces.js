import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronLeftIcon, ChevronRightIcon ,ArrowLongRightIcon} from '@heroicons/react/24/solid';

import { Navigation } from 'swiper/modules';
import 'swiper/css';
//import 'swiper/css/navigation'; // Import navigation styles
import '../Style.css'

function MasterPieces() {
    const ListItem = [
        { img: require('../assets/masterpieces/image-1.png'), userImg: require('../assets/masterpieces/user/melvina_spring.png'), tagline: 'promoted', title: 'Vases Family', subtitle: 'Pottery' },
        { img: require('../assets/masterpieces/image-2.png'), userImg: require('../assets/masterpieces/user/melvina_spring.png'), tagline: 'promoted', title: 'Vases Family', subtitle: 'Pottery' },
        { img: require('../assets/masterpieces/image-3.png'), userImg: require('../assets/masterpieces/user/melvina_spring.png'), tagline: 'promoted', title: 'Vases Family', subtitle: 'Pottery' },
        { img: require('../assets/masterpieces/image-4.png'), userImg: require('../assets/masterpieces/user/melvina_spring.png'), tagline: 'promoted', title: 'Vases Family', subtitle: 'Pottery' },
        { img: require('../assets/masterpieces/image-1.png'), userImg: require('../assets/masterpieces/user/melvina_spring.png'), tagline: 'promoted', title: 'Vases Family', subtitle: 'Pottery' },
        { img: require('../assets/masterpieces/image-2.png'), userImg: require('../assets/masterpieces/user/melvina_spring.png'), tagline: 'promoted', title: 'Vases Family', subtitle: 'Pottery' },
        { img: require('../assets/masterpieces/image-3.png'), userImg: require('../assets/masterpieces/user/melvina_spring.png'), tagline: 'promoted', title: 'Vases Family', subtitle: 'Pottery' },
        { img: require('../assets/masterpieces/image-4.png'), userImg: require('../assets/masterpieces/user/melvina_spring.png'), tagline: 'promoted', title: 'Vases Family', subtitle: 'Pottery' },
    ];

    return (
        <section className='py-10'  data-aos="fade-up" data-aos-delay="400">
            <div className='container mx-auto md:px-0 px-4'>
                <div className='flex justify-between items-center mb-8'>
                    <h2 className='text-titleColor md:text-3xl text-xl font-bold font-roboto flex-1 text-left'>Latest MasterPieces</h2>
                    <button className='inline-flex text-lightBlue items-center'>
                        <span className='mr-1 md:text-md text-xs'>Discover More Masterpieces </span><ArrowLongRightIcon className="w-[24px] " />
                    </button>
                </div>
            </div>
            <div className="slider-wrapper md:pl-[80px] pl-[20px]">
                <Swiper
                    spaceBetween={20}
                  
                    centeredSlides={false}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    modules={[Navigation]} // Correctly use the modules array
                    breakpoints={{
                       
                       
                        1024: {
                          slidesPerView:5.3,
                         
                        },
                        768: {
                            slidesPerView:2.3,
                           
                          },
                          414: {
                            slidesPerView:1.3,
                           
                          },
                      }}
                >
                    {ListItem.map((Item, index) => (
                        <SwiperSlide className='p-1' key={index}>
                            <div className='w-full rounded-[10px] bg-white shadow-md font-roboto relative overflow-hidden'>
                                <img src={Item.img} alt={Item.title} />
                                <span className='text-black text-xs inline-block bg-white rounded-[6px] px-2 py-1 absolute top-4 left-4'>{Item.tagline}</span>
                                <div className='flex items-center text-left p-4'>
                                    <img src={Item.userImg} className='w-[50px]' alt={Item.subtitle} />
                                    <div className='flex-1 pl-3'>
                                        <h6 className='text-black text-sm'>{Item.title}</h6>
                                        <p className='text-black text-[10px]'>{Item.subtitle}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="swiper-button-prev w-[40px] h-[40px] bg-white shadow-lg rounded-[100%] absolute top-1/2 translate-y-[-50%] left-0 z-10 cursor-pointer inline-flex justify-center items-center">
                        <ChevronLeftIcon className="w-[20px] text-titleColor" />
                    </div>
                    <div className="swiper-button-next w-[40px] h-[40px] bg-white shadow-lg rounded-[100%] absolute top-1/2 translate-y-[-50%] right-0 z-10 cursor-pointer  inline-flex justify-center items-center">
                        <ChevronRightIcon className="w-[20px] text-titleColor" />
                    </div>
                </Swiper>
            </div>
        </section>
    );
}

export default MasterPieces;
