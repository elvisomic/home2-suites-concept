import { useRef } from "react";
import { motion, useTransform, useScroll, useMotionValueEvent, useSpring } from "framer-motion";
import "locomotive-scroll/dist/locomotive-scroll.css";
import HeroDatePicker from "../cards/HeroDatePicker";
import { BookingPhones } from "../cards/BookingPhones";


export const Hero = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const rawScale = useTransform(
        scrollYProgress,
        [0, 0.25, 0.5, 0.75, 0.9],
        [1, 10, 90, 140, 240]
    );

    const scale = useSpring(rawScale, {
        stiffness: 30,
        damping: 20,
        mass: 1
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {

        const navbar = document.getElementById("navbarID");
        if (!navbar) return;

        if (latest >= 0.70) {
            navbar.style.transition = "opacity 0.5s ease";
            navbar.style.opacity = "1";
        } else {
            navbar.style.opacity = "0";
        }

    });

    const opacity = useTransform(scrollYProgress, [0.99, 1], [1, 0])

    const rawyText = useTransform(scrollYProgress, [0.3, 0.7], ["700%", "0%"])

    const yText = useSpring(rawyText, {
        stiffness: 50,
        damping: 20,
        mass: 1
    })

    const rawyBook = useTransform(scrollYProgress, [0.3, 0.7], ["700%", "1%"])

    const yBook = useSpring(rawyBook, {
        stiffness: 50,
        damping: 20,
        mass: 1
    })

    const opacityOverlay = useTransform(scrollYProgress, [0.5, 0.9], [0, 1])


    return (
        <section ref={targetRef} className=" lg:h-[180vh]">
            <div className="sticky top-0 flex items-center h-screen overflow-hidden bg-[url(home2-suites-concept/assets/EmpireState.jpg)] bg-cover bg-center">


                <motion.div style={{ opacity: opacityOverlay }} className="absolute inset-0 bg-black/40 pointer-events-none z-10"></motion.div>
                <motion.svg style={{ scale, opacity }} className="absolute inset-0 w-full h-full z-20">
                    <motion.g>
                        <mask id="text-mask">
                            <rect width="100%" height="100%" fill="white" />
                            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle"
                                fontSize="7vw" fontWeight="bold" fill="black" fontFamily="">
                                <tspan>NEW YORK CITY</tspan>
                            </text>
                        </mask>
                        <rect width="100%" height="100%" fill="black" mask="url(#text-mask)" />
                    </motion.g>
                </motion.svg>

                <div id="home" className="h-screen">

                    <motion.div style={{ y: yText }} className="hidden lg:block z-10 absolute bottom-45 sm:mx-6 md:mx-12 lg:mx-16 xl:mx-28 2xl:mx-32 3xl:mx-72">
                        <h1 className="text-white text-[64px]">Your Modern Stay in the Heart of Times Square</h1>
                    </motion.div>

                    <div className="md:hidden absolute bottom-12 w-full px-4 z-20">
                        <h1 className="text-white text-[22px] my-4 sm:text-[30px] whitespace">Your Modern Stay in the Heart of Times Square</h1>
                        <BookingPhones />
                    </div>

                    <motion.div style={{ y: yBook }} className="hidden absolute mx-2 sm:mx-6 md:mx-12 lg:mx-16 xl:mx-28 2xl:mx-32 3xl:mx-72 bottom-12 md:flex z-20">
                        <HeroDatePicker />
                    </motion.div>
                </div>
            </div>


        </section>
    )
}