import { useRef } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";

export const RoomCarousel = () => {

  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const rawx = useTransform(scrollYProgress, [0, 1], ["100%", "-300%"]);
  const x = useSpring(rawx, {
        stiffness: 50,
        damping: 16,
        mass: 1
    });


  return (
    <section id="roomsPC" ref={targetRef} className="hidden lg:block relative lg:h-[350vh] xl:h-[400vh] 2xl:h-[450vh]">
      <div className="z-0 sticky top-0 flex items-center h-screen overflow-hidden">

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-[4px] xl:px-[288px] md:px-[60px] lg:px-[80px] 2xl:px-[430px]">
            <h1 className="text-[38px] 2xl:text-[68px]/25 font-semibold ">ACCOMMODATION</h1>
            <p className="2xl:text-[20px]/7 font-light ">Our hotel offers modern, comfortable accommodations with stunning views of Times Square, placing you in the center of New York City's vibrant energy. 
            Just steps from theaters, restaurants, shopping, and cultural landmarks, you'll have everything at your fingertips. 
            Whether enjoying the dazzling city lights from your room or exploring nearby attractions, our prime location ensures an unforgettable stay in the heart of the city.</p>
          </div>

          <motion.div style={{ x }} className="flex gap-[420px]">
            <img className="w-[600px] h-[500px] rounded-[12px] object-cover object-[62%] -translate-y-8" src="/home2-suites-concept/assets/QueenStudio.jpg"></img>
            <img className="h-[420px] rounded-[12px] object-cover object-[55%] translate-y-62" src="/home2-suites-concept/assets/hotel2.jpg"></img>
            <img className="h-[500px] rounded-[12px] object-cover object-[55%] -translate-y-20" src="/home2-suites-concept/assets/DeskInStudio.jpg"></img>
            <img className="h-[300px] rounded-[12px] object-cover object-[55%] translate-y-60 xl:translate-y-80" src="/home2-suites-concept/assets/Toilet2.jpg"></img>
            <img className="h-[390px] rounded-[12px] object-cover object-[55%] -translate-y-25" src="/home2-suites-concept/assets/room.jpg"></img>
            <img className="h-[480px] 2xl:h-[550px] w-auto rounded-[12px] object-cover object-[55%] translate-y-40" src="/home2-suites-concept/assets/QueenCornerRoom.jpg"></img>
            <img className="h-[500px] w-auto rounded-[12px] object-cover object-[55%] -translate-y-28" src="/home2-suites-concept/assets/Toilet1.jpg"></img>
          </motion.div>
        </div>
    </section>
  );
}