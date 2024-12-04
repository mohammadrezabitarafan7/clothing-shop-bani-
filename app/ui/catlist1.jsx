import Image from "next/image"
import c1 from '../../public/images/shirt.png'
import c2 from '../../public/images/perfume.png'
import c3 from '../../public/images/sofa.png'
import c4 from '../../public/images/acsseory.png'
import c5 from '../../public/images/jacket.png'
import c6 from '../../public/images/gift.png'
import Link from "next/link"

const CategoryList = () => {


    const catList = [
        {
            title: "کاپشن و پالتو",
            href: "",
            avatar: c5
        },
        {
            title: "تیشرت و پیراهین",
            href: "",
            avatar: c1
        },
        {
            title: "اکسسوری",
            href: "",
            avatar: c4
        },
        {
            title: "لوازم منزل",
            href: "",
            avatar: c3
        },
        {
            title: "عطر و ادکلن",
            href: "",
            avatar: c2
        },
        {
            title: "کارت هدیه",
            href: "",
            avatar: c6
        },
    ]

    return (
        <div className="grid grid-cols-3 grid-rows-2 gap-4 md:flex md:flex-row md:justify-between md:gap-5 ">
            {catList.map(i =>

                <Link href="" className="flex flex-col justify-center transition ease-in-out delay-70 hover:-translate-y-1 hover:scale-90  duration-100 ">
                    <Image width={180} src={i.avatar} />
                
                </Link>
            )}


        </div>
    )
}
export default CategoryList