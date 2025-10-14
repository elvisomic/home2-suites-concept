

export const Ammenities = () => {
    return (
        <section className="px-2 sm:px-6 md:px-12 lg:px-16 xl:px-28 2xl:px-32 3xl:px-72 h-auto overflow-hidden ">
            <div className="font-semibold w-full flex items-center justify-center h-30 text-[68px]">
                <h1>AMMENITIES</h1>
            </div>
            <div className="grid grid-cols-[49%_2%_49%] w-full h-full mt-10">
                <div className="mt-39 font-light flex flex-wrap gap-y-20 h-50 3xl:max-w-[620px] max-w-[500px]">
                    <h1 className="text-[24px] font-coreR">Suites within walking distance of Broadway</h1>
                    <p className="text-[16px] lg:text-[20px]"> Stay in the heart of Times Square, steps from Broadway, the subway, and a world of dining. Iconic spots like Macy's, the Empire State Building, Grand Central, Madison Square Garden, and Penn Station are all within a mile. Enjoy complimentary WiFi and breakfast, a fully equipped fitness center, business services, and unwind at our Rooftop Lounge or Lobby Bar. </p>
                </div>

                <div className="h-full flex items-center justify-center">
                    <div className="w-1/10 h-180 lg:h-130 bg-bg"></div>
                </div>

                <div className="mt-9 h-full grid grid-cols-2 grid-rows-10 md:grid-cols-3 md:grid-rows-4 gap-x-6 lg:gap-x-16  md:gap-x-16 gap-y-8 py-38 sm:px-2 md:px-4 xl:px-6 xl:whitespace-nowrap">
                    <div className="col-span-2 md:col-span-3">
                        <h1 className="text-[24px] -mt-8 font-coreR">Our ammenities</h1>
                    </div>
                    <div className="flex flex-row items-center whitespace-nowrap gap-x-2 md:gap-x-1 lg:gap-x-2">
                        <img src="home2-suites-concept/assets/svg/breakfast.svg" className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 p-1" />
                        <p className="inline-block text-[11px] xl:text-[16px] ">Free Hot <br/> Breakfast</p>
                    </div>
                    <div className="flex flex-row items-center whitespace-nowrap gap-x-2 md:gap-x-1 lg:gap-x-2">
                        <img src="home2-suites-concept/assets/svg/kitchen.svg" className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 p-1 " />
                        <p className="inline-block text-[11px] xl:text-[16px] ">In-Room <br className="2xl:hidden" />Kitchen</p>
                    </div>
                    <div className="flex flex-row items-center whitespace-nowrap gap-x-2 md:gap-x-1 lg:gap-x-2">
                        <img src="home2-suites-concept/assets/svg/gym.svg" className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 p-1" />
                        <p className="inline-block text-[11px] xl:text-[16px] ">Fitness<br className="md:hidden" /> Center</p>
                    </div>
                    <div className="flex flex-row items-center whitespace-nowrap gap-x-2 md:gap-x-1 lg:gap-x-2">
                        <img src="home2-suites-concept/assets/svg/extended-stay.svg" className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 p-1" />
                        <p className="inline-block text-[11px] xl:text-[16px] ">Extended <br className="2xl:hidden" /> Stay</p>
                    </div>
                    <div className="flex flex-row items-center whitespace-nowrap gap-x-2 md:gap-x-1 lg:gap-x-2">
                        <img src="home2-suites-concept/assets/svg/pets.svg" className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 p-1" />
                        <p className="inline-block text-[11px] xl:text-[16px] ">Pet-Friendly <br className="2xl:hidden" /> Rooms</p>
                    </div>
                    <div className="flex flex-row items-center whitespace-nowrap gap-x-2 md:gap-x-1 lg:gap-x-2">
                        <img src="home2-suites-concept/assets/svg/digital-key.svg" className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 p-1" />
                        <p className="inline-block text-[11px] xl:text-[16px] ">Digital Key</p>
                    </div>
                    <div className="flex flex-row items-center whitespace-nowrap gap-x-2 md:gap-x-1 lg:gap-x-2">
                        <img src="home2-suites-concept/assets/svg/smoking.svg" className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 p-1" />
                        <p className="inline-block text-[11px] xl:text-[16px]">Non-Smoking <br className="2xl:hidden" /> Rooms</p>
                    </div>
                    <div className="flex flex-row items-center whitespace-nowrap gap-x-2 md:gap-x-1 lg:gap-x-2">
                        <img src="home2-suites-concept/assets/svg/wifi.svg" className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 p-1" />
                        <p className="inline-block text-[11px] xl:text-[16px] ">Free Wi-Fi</p>
                    </div>
                    <div className="flex flex-row items-center whitespace-nowrap justify-center md:justify-start gap-x-2 md:gap-x-1 lg:gap-x-2 col-span-2 md:col-span-1">
                        <img src="home2-suites-concept/assets/svg/entertainment.svg" className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 p-1" />
                        <p className="inline-block text-[11px] xl:text-[16px] ">Entertainment</p>
                    </div>
                </div>
            </div>

            <div className="w-full h-240">
                <div className="grid grid-rows-2 md:grid-cols-2 h-full w-full">
                    <div className="h-120 w-full flex justify-center">
                        <img src="home2-suites-concept/assets/rooftopBar.jpg" className="mt-4 rounded-lg object-cover h-120 w-full" />
                    </div>

                    <div className="h- w-full flex flex-wrap items-center">
                        <div className="h-50 flex flex-wrap justify-center md:justify-start gap-y-6 mx-4">
                            <h1 className="opacity-70 text-[32px] md:text-[28px] font-coreR">Interlude Rooftop Lounge</h1>
                            <p className="text-[16px] md:text-[16px] lg:text-[20px] font-light">Escape to the sky above Times Square at Interlude Rooftop Lounge. Sip on handcrafted cocktails and share gourmet bites in an elevated atmosphere that's both chic and inviting. Our expert mixologists craft signature drinks with flair, while you take in sweeping views of New York City and enjoy attentive, personalized service.</p>
                        </div>
                        <div className="h-8 w-full mx-4">
                            <div className="flex w-full font-normal">

                                <div className="w-full h-6 flex justify-start">
                                    <h3 className="hidden sm:block">Monday - Sunday</h3>
                                    <h3 className="text-[14px] sm:hidden">MON - SUN</h3>
                                </div>
                                <div className="text-[14px] sm:text-[16px] w-full h-6 flex justify-end">
                                    <h3>6PM - 12AM</h3>
                                </div>
                            </div>
                            <hr className="border-1/3 border-[#AAAD00]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}