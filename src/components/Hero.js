
import Slider from "react-slick";
import React, { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import {useWindowWidth,} from '@react-hook/window-size'

export default function Hero() {

  const onlyWidth = useWindowWidth()

  const [selected, setSelected] = useState('AZ');

  const  phones = {
    US: '+1',
    DE: '4',
    AZ: '+994',
    TR: '+90',
    BR: '+45',
    GR: '+12',
    SR: '+16',
    FR: '+9',
    RU: '+72'
  }

    const settings = {
        dots: false,
        infinite: true,  
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3500,
        cssEase: "linear"
      };
  return (
    <div className='relative h-auto md:h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10'>
 {onlyWidth >= 768 && <Slider {...settings}>
          <div className=''>
            <img className='w-full h-[500px] object-cover' src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg" alt="" />
          </div>
          <div>
            <img className='w-full h-[500px] object-cover' src="https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg" alt="" />
          </div>

          <div>
              <img className='w-full h-[500px] object-cover' src="https://getir.com/_next/static/images/getir-mainpage-3-ffd1e98c5da51809f9adcc3a4a37d751.jpg" alt="" />
          </div>
          
          
        </Slider>}
        <div className='md:container flex justify-between items-center relative md:absolute top-0 left-0 md:left-1/2 translate-x-0  md:-translate-x-1/2 h-full  z-40'>
        <div className="hidden md:block">
          <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="" />
          <h3 className='mt-8 text-4xl font-semibold text-white '>Dakikalar içinde <br /> kapınızda</h3>
        </div>
        <div className='w-full md:w-[400px] md:rounded-lg bg-gray-50 p-6 '>
          <h4 className='text-primary-brand-color text-center font-semibold mb-4'>Giriş yap veya kayıt ol</h4>
          <div className='flex gap-x-2'>
          <ReactFlagsSelect
    countries={Object.keys(phones)}
    customLabels={phones}
    className="menu-flags"
    selected={selected}
    onSelect={code => setSelected(code)}/>

    <label className="flex-1 relative mb-7 group cursor-pointer ">
      <input  required className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors group-hover:border-primary-brand-color focus:border-brand-color   text-sm peer pt-2 cursor-pointer"  />
      <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-600 transition-all peer-focus:h-7 peer-focus:text-brand-color peer-valid:text-xs   peer-valid:h-7 peer-valid:text-brand-color peer-focus:text-xs ">Telefon numarasi</span>
    </label>
    
          </div>
          <button className="bg-brand-yellow text-primary-brand-color transition-colors hover:bg-primary-brand-color hover:text-brand-yellow h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold ">Telefon numarasi ile devam et</button>
        </div>
          </div>
    </div>
  )
}
