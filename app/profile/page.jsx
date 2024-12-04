import Logo from "../components/logo"

const Profile = () => {
    return (

        <div className="flex flex-col justify-center p-20 max-md:h-screen max-md:p-2 ">
            <div className="bg-[#219f5d] shadow-2xl rounded-lg flex flex-col justify-center p-12">

                <h1 className="text-white text-center text-2xl p-2 max-md:text-[16px] ">ورود یا ثبت نام</h1>
                <h1 className="text-white text-center text-xs p-2">لطفا برای ادامه شماره همراه خود را وارد نمایید</h1>
                <input type="tel" placeholder="شماره موبایل" className=" text-center w-1/4 m-auto p-3 mt-2 rounded-lg text-[12px] max-md:w-full"/>
                <button className="m-auto w-1/4 p-2 bg-white mt-2 rounded-lg text-[#219f5d] max-md:w-full">ادامه</button>
            </div>
        </div>




    )
}
export default Profile