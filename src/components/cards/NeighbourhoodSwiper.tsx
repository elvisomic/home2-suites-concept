const Slika = ({ src, cName }: { src: string, cName: string }) => {
    return (
        <section>
            <img src={src} className={`object-cover w-full transform transition-transform duration-400 hover:scale-120 ${cName} h-140`} loading='lazy' />
        </section>
    )
}

const Text = ({ t, cName }: { t: string, cName?: string }) => {
    return <h1 className={`absolute text-[32px] xl:text-[42px] text-neutral-800 z-20 ml-4 xl:ml-8 ${cName}`}>{t}</h1>
}

import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';


import "swiper/css"
import "swiper/css/pagination"
import "/src/index.css"

export const NeighbourhoodSwiper = () => {
    return (
        <section className="lg:hidden relative flex flex-wrap justify-center h-auto overflow-hidden ml-4">
            <div className="flex flex-col mt-20 mb-10 mr-4">
                <h1 className="flex text-[28px] sm:text-[40px] whitespace-nowrap font-semibold">What's Nearby</h1>
                <p className="flex text-[16px]/7 sm:text-[20px] font-light ">Conveniently located, our hotel is surrounded by a variety of attractions, dining options, and local landmarks. Guests can easily explore nearby shops, restaurants, and cultural highlights, making it simple to experience the best of the area during their stay.</p>
            </div>

            <Swiper className=""
                slidesPerView={2.2}
                loop={true}
                spaceBetween={20}
                modules={[Pagination]}
                pagination={{
                    type: 'fraction',
                    el: ".custom-pagination"
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1.2,
                    },
                    768: {
                        slidesPerView: 2.2,
                    }
                }}
            >
                <div className="custom-pagination !m-4 !z-20"></div>
                <SwiperSlide>
                    <Text t="Empire State Building" />
                    <Slika src="/home2-suites-concept/assets/NeighbourhoodSection/EmpireStateBuilding2.jpg" cName="" />
                </SwiperSlide>
                <SwiperSlide>
                    <Text t="Grand Central Terminal" />
                    <Slika src="/home2-suites-concept/assets/NeighbourhoodSection/grandCentral2.jpg" cName="" />
                </SwiperSlide>
                <SwiperSlide>
                    <Text t="The Edge" />
                    <Slika src="/home2-suites-concept/assets/NeighbourhoodSection/edgeTest.avif" cName="" />
                </SwiperSlide>
                <SwiperSlide>
                    <Text t="Vessel" />
                    <Slika src="/home2-suites-concept/assets/NeighbourhoodSection/vesselTest.jpg" cName="" />
                </SwiperSlide>
                <SwiperSlide>
                    <Text t="Times Square" />
                    <Slika src="/home2-suites-concept/assets/NeighbourhoodSection/timesSquare2.jpg" cName="" />
                </SwiperSlide>
                <SwiperSlide>
                    <Text t="Museum of Natural History" />
                    <Slika src="/home2-suites-concept/assets/NeighbourhoodSection/museum2.jpg" cName="" />
                </SwiperSlide>
                <SwiperSlide>
                    <Text t="Central Park" />
                    <Slika src="/home2-suites-concept/assets/NeighbourhoodSection/centralPark2.jpg" cName="" />
                </SwiperSlide>
                <SwiperSlide>
                    <Text t="Flatiron Building" />
                    <Slika src="/home2-suites-concept/assets/NeighbourhoodSection/Flatiron2.jpg" cName="" />
                </SwiperSlide>
                <SwiperSlide>
                    <Text t="Broadway" />
                    <Slika src="/home2-suites-concept/assets/NeighbourhoodSection/BroadwayC.jpg" cName="" />
                </SwiperSlide>
            </Swiper>

        </section>
    )
}
