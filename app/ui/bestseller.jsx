'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Image from "next/image"
import {
    ChevronLeftIcon, ChevronRightIcon
} from '@heroicons/react/24/solid';
import s1 from '../../public/images/s1.png'
import s2 from '../../public/images/1706606491.png'
import s3 from '../../public/images/1706705085.png'
import { useState } from 'react';
const BestSeller = () => {
    const Left = ChevronLeftIcon;
    const Right = ChevronRightIcon;
    const [swiper, setSwiper] = useState(null);


    const next = () => {
        swiper.slidePrev();

    }

    const back = () => {
        swiper.slideNext();
    }

    return (
        <div className="flex flex-col gap-7 mt-6 max-md:hidden">
            <h1 className='text-center text-2xl font-semibold m-0'>پرفروش ترین محصولات</h1>
            <div className='relative py-2'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
                    onSwiper={(s) => {
                        setSwiper(s);
                    }}
                    modules={[Pagination, Navigation]}
                >
                    <SwiperSlide className=''><Image className="rounded-lg " src={s1} /></SwiperSlide>
                    <SwiperSlide className=''><Image className="rounded-lg" src={s2} /></SwiperSlide>
                    <SwiperSlide className=''><Image className="rounded-lg" src={s3} /></SwiperSlide>
                    <SwiperSlide className=''><Image className="rounded-lg" src={s3} /></SwiperSlide>
                    <SwiperSlide className=''><Image className="rounded-lg" src={s3} /></SwiperSlide>
                    <SwiperSlide className=''><Image className="rounded-lg" src={s3} /></SwiperSlide>
                </Swiper>
                <Left onClick={back} className='w-8  absolute -left-12 bottom-1/2 text-gray-400 cursor-pointer hover:text-green-500' />
                <Right onClick={next} className='w-8 text-gray-400 cursor-pointer mt-0
                    absolute -right-12 bottom-1/2 z-50 hover:text-green-500'/>
            </div>
            <button className="
            m-auto rounded-full flex border-2 border-gray-300 py-3 px-28
                  text-green-500  font-bold   hover:border-green-500 my-12
            
            ">مشاهده همه</button>
        </div>

    )
}
export default BestSeller