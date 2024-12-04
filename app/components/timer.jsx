'use client'
import React from 'react';
import { useTimer } from 'react-timer-hook';

const MyTimer = ({ expiryTimestamp }) => {
    const {
      
        seconds,
        minutes,
        hours,
        days,
        } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


    return (
        
        <div className='flex flex-row justify-between gap-2'>
          <p className='m-auto ml-4 text-green-500 font-semibold max-md:hidden'>زمان باقی مانده تا پایان سفارش</p>
            <div className='w-[50px] h-[50px] rounded-sm  bg-[#f16423] flex max-md:w-[35px] max-md:h-[30px]  max-md:bg-white max-md:border-solid border border-[#f16423] '>
                <span className='m-auto text-white font-semibold text-[18px] max-md:text-[16px] max-md:font-thin max-md:text-[#f16423]'>{seconds}</span>
            </div>
            <span className='m-auto text-[32px] font-bold text-[#f16423] max-md:text-[18px]'>:</span>
            <div className='w-[50px] h-[50px] rounded-sm  bg-[#f16423] flex  max-md:w-[35px] max-md:h-[30px]  max-md:bg-white max-md:border-solid border border-[#f16423]'>
                <span className='m-auto text-white font-semibold text-[18px] max-md:text-[16px] max-md:font-thin max-md:text-[#f16423]'>{minutes}</span>
            </div>
            <span className='m-auto text-[32px] font-bold text-[#f16423] max-md:text-[18px]'>:</span>
            <div className='w-[50px] h-[50px] rounded-sm  bg-[#f16423] flex  max-md:w-[35px] max-md:h-[30px]  max-md:bg-white max-md:border-solid border border-[#f16423]'>
                <span className='m-auto text-white font-semibold text-[18px] max-md:text-[16px] max-md:font-thin max-md:text-[#f16423]'>{hours}</span>
            </div>
        </div>
    );
}
export default MyTimer