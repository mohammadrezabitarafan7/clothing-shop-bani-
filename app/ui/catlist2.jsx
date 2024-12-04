import Image from "next/image"
import Link from "next/link"
import c1 from '../../public/images/bed.png'
import c2 from '../../public/images/kids.png'
import c3 from '../../public/images/watch.png'
import c4 from '../../public/images/bed.png'


const CatList2 = () => {

    const catList = [
        {
            title: "کالای خواب و استراحت",
            href: "",
            avatar: c1
        },
        {
            title: "انواع لباس بچه گانه",
            href: "",
            avatar: c2
        },
        {
            title: "انواع ساعت زنانه و مردانه",
            href: "",
            avatar: c3
        },
        {
            title: "لوازم منزل",
            href: "",
            avatar: c4
        }]

    return (
        <div className="flex flex-row justify-around gap-5 mt-20  max-md:hidden">

            {catList.map(i =>
                <Link className="flex flex-col justify-center  transition ease-in-out delay-110 hover:-translate-y-1 hover:scale-90  duration-100" href={i.href}>
                    <Image  className="rounded-lg" src={i.avatar} />
                    
                </Link>
            )}
        </div>
    )
}
export default CatList2