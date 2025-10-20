import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation } from 'swiper/modules';

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "/src/index.css"

interface SlidesProp {
  imgSrc: string
}

const slide: SlidesProp[] = [
  { imgSrc: "QueenStudio.jpg" },
  { imgSrc: "hotel2.jpg" },
  { imgSrc: "DeskInStudio.jpg" },
  { imgSrc: "Toilet2.jpg" },
  { imgSrc: "room.jpg" },
  { imgSrc: "QueenCornerRoom.jpg" },
  { imgSrc: "Toilet1.jpg" },
]

export const RoomSwiperPhone = () => {
  return (
    <section id="rooms" className="lg:hidden pl-4 py-4 sm:pl-6 md:pl-12">
      <div className=" h-60 w-full py-12 md:py-6 ">
        <h1 className="font-semibold text-[28px] sm:text-[40px]">ACCOMMODATION</h1>
        <p className="font-light text-[16px] sm:text-[20px]">Modern, comfortable accommodations with stunning Times Square views, steps from theaters,
          restaurants, and landmarks. Your unforgettable New York stay awaits.</p>
      </div>

      <div className="h-130">
        <Swiper
          slidesPerView={2}

          className=''
          spaceBetween={20}
          modules={[Pagination, Navigation]}
          loop={true}
          pagination={{
            el: ".custom-pagination-room",
            type: "fraction",
          }}
          navigation={{
            nextEl: ".customNavNext",
            prevEl: ".customNavPrev",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            500: {
              slidesPerView: 1.5,
            },
            640: {
              slidesPerView: 2,
            }
          }}
        >


          {slide.map((item) => (
            <SwiperSlide key={item.imgSrc}>
              <img
                src={`/home2-suites-concept/assets/room/${item.imgSrc}`}
                className="h-70 w-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mt-10 h-10 flex items-center justify-around mr-4 sm:mr-6 md:mr-12">
          <button className="customNavPrev justify-center text-[28px] font-semibold">&lt;</button>
          <div className="custom-pagination-room w-20 text-center"></div>
          <button className="customNavNext justify-center text-[28px] font-semibold">&gt;</button>
        </div>
      </div>
    </section >
  )
}
