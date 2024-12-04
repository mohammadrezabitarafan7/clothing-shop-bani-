'use client'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import gif1 from '../../public/images/1705410681.gif'
import s1 from '../../public/images/f2.png'
import s2 from '../../public/images/1706606491.png'
import s3 from '../../public/images/1706705085.png'
import bm1 from '../../public/images/bm1.png'
import bm2 from '../../public/images/mb2.png'
import bm3 from '../../public/images/bm3.png'
import bm4 from '../../public/images/bm4.png'

import {
    ArrowLeftCircleIcon, ArrowRightCircleIcon
} from '@heroicons/react/24/solid';

const Swiper1 = () => {

    const Left = ArrowLeftCircleIcon;
    const Right = ArrowRightCircleIcon;
    const [swiper, setSwiper] = useState(null);

    const next = () => {
        swiper.slidePrev();
    }

    const back = () => {
        swiper.slideNext();
    }

    return (
        <>
            <div className=' gap-8 flex flex-row justify-between mb-8 max-md:hidden'>
                <div className='rounded-2xl basis-[60%]'>
                    <Image className="rounded-lg h-[400px]" src={gif1} />
                </div>
                <Swiper
                    className='basis-[40%] w-full h-[400px]'
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    onSwiper={(s) => {
                        setSwiper(s);
                    }}
                    modules={[Pagination, Navigation]}

                >
                    <SwiperSlide><Image className="rounded-lg" src={s1} /></SwiperSlide>
                    <SwiperSlide><Image className="rounded-lg" src={s2} /></SwiperSlide>
                    <SwiperSlide><Image className="rounded-lg" src={s3} /></SwiperSlide>

                    <div className='absolute bottom-0 flex justify-start w-full z-30 m-2 gap-2'>
                        <Right onClick={next} className='w-8 text-white cursor-pointer' />
                        <Left onClick={back} className='w-8 text-white cursor-pointer ' />

                    </div>



                </Swiper>
            </div>

            <div className='md:hidden mt-16'>
            <Swiper
                    className='w-full'
                    slidesPerView={1}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    onSwiper={(s) => {
                        setSwiper(s);
                    }}
                    modules={[Pagination, Navigation]}

                >
                    <SwiperSlide><Image className="" src={bm1} /></SwiperSlide>
                    <SwiperSlide><Image className="" src={bm2} /></SwiperSlide>
                    <SwiperSlide><Image className="" src={bm3} /></SwiperSlide>
                    <SwiperSlide><Image className="" src={bm4} /></SwiperSlide>


            
                </Swiper>
            </div>
        </>
    );
}
export default Swiper1

