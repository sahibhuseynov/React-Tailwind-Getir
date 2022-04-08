import React from 'react'

const MobileApp = () => {
  return ( 
    <div className='container flex justify-between items-center mx-auto bg-brand-color bg-mobile-app   mt-7 rounded-lg text-white  '> 
    <div className='flex flex-col gap-y-3 p-10'>
        <h3 className=' font-bold text-2xl'>Getir'i indirin!</h3>
        <p className='font-semibold'> İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.</p>
        <nav className='mt-5 flex gap-x-2'>
            <a href="#" className='transition-all transform hover:scale-105'><img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="" /></a>
            <a href="#" className='transition-all transform hover:scale-105'><img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" /></a>
            <a href="#" className='transition-all transform hover:scale-105'><img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" /></a>
        </nav>
    </div>
    <div className='pt-6'>
        <img src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png" alt="" />
    </div>
     </div>
  )
}

export default MobileApp