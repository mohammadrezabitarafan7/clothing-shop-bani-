'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../components/Swiper.css';
import { Pagination, Navigation } from 'swiper/modules';
import Image from "next/image"
import {
    ChevronLeftIcon, ChevronRightIcon
} from '@heroicons/react/24/solid';
import b1 from '../../public/images/b1.png'
import b2 from '../../public/images/b2.png'
import b3 from '../../public/images/b3.png'
import b4 from '../../public/images/b4.png'
import b5 from '../../public/images/b5.png'
import b6 from '../../public/images/b6.png'
import b7 from '../../public/images/b7.jpg'
import b8 from '../../public/images/b8.jpg'
import b9 from '../../public/images/b9.jpg'



import { useState } from 'react';

const BrandList = () => {
    const Left = ChevronLeftIcon;
    const Right = ChevronRightIcon;
    const [swiper, setSwiper] = useState(null);
    const barnds = [
        {
            image: b1
        },
        {
            image: b2
        },

        {
            image: b3
        },

        {
            image: b4
        },

        {
            image: b5
        },

        {
            image: b6
        },

        {
            image: b7
        },

        {
            image: b8
        },
        {
            image: b9
        },



    ]

    const next = () => {
        swiper.slidePrev();

    }

    const back = () => {
        swiper.slideNext();
    }

    return (
        <div className="flex flex-col bg-[#f9f9f9] gap-5 mt-7 py-9 px-3">
            <div className='flex flex-row justify-between px-6 md:hidden'>
                <h1 className="text-[8px]" >برند های برگزیده</h1>
                <h1 className="text-[8px] text-[#f16422]" >مشاهده همه</h1>

            </div>
            <h1 className="m-auto font-bold text-2xl  max-md:hidden" >برترین برند ها در مایشاپ</h1>
            <div className='relative px-20  max-md:p-0'>
                <Swiper
                    slidesPerView={5}
                    loop={true}
                    spaceBetween={10}
                    onSwiper={(s) => {
                        setSwiper(s);
                    }}
                    modules={[Pagination, Navigation]}
                >
                    {barnds.map(i =>
                        <SwiperSlide className='' >
                            <Image className='m-auto w-36' src={i.image} />
                        </SwiperSlide>

                    )}

                </Swiper>
                <Left onClick={back} className='w-8 
                 absolute left-10 top-1/3 text-gray-400 cursor-pointer hover:text-green-500 max-md:hidden' />
                <Right onClick={next} className='w-8  
                 absolute right-10 top-1/3 text-gray-400 cursor-pointer hover:text-green-500 max-md:hidden' />


            </div >
            <button className="
            m-auto rounded-full flex border-2 border-gray-300 py-3 px-24
                  text-green-500 hover:border-green-500  max-md:hidden

            ">مشاهده همه برند ها</button>
        </div >
    )
}
export default BrandList