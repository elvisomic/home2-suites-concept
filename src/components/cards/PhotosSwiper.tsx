const Slika = ({ src, cName }: { src: string, cName: string }) => {
    return (
        <section>
            <div className="absolute inset-0 bg-black/60 pointer-events-none z-10"></div>
            <img src={src} className={`object-cover w-full transform transition-transform duration-400 hover:scale-120 ${cName} h-140`} />
        </section>
    )
}

const Button = ({ href }: { href?: string }) => {
    return <button className="bg-white h-8 w-20 rounded-2xl text-black shadow-2xl right-0 mr-6 absolute mt-125 z-40 lg:mt-115" >
        <a className="p-2" href={href}>EXPLORE</a>
    </button>
}

const Text = ({ t, cName }: { t: string, cName?: string }) => {
    return <h1 className={`absolute text-[32px] xl:text-[42px] text-white/80 z-20 mt-4 ml-4 xl:ml-8 ${cName}`}>{t}</h1>
}

import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';


import "swiper/css"
import "swiper/css/pagination"
import "/src/index.css"

export const PhotoSwiper = () => {
    return (
        <div className="md:hidden relative flex justify-center h-140 overflow-hidden">

            <Swiper className=""
                slidesPerView={1}
                modules={[Pagination]}
                pagination={{
                    type: 'fraction',
                    el: ".custom-pagination"
                }}
            >
                <div className="custom-pagination !m-4 !z-20"></div>
                <SwiperSlide>
                    <Text t="Freshly baked cookies you can't miss in Manhattan" />
                    <Button />
                    <Slika src="/home2-suites-concept/assets/PhotosSection/cookies.jpg" cName="object-[50%]" />
                </SwiperSlide>
                <SwiperSlide>
                    <Text t="A green oasis in the heart of Manhattan to explore" />
                    <Button />
                    <Slika src="/home2-suites-concept/assets/PhotosSection/centralPark.jpg" cName="" />
                </SwiperSlide>
                <SwiperSlide>
                    <Text t="Unmissable shows lighting up Broadway's legendary stages" />
                    <Button />
                    <Slika src="/home2-suites-concept/assets/PhotosSection/broadway.png" cName="" />
                </SwiperSlide>
                <SwiperSlide>
                    <Text t="Iconic skyline views you'll never forget in Manhattan" />
                    <Button />
                    <Slika src="/home2-suites-concept/assets/PhotosSection/landscape.jpg" cName="object-[73%]" />
                </SwiperSlide>
                <SwiperSlide>
                    <Text t="The world-famous symbol of freedom you must see" />
                    <Button />
                    <Slika src="/home2-suites-concept/assets/PhotosSection/liberty.jpg" cName="object-[30%]" />
                </SwiperSlide>
                <SwiperSlide>
                    <Text t="Picture-perfect views and charm to discover in DUMBO" />
                    <Button />
                    <Slika src="/home2-suites-concept/assets/PhotosSection/dumbo.jpg" cName="" />
                </SwiperSlide>
            </Swiper>



        </div >
    )
}
