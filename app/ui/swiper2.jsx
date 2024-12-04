'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import gif1 from '../../public/images/1705410681.gif'
import s1 from '../../public/images/f3.png'
import s2 from '../../public/images/f1.png'
import s3 from '../../public/images/f2.png'
import cc from '../../public/images/cc.png'

import {
    ArrowLeftCircleIcon, ArrowRightCircleIcon
} from '@heroicons/react/24/solid';

const Swiper2 = () => {
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
        <div className=' gap-8 flex flex-row justify-between mb-8 max-md:hidden'>
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

            <div className='rounded-2xl basis-[60%]'>
                <Image className="rounded-lg h-[400px]" src={cc} />

            </div>
        </div>

    );
}
export default Swiper2

