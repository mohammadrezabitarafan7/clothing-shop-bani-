import Image from "next/image"
import i1 from '../../public/images/1.jpg'
import i2 from '../../public/images/i2.png'
import i3 from '../../public/images/3.jpg'
import i4 from '../../public/images/4.jpg'
import bac from '../../public/images/featurebg.png'

const Services = () => {
    return (

        <div className="flex flex-col max-md:mt-4">

            <div className="flex flex-col gap-5 md:hidden">
                <div className="flex flex-row justify-between">
                    <span className="text-[8px] font-bold">میزبان صدای گرمتان هستیم</span>
                    <span className="text-[8px]">۷روز هفته ۲۴ ساعته</span>
                </div>
                <span className="text-[8px] text-[#494c52]">021-88773322</span>
                <span className="text-[8px] text-[#494c52]">30003434</span>
                <span className="text-[8px] text-[#494c52]">develper@develop@gmail.com</span>
            </div>

            <div className="flex flex-row justify-around my-20">
                <div className=" flex flex-col  justify-center  content-center text-center">
                    <Image className="m-auto w-24 max-md:w-9" src={i1} />
                    <p className="text-[20px] max-md:text-[13px] max-md:font-thin max-md:leading-5 ">ارسال سریع و رایگان</p>
                </div>
                <div className="flex flex-col justify-center  text-center ">
                    <Image className="m-auto w-24 max-md:w-9" src={i2} />
                    <p className="text-[20px] max-md:text-[13px] max-md:font-thin max-md:leading-5">ضمانت بازگشت کالا</p>
                </div>
                <div className="flex flex-col justify-center  text-center">
                    <Image className="m-auto w-24 max-md:w-9" src={i3} />
                    <p className="text-[20px] max-md:text-[13px] max-md:font-thin max-md:leading-5">خدمات پس از خرید</p>
                </div>
                <div className="flex flex-col justify-center  text-center">
                    <Image className="m-auto w-24 max-md:w-9" src={i4} />
                    <p className="text-[20px] max-md:text-[13px] max-md:font-thin max-md:leading-5">ضمانت اصالت</p>
                </div>
            </div>
        </div>
    )
}
export default Services