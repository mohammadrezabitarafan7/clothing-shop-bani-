import Image from "next/image"
import Link from "next/link"
import e1 from '../../public/images/logo-itehad@2x - Copy.png'
import e2 from '../../public/images/enamad-logo-274x300 - Copy_prev_ui (1).png'
import e3 from '../../public/images/samandehi.png@2x.png'
import Logo from '../components/logo'
import Icon from '../components/icon'



const Footer = () => {

    const catlist = [
        {
            title: "لباس مردانه",
            href: ""
        },
        {
            title: "لباس زنانه",
            href: ""
        },
        {
            title: "لباس بچه گانه",
            href: ""
        },
        {
            title: "لوازم آرایشی",
            href: ""
        },
        {
            title: "اکسسوری",
            href: ""
        },
    ]
    return (

        <div className="flex flex-col mt-16 border-t-4 border-[#f9f9f9]  max-md:hidden">

            <div className="flex flex-row justify-between mt-10">

                <div className="basis-1/6  flex flex-col gap-8">
                    <h1 className="text-[16px] font-bold text-[#808080]">خرید</h1>
                    {catlist.map(i =>
                        <Link className="text-sm font-medium text-black hover:text-green-500 hover:underline" href={i.href}>{i.title}</Link>
                    )}
                </div>

                <div className="basis-1/6  flex flex-col gap-8">
                    <h1 className="text-[16px] font-bold text-[#808080]">خدمات مشتریان</h1>
                    <Link className="text-sm font-medium text-black hover:text-green-500 hover:underline" href="">پرسش های متداول</Link>
                    <Link className="text-sm font-medium text-black hover:text-green-500 hover:underline" href="">شرایط بازگشت</Link>
                    <Link className="text-sm font-medium text-black hover:text-green-500 hover:underline" href="">راهنمای خرید</Link>
                    <Link className="text-sm font-medium text-black hover:text-green-500 hover:underline" href="">سنجش رضایتمندی</Link>
                </div>

                <div className="basis-1/6 flex flex-col gap-8">
                    <h1 className="text-[16px] font-bold text-[#808080]">اطلاعات</h1>
                    <Link className="text-sm font-medium text-black hover:text-green-500 hover:underline" href="">درباره ما</Link>
                    <Link className="text-sm font-medium text-black hover:text-green-500 hover:underline" href="">قوانین ومقررات</Link>
                    <Link className="text-sm font-medium text-black hover:text-green-500 hover:underline" href="">تماس با ما</Link>
                    <Link className="text-sm font-medium text-black hover:text-green-500 hover:underline" href="">همکاری تجاری</Link>
                </div>

                <div className="basis-1/4 flex flex-col gap-8">
                    <h1 className="text-[16px] font-bold text-[#808080]">میزبان صدای گرمتان هستیم</h1>
                    <p> 7 روز هفته - 24 ساعته</p>
                    <div className="flex flex-row justify-start gap-2">
                        <span>تلفن : </span> <Link className=" text-black hover:text-green-500" href="">021-12345
                        </Link>
                        <span>پیامک : </span> <Link className=" text-black hover:text-green-500" href="">1000123
                        </Link>
                    </div>
                    <div className="flex flex-row justify-start gap-2">
                        <span>ایمیل : </span> <Link className=" text-black hover:text-green-500" href="">myshop@myshop.com
                        </Link>
                    </div>
                </div>

                <div className="basis-1/4 flex flex-col gap-9">
                    <div className="mx-auto">
                        <Logo />
                    </div>
                    <div className="flex flex-row justify-center gap-2">

                        <Link href="">
                            <div className="hover:fill-green-500 hover:border-green-500 border-[1px] border-black rounded-full p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                                    <path d="M 15.173828 2.609375 C 11.917119 2.5264688 8.94875 4.7335781 8.1875 8.0332031 L 7.078125 12.837891 C 10.172125 7.7938906 15.497719 4.4664844 21.386719 3.8964844 L 16.582031 2.7871094 C 16.110656 2.6782344 15.639072 2.6212187 15.173828 2.609375 z M 23.615234 7 C 16.369702 7.1611924 9.7609531 11.980828 7.6582031 19.314453 C 5.0702031 28.340453 10.289453 37.753797 19.314453 40.341797 C 28.339453 42.929797 37.753797 37.711547 40.341797 28.685547 C 42.929797 19.659547 37.711547 10.246203 28.685547 7.6582031 C 26.993172 7.1729531 25.28728 6.9628018 23.615234 7 z M 35.162109 7.078125 C 40.206109 10.172125 43.533516 15.497719 44.103516 21.386719 L 45.212891 16.582031 C 46.083891 12.811031 43.737797 9.0575 39.966797 8.1875 L 35.162109 7.078125 z M 20.191406 12.589844 C 20.456244 12.610334 20.723031 12.658375 20.988281 12.734375 C 23.111281 13.342375 24.338469 15.556687 23.730469 17.679688 C 23.122469 19.802687 20.906203 21.029875 18.783203 20.421875 C 16.660203 19.813875 15.433969 17.599562 16.042969 15.476562 C 16.575844 13.618937 18.337541 12.446412 20.191406 12.589844 z M 31.726562 15.898438 C 31.991494 15.918996 32.258063 15.966844 32.523438 16.042969 C 34.646437 16.650969 35.874625 18.865281 35.265625 20.988281 C 34.657625 23.110281 32.441359 24.338469 30.318359 23.730469 C 28.195359 23.122469 26.968172 20.908156 27.576172 18.785156 C 28.108172 16.927531 29.872041 15.754527 31.726562 15.898438 z M 24.035156 22.001953 C 25.139156 22.020953 26.017047 22.930156 25.998047 24.035156 C 25.979047 25.139156 25.069844 26.017047 23.964844 25.998047 C 22.860844 25.979047 21.982953 25.069844 22.001953 23.964844 C 22.020953 22.860844 22.930156 21.982953 24.035156 22.001953 z M 16.884766 24.126953 C 17.149697 24.147443 17.416266 24.193531 17.681641 24.269531 C 19.804641 24.877531 21.032828 27.093797 20.423828 29.216797 C 19.814828 31.339797 17.598563 32.566031 15.476562 31.957031 C 13.353562 31.349031 12.125375 29.134719 12.734375 27.011719 C 13.266375 25.154094 15.030244 23.983521 16.884766 24.126953 z M 3.8964844 26.615234 L 2.7871094 31.419922 C 1.9171094 35.190922 4.2622031 38.943453 8.0332031 39.814453 L 12.837891 40.923828 C 7.7948906 37.829828 4.4664844 32.504234 3.8964844 26.615234 z M 28.417969 27.433594 C 28.6829 27.454084 28.951422 27.502125 29.216797 27.578125 C 31.339797 28.186125 32.566031 30.400437 31.957031 32.523438 C 31.348031 34.646437 29.134719 35.873625 27.011719 35.265625 C 24.888719 34.657625 23.661531 32.443313 24.269531 30.320312 C 24.801531 28.462687 26.563447 27.290162 28.417969 27.433594 z M 40.923828 35.162109 C 37.829828 40.205109 32.504234 43.533516 26.615234 44.103516 L 31.419922 45.212891 C 35.190922 46.082891 38.943453 43.737797 39.814453 39.966797 L 40.923828 35.162109 z"></path>
                                </svg>
                            </div>
                        </Link>
                        <Link href="">
                            <div className="hover:fill-green-500 hover:border-green-500 border-[1px] border-black rounded-full p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 24 24">
                                    <path d="M 20.572266 3.0117188 C 20.239891 2.9764687 19.878625 3.028375 19.515625 3.171875 C 19.065625 3.348875 12.014406 6.3150313 5.4414062 9.0820312 L 3.2695312 9.9960938 C 2.4285313 10.337094 2.0039062 10.891672 2.0039062 11.638672 C 2.0039062 12.161672 2.22525 12.871063 3.28125 13.289062 L 6.9472656 14.757812 C 7.2642656 15.708813 8.0005469 17.916906 8.1855469 18.503906 C 8.2955469 18.851906 8.5733906 19.728594 9.2753906 19.933594 C 9.4193906 19.982594 9.5696563 20.007813 9.7226562 20.007812 C 10.165656 20.007812 10.484625 19.801641 10.640625 19.681641 L 12.970703 17.710938 L 15.800781 20.328125 C 15.909781 20.439125 16.486719 21 17.261719 21 C 18.228719 21 18.962234 20.195016 19.115234 19.416016 C 19.198234 18.989016 21.927734 5.2870625 21.927734 5.2890625 C 22.172734 4.1900625 21.732219 3.6199531 21.449219 3.3769531 C 21.206719 3.1694531 20.904641 3.0469688 20.572266 3.0117188 z M 19.910156 5.171875 C 19.533156 7.061875 17.478016 17.378234 17.166016 18.865234 L 13.029297 15.039062 L 10.222656 17.416016 L 11 14.375 C 11 14.375 16.362547 8.9468594 16.685547 8.6308594 C 16.945547 8.3778594 17 8.2891719 17 8.2011719 C 17 8.0841719 16.939781 8 16.800781 8 C 16.675781 8 16.506016 8.1197812 16.416016 8.1757812 C 15.272669 8.8885973 10.404094 11.662239 8.0078125 13.025391 L 4.53125 11.636719 L 6.21875 10.927734 C 10.51775 9.1177344 18.174156 5.893875 19.910156 5.171875 z"></path>
                                </svg>
                            </div>
                        </Link>
                        <Link href="">
                            <div className="hover:fill-green-500 hover:border-green-500 border-[1px] border-black rounded-full p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                                    <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>


            <p className="text-[16px] text-[#808080] font-semibold mb-3"> مرکز خرید آنلاین مای شاپ
            </p>
            <div className="flex flex-row justify-between gap-5">
                <div className="basis-3/5">

                    <p className="justify-center text-justify text-[#888] text-[14px] leading-8">
                        مرکز خرید آنلاین مای شاپ در سال 1393 کار خود را به صورت تخصصی در زمینه پوشاک و سبک زندگی آغاز کرد. در این سال‌ها، مای شاپ با همکاری بیشتر از 700 برند، توانسته است تجربه‌ای خوب از خرید آنلاین لباس و پوشاک برای مخاطبان خود رقم بزند. مهم‌ترین رسالت بانی ‌مد بهبود کیفیت سبک زندگی است و رضایت اکثریت مخاطبان این فروشگاه اینترنتی، گواهی بر این ادعاست؛ رضایتی که پشتوانه‌ای استوار برای تحقق دیگر اهداف بلند مدت  مای شاپ است.
                    </p>
                </div>

                <div className="basis-2/5 flex flex-row justify-between ">
                    <Image src={e1} className="w-[100px] h-[94px]" />
                    <Image src={e2} className="w-[100px] h-[94px]" />
                    <Image src={e3} className="w-[100px] h-[94px]" />


                </div>
            </div>

            <div className="flex flex-row justify-between mt-11">
                <p className="text-[14px]"> © کلیه حقوق این وب سایت متعلق به  مای شاپ است.</p>
                <p className="text-[14px] font-bold">Copyright MyShop.com ©</p>
            </div>
        </div>
    )
}
export default Footer