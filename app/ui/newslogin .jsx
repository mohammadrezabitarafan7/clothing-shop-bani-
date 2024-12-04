
import news from '../../public/images/newsletter.png';

const NewsLogin = () => {
    return (
        <div className="bg-[#f8f8f8] flex flex-col pt-14 bgcov max-md:hidden" style={{
            backgroundImage: `url(${news})`, backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
                }}>
            <h1 className="text-[26px] font-medium text-center">ثبت نام در خبر نامه</h1>
            <p className="text-[16px] font-normal text-center">اولین نفری باشید که از جدیدترین محصولات، جشنواره ها و فروش‌های ویژه ما مطلع می شوید</p>
            <div className=" rounded-full bg-white  flex gap-5 flex-row w-1/2 justify-center m-auto p-7 relative top-[52px] ">
                <input className="rounded-full  bg-[#eeeeeeee] w-full py-3  px-4" placeholder="آدرس ایمیل شما" />
                <button className="bg-green-500 text-white px-11 rounded-full hover:bg-green-700">ارسال</button>
            </div>
        </div>
    )
}
export default NewsLogin