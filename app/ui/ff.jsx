'use client'
import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";
import sh from '../../public/images/shirts.png'
import Link from "next/link";
import s3 from '../../public/images/1706705085.png'
import p1 from '../../public/images/p1.jpg'
import p2 from '../../public/images/p2.jpg'
import p3 from '../../public/images/p3.jpg'
import p4 from '../../public/images/p4.jpg'


export default function ShowButtonHover(props) {


    const product = props.products;
    // console.log(product)

    const tt = [{
        df: "df",
        dfd: "dff"
    }]


    product.map(i=>{

        console.log(i.title)
    })
    return (

        

        <Link href="" className="flex flex-col w-full m-auto mt-7 gap-4">
            <div className="relative">
                <Image className="rounded-md " src={product.image} />

                <div className="bg-[#f16422] absolute top-8 left-0 w-16 h-10 rounded-r-[30px] flex max-md:w-[25px] max-md:rounded-none max-md:top-2 max-md:h-[25px]">
                    <span className="m-auto content-center text-center text-[12px] text-white font-semibold max-md:text-[8px]
                 max-md:font-thin">20%</span>

                </div>
            </div>
            <div className="flex flex-row justify-between max-md:flex-col">
                <span className="text-[18px] font-semibold my-auto">Cotton</span>
                <h3 className="text-[12px] text-[#666] md:hidden ">پیراهن مردانه جوتی جینز رنگ آبی قرمز و مشکی</h3>
                <span className="text-[8px] text-[#8c8c8c] my-auto line-through font-medium">950,000 تومان</span>
                <span className="text-[8px] font-bold text-green-500 my-auto md:hidden">950,000 تومان</span>

            </div>

            <div className="flex flex-row justify-between max-md:hidden">
                <h3 className="text-[14px] text-[#666] truncate max-w-[180px]">پیراهن مردانه جوتی جینز رنگ آبی قرمز و مشکی</h3>
                <span className="text-[13px] font-bold text-green-500 my-auto">950,000 تومان</span>
            </div>



        </Link>
    );
}