'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../components/Swiper.css';
import { Pagination, Navigation } from 'swiper/modules';
import Image from "next/image"
import offer from '../../public/images/offer.png'
import MyTimer from "../components/timer"
import {
    ChevronLeftIcon, ChevronRightIcon
} from '@heroicons/react/24/solid';
import s1 from '../../public/images/s1.png'
import s2 from '../../public/images/1706606491.png'
import s3 from '../../public/images/1706705085.png'
import { useState } from 'react';
import FF from './ff'
import p1 from '../../public/images/p1.jpg'
import p2 from '../../public/images/p2.jpg'
import p3 from '../../public/images/p3.jpg'
import p4 from '../../public/images/p4.jpg'
import sh from '../../public/images/shirts.png'
import Link from 'next/link';

const AmazingOffer = () => {
    const Left = ChevronLeftIcon;
    const Right = ChevronRightIcon;
    const [swiper, setSwiper] = useState(null);
    const next = () => {
        swiper.slidePrev();
    }
    const back = () => {
        swiper.slideNext();
    }
    const time = new Date();
    time.setSeconds(time.getSeconds() + 6000);
    const products = [
        {
            price: "750,000",
            titel: "پیراهن مردانه جوتی جینز رنگ آبی قرمز و مشکی",
            lastprice: "1,250,000",
            discount: "20%",
            brand: "Cotton",
            image: sh
        },
        {
            price: "1,399,000",
            titel: "کیف دو کاره زنانه بیسراک",
            lastprice: "560,000",
            discount: "60%",
            brand: "Bisrak",
            image: p1
        }, {
            price: "750,000",
            titel: "پالتو مردانه بوفالو",
            lastprice: "1,400,000",
            discount: "15%",
            brand: "Ballon",
            image: p2

        }, {
            price: "750,000",
            titel: "ساعت مچی مردانه اسکمی",
            lastprice: "1,400,000",
            discount: "15%",
            brand: "Skemi",
            image: p3
        },
        {
            price: "2,250,000",
            titel: "ساعت مچی عقربه ای مردانه ",
            lastprice: "2,025,000",
            discount: "10٪",
            brand: "Megir",
            image: p4
        }
    ]
    return (
        <div className="felx flex-col justify-center mt-20 ">
            <div className="flex flex-row justify-between m-auto my-4">
                <Image src={offer} className="w-[306px] max-md:w-[125px] max-md:h-[30px]" />
                <MyTimer expiryTimestamp={time} />
            </div>
            {/* Swiper  */}
            <div className='relative py-7 '>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    onSwiper={(s) => {
                        setSwiper(s);
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 4
                        }
                    }}
                    modules={[Pagination, Navigation]}>
                    {products.map(i =>
                        // <SwiperSlide><FF products={products}/></SwiperSlide>
                        <SwiperSlide>
                            <Link href="" className="flex flex-col w-full m-auto mt-7 gap-4">
                                <div className="relative">
                                    <Image className="rounded-md h-80 max-md:h-auto " src={i.image} />
                                    <div className="bg-[#f16422] absolute top-8 left-0 w-16 h-10 rounded-r-[30px] flex max-md:w-[25px] max-md:rounded-none max-md:top-2 max-md:h-[25px]">
                                        <span className="m-auto content-center text-center text-[12px] text-white font-semibold max-md:text-[8px]
                 max-md:font-thin">{i.discount}</span>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between max-md:flex-col">
                                    <span className="text-[18px] font-semibold my-auto">{i.brand}</span>
                                    <h3 className="text-[12px] text-[#666] md:hidden ">{i.titel}</h3>
                                    <span className="text-[8px] text-[#8c8c8c] my-auto line-through font-medium">{i.lastprice}</span>
                                    <span className="text-[8px] font-bold text-green-500 my-auto md:hidden">{i.price}</span>
                                </div>
                                <div className="flex flex-row justify-between max-md:hidden">
                                    <h3 className="text-[14px] text-[#666] truncate max-w-[180px]">{i.titel}</h3>
                                    <span className="text-[13px] font-bold text-green-500 my-auto">{i.price}</span>
                                </div>
                            </Link>
                        </SwiperSlide>
                    )}
                    {/* <SwiperSlide className=''><Image className="rounded-lg" src={s2} /></SwiperSlide>
                    <SwiperSlide className=''><Image className="rounded-lg" src={s3} /></SwiperSlide>
                    <SwiperSlide className=''><Image className="rounded-lg" src={s3} /></SwiperSlide>
                    <SwiperSlide className=''><Image className="rounded-lg" src={s3} /></SwiperSlide>
                    <SwiperSlide className=''><Image className="rounded-lg" src={s3} /></SwiperSlide> */}
                </Swiper>
                <Left onClick={back} className='w-8  absolute -left-12 bottom-1/2 text-gray-400 cursor-pointer hover:text-green-500 max-md:hidden' />
                <Right onClick={next} className='w-8 text-gray-400 cursor-pointer mt-0
                    absolute -right-12 bottom-1/2 z-50 hover:text-green-500 max-md:hidden'/>
            </div>
            <button className="
            m-auto rounded-full flex border-2 border-gray-300 py-3 px-28
                  text-green-500  font-bold   hover:border-green-500 my-12
                       max-md:hidden ">مشاهده همه</button>
            <button className="
            m-auto rounded-sm flex text-[8px] p-[12px] border-gray-300 bg-[#f164221a]
                  text-[#f16422]  font-bold  md:hidden 
           ">مشاهده همه شگفت انگیز های روز</button>
        </div>
    )
}
export default AmazingOffer