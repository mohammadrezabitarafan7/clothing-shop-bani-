'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { useRef, useState } from 'react';
const TestSwiper = () => {
    const [swiper, setSwiper] = useState(null);
    const rr = () => {
        swiper.slidePrev();
    }
    const back = () => {
        swiper.slideNext();
    }
    return (
        <div className='relative'>
            <Swiper
                spaceBetween={3}
                slidesPerView={3}
                loop={true}
                modules={[Pagination, Navigation]}
                onSwiper={(s) => {
                    setSwiper(s);
                }}>
                <SwiperSlide>dssds</SwiperSlide>
                <SwiperSlide>24234234234</SwiperSlide>
                <SwiperSlide>vcbcvbfgdf4554</SwiperSlide>
                <SwiperSlide>vcbcvbfgdf4554</SwiperSlide>
                <SwiperSlide>vcbcvbfgdf4554</SwiperSlide>
                <div className='absolute bottom-0 flex justify-start w-full z-30 m-2 gap-2'>
                    <button onClick={rr} className='p-3 text-[16px] bg-red-600 cursor-pointer'>next</button>
                    <button onClick={back} className='p-3 text-[16px] bg-red-600 cursor-pointer'>prev</button>
                </div>
            </Swiper>
        </div>
    )
}
export default TestSwiper