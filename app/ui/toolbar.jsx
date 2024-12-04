'use client'
import Link from "next/link"
import LoginButton from '../components/loginbutton'
import SearchBar from '../components/searchbar'
import { ShoppingBagIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { usePathname } from "next/navigation";
import Logo from '../components/logo'
import clsx from "clsx";
const Toolbar = () => {
  const links = [
 
    {
      name: "شگفت انگیز",
      href: "/sdf"
    },
    {
      name: "برند ها",
      href: "/sdf"
    },
    {
      name: "ساعت هوشمند",
      href: "/asd"
    }, {
      name: "لوازم جانبی",
      href: "/sdf"
    },
    {
      name: "کارت هدیه",
      href: "/sdf"
    },
    {
      name: "اکسسوری",
      href: "/sdf"
    },
   
  ]
  const LinkIcon = ShoppingBagIcon;
  const Bars = Bars3Icon;
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-8  p-8 max-md:hidden  ">
      <div className="flex flex-row justify-start">
        {/* first Row in SideNav */}
        <div className="basis-1/4 flex gap-3 justify-start ">
          <Link href="/" className="flex justify-center">
            <LinkIcon className="w-6 my-auto hover:text-red-500" />
          </Link>
          <LoginButton />
        </div>
        <div className="basis-2/4 max-md:basis-full">
          <SearchBar />
        </div>
        <div className="basis-1/4 flex justify-end m-auto  ">
          <Logo />
        </div>
      </div>
      {/* Second Row Link Items */}
      <div className="flex flex-row justify-start  gap-5">
        <div className="hover:text-green-500 flex flex-row gap-3">
          <Bars className="  w-5" />
          <h1 className=" text-sm py-2">دسته بندی کالا</h1>
        </div>
        {links.map(i =>
          <Link className={clsx(
            'flex flex-col px-3 py-2 text-md text-sm  hover:text-green-600',
            {
              '  text-green-500': pathname === i.href,
            },
          )} href={i.href}>{i.name}</Link>
        )}
      </div>
    </div>
  )
}
export default Toolbar