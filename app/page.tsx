'use client'
import Toolbar from './ui/toolbar'
import Swiper1 from './ui/swiper1'
import Banner2 from './ui/swiper2'
import CategoryList from './ui/catlist1'
import AmazingOffer from './ui/amazingoffers'
import CatList2 from './ui/catlist2'
import Services from './ui/services'
import BrandList from './ui/brandlist'
import NewsLogin from './ui/newslogin '
import Footer from './ui/footer.'
import BottomNav from './ui/bottomnav'
import MobileToolbar from './ui/mobiletoolbar'
import Swiper2 from './ui/swiper2'
import BestSeller from './ui/bestseller'
import FF from './ui/ff'



export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <div className='px-28 max-md:px-3'>
        <MobileToolbar />
        <Swiper1 />
        {/* <Swiper2 /> */}
        <CategoryList />
        <AmazingOffer />
        <CatList2 />  
            </div>

      <BrandList />
      <div className='px-28 max-md:px-3'>
        <Services />
        <NewsLogin />
        <Footer />
      </div>

    </main>
  );
}
