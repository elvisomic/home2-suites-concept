export const Benefits = () => {
    return (
        <section className="hidden h-auto md:block mb-24 md:px-12 lg:px-16 xl:px-28 2xl:px-32 3xl:px-72">

            <div className="flex flex-col mt-20 mb-4">
                <h1 className="flex md:text-[36px] 2xl:text-[68px]/28 justify-center font-semibold">Hilton Honors Member Benefits</h1>
                <p className="flex 2xl:text-[20px]/7 mx-86 text-center font-light">Hilton Honors Member Benefits give guests exclusive savings, the ability to earn rewards, and access to convenient digital tools that make every stay easier and more rewarding.</p>
            </div>

            <div className="h-auto md:grid md:grid-cols-3 md:grid-rows-2 md:gap-x-3 md:gap-y-3 md:mt-35">

                <div className="p-5 overflow-y-hidden rounded-lg row-span-2 h-full bg-gray-300 grid grid-rows-[80%_20%]">
                    <div className="bg-white h-full w-full flex justify-center">
                        <img src="src/assets/bentoGrid/Coins-rafiki.png" className="h-120 object-cover" />
                    </div>
                    <div className="max-w-[400px]">
                        <h1 className="text-[24px]/12 font-semibold">Points and Perks</h1>
                        <p className="opacity-90 break-words">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eum aliquam, rem illum quas laborum vitae corporis similique provident</p>
                    </div>
                </div>
                <div className="p-5 rounded-lg col-span-2 h-80 bg-gray-300 grid grid-cols-[70%_30%]">
                    <div className="bg-white h-full w-full flex justify-center">
                        <img src="src/assets/bentoGrid/Hotel Booking-cuate.png" className="h-70" />
                    </div>
                    <div className="mx-4 max-w-[400px]">
                        <h1 className="text-[24px]/12 font-semibold">Points and Perks</h1>
                        <p className="opacity-90 break-words">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eum aliquam, rem illum quas laborum vitae corporis similique provident</p>
                    </div>

                </div>
                <div className="p-5 rounded-lg h-80 bg-gray-300 grid grid-rows-[60%_40%]">
                    <div className="bg-white h-full w-full flex  px-4 overflow-y-hidden">
                        <img src="src/assets/bentoGrid/Date picker-amico.png" className="h-40" />
                    </div>
                    <div className="max-w-[400px]">
                        <h1 className="text-[24px]/12 font-semibold">Points and Perks</h1>
                        <p className="opacity-90 break-words">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eum aliquam, rem illum quas laborum vitae corporis similique provident</p>
                    </div>

                </div>
                <div className="p-5 rounded-lg h-80 bg-gray-300 grid grid-rows-[60%_40%]">
                    <div className="bg-white h-full w-full flex justify-center">
                        <img src="src/assets/bentoGrid/room.png" className="h-40" />
                    </div>
                    <div className="max-w-[400px]">
                        <h1 className="text-[24px]/12 font-semibold">Points and Perks</h1>
                        <p className="opacity-90 break-words">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eum aliquam, rem illum quas laborum vitae corporis similique provident</p>
                    </div>

                </div>
            </div>
        </section>
    )
}