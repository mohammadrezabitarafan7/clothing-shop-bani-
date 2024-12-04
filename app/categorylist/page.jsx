import Image from "next/image"
import mens from '../../public/images/mens.jpg'

const CategoryList = () => {

    return (
        <div className=" grid grid-cols-2 p-2 gap-4">

            <Image src={mens} className="rounded-md"/>
            <Image src={mens} className="rounded-md"/>
            <Image src={mens} className="rounded-md"/>

            <Image src={mens} className="rounded-md"/>




        </div>
    )
}
export default CategoryList