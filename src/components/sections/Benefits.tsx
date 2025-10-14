const Button = () => {
    return (
        <button className="hover:bg-gray-200 transition ease-in-out duration-300 mt-8 h-16 w-50 p-2 rounded bg-gray-300">JOIN HILTON HONORS</button>
    )
}

export const Benefits = () => {
    return (
        <section id="hiltonplus" className="hidden h-auto lg:block mb-20 lg:px-16 xl:px-28 2xl:px-32 3xl:px-72 py-1">

            <div className="flex flex-col mt-20 mb-4">
                <h1 className="flex md:text-[36px] lg:text-[48px] 2xl:text-[68px]/28 justify-center font-semibold">Hilton Honors Member Benefits</h1>
                <p className="flex 2xl:text-[20px]/7 lg:mx-46 xl:mx-86 text-center font-light">Hilton Honors Member Benefits give guests exclusive savings, the ability to earn rewards, and access to convenient digital tools that make every stay easier and more rewarding.</p>
            </div>

            <div className="h-auto lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-x-3 lg:gap-y-3 lg:mt-35">

                <div className="p-5 overflow-y-hidden rounded-lg row-span-2 h-full bg-gray-300 grid grid-rows-[80%_20%]">
                    <div className="bg-white h-full w-full flex justify-center">
                        <img src="/home2-suites-concept/assets/bentoGrid/Coins-rafiki.png" className="h-120 object-cover" />
                    </div>
                    <div className="2xl:max-w-[400px]">
                        <h1 className="text-[24px]/12 font-semibold">Points and Perks</h1>
                        <p className="opacity-90 break-words">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eum aliquam, rem illum quas laborum vitae corporis similique provident</p>
                    </div>
                </div>
                <div className="p-5 rounded-lg col-span-2 lg:h-105 xl:h-90 2xl:h-80 bg-gray-300 grid grid-cols-[70%_30%]">
                    <div className="bg-white h-full w-full flex justify-center">
                        <img src="/home2-suites-concept/assets/bentoGrid/Hotel Booking-cuate.png" className="h-70" />
                    </div>
                    <div className="mx-4 2xl:max-w-[400px]">
                        <h1 className="text-[24px]/12 font-semibold">Points and Perks</h1>
                        <p className="opacity-90 break-words">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eum aliquam, rem illum quas laborum vitae corporis similique provident</p>
                    </div>

                </div>
                <div className="p-5 rounded-lg lg:h-105 xl:h-90 2xl:h-80 bg-gray-300 grid grid-rows-[60%_40%]">
                    <div className="bg-white h-full w-full flex  px-4 overflow-y-hidden">
                        <img src="/home2-suites-concept/assets/bentoGrid/Date picker-amico.png" className="h-40" />
                    </div>
                    <div className="2xl:max-w-[400px]">
                        <h1 className="text-[24px]/12 font-semibold">Points and Perks</h1>
                        <p className="opacity-90 break-words">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eum aliquam, rem illum quas laborum vitae corporis similique provident</p>
                    </div>

                </div>
                <div className="p-5 rounded-lg lg:h-105 xl:h-90 2xl:h-80 bg-gray-300 grid grid-rows-[60%_40%]">
                    <div className="bg-white h-full w-full flex justify-center">
                        <img src="/home2-suites-concept/assets/bentoGrid/room.png" className="h-40" />
                    </div>
                    <div className="2xl:max-w-[400px]">
                        <h1 className="text-[24px]/12 font-semibold">Points and Perks</h1>
                        <p className="opacity-90 break-words">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eum aliquam, rem illum quas laborum vitae corporis similique provident</p>
                    </div>

                </div>
            </div>

            <div className="mt-40 h-120 w-full">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="lg:text-[36px] 2xl:text-[48px]/28 font-semibold">Do you want to become member?</h1>
                    <p className="2xl:text-[20px]/7 lg:mx-46 xl:mx-86 text-center font-light">Join Hilton Honors for free and enjoy exclusive benefits from your very first stay — special member rates, free Wi-Fi, late checkout, and the chance to earn points toward free nights and rewards.</p>
                    <Button />
                </div>
            </div>
        </section>
    )
}