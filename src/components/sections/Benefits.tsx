const Button = () => {
    return (
        <button className="hover:bg-[#AAAD00]/70 transition ease-in-out duration-300 mt-8 h-16 w-50 p-2 rounded bg-[#AAAD00] text-white">JOIN HILTON HONORS</button>
    )
}

export const Benefits = () => {
    return (
        <section id="hiltonplusPC" className="hidden h-auto lg:block mb-20 lg:px-16 xl:px-28 2xl:px-32 3xl:px-72 py-1">

            <div className="flex flex-col mt-20 mb-4">
                <h1 className="flex text-[40px] justify-center font-semibold">Hilton Honors Member Benefits</h1>
                <p className="flex 2xl:text-[20px]/7 lg:mx-46 xl:mx-86 text-center font-light">Hilton Honors Member Benefits give guests exclusive savings, the ability to earn rewards, and access to convenient digital tools that make every stay easier and more rewarding.</p>
            </div>

            <div className="h-auto lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-x-4 lg:gap-y-4 lg:mt-35">

                <div className="p-3 overflow-y-hidden rounded-lg row-span-2 h-full bg-[#F0F2F5] border-1 border-[#E0E0E0] shadow-xl grid grid-rows-[70%_30%] xl:grid-rows-[75%_25%] 2xl:grid-rows-[75%_25%]">
                    <div className="h-full w-full flex justify-center items-end">
                        <img src="/home2-suites-concept/assets/bentoGrid/points.png" className="xl:h-80 2xl:h-100 object-cover" />
                    </div>
                    <div className="2xl:max-w-[400px]">
                        <hr className="border-black/70" />
                        <h1 className="text-[20px] xl:text-[24px]/10 font-semibold">Points and Perks</h1>
                        <p className="opacity-90 break-words">Every stay brings you closer to more rewards. Earn Hilton Honors Points for every night, and enjoy exclusive benefits like free nights, room upgrades, and premium experiences as you move up in membership tiers.</p>
                    </div>
                </div>
                <div className="p-3 rounded-lg col-span-2 lg:h-90 xl:h-90 2xl:h-90 bg-[#F0F2F5] border-1 border-[#E0E0E0] shadow-xl grid grid-cols-[60%_40%] 2xl:grid-cols-[70%_30%] ">
                    <div className="h-full w-full flex justify-center items-center overflow-hidden">
                        <img src="/home2-suites-concept/assets/bentoGrid/Discounts.png" className="h-60 w-90 2xl:h-70 2xl:w-100" />
                    </div>
                    <div className="mx-4 2xl:max-w-[400px]">
                        <h1 className="text-[20px] xl:text-[24px]/10 font-semibold">Discount Rates</h1>
                        <p className="opacity-90 break-words">Loyalty pays off - unlock special discounted rates after 10, 20, and 30 days of stay. The longer you stay with Hilton, the more you save. Check your Hilton Honors benefits to see what's waiting for you.</p>
                    </div>

                </div>
                <div className="p-3 rounded-lg lg:h-90 xl:h-90 2xl:h-90 bg-[#F0F2F5] border-1 border-[#E0E0E0] shadow-xl grid grid-rows-[50%_50%] 2xl:grid-rows-[60%_40%]">
                    <div className="h-full w-full flex px-4 justify-center items-center overflow-y-hidden">
                        <img src="/home2-suites-concept/assets/bentoGrid/digitalKey.png" className="h-50 w-70" />
                    </div>
                    <div className="2xl:max-w-[400px]">
                        <hr className="border-black/70" />
                        <h1 className="text-[20px] xl:text-[24px]/10 font-semibold">Digital Key and Check-In</h1>
                        <p className="opacity-90 break-words">Save time and skip the front desk with Digital Check-In. Use your phone to check in, choose your room, and unlock your door - all through the Hilton Honors app for a seamless arrival experience.</p>
                    </div>

                </div>
                <div className="p-3 rounded-lg lg:h-90 xl:h-90 2xl:h-90 bg-[#F0F2F5] border-1 border-[#E0E0E0] shadow-xl grid grid-rows-[50%_50%] 2xl:grid-rows-[60%_40%]">
                    <div className="h-full w-full flex px-4 justify-center items-center overflow-y-hidden">
                        <img src="/home2-suites-concept/assets/bentoGrid/roomView.png" className="h-50 w-70" />
                    </div>
                    <div className="2xl:max-w-[400px]">
                        <hr className="border-black/70" />
                        <h1 className="text-[20px] xl:text-[24px]/10 font-semibold">Choose Your Room</h1>
                        <p className="opacity-90 break-words">Enjoy the freedom to select the perfect room before you arrive. Whether you prefer a high floor, a specific view, or proximity to amenities, you're in control of your stay from the start.</p>
                    </div>

                </div>
            </div>

            <div className="mt-40 h-120 w-full">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-[28px] font-semibold">Do you want to become member?</h1>
                    <p className="2xl:text-[20px]/7 lg:mx-46 xl:mx-86 text-center font-light">Join Hilton Honors for free and enjoy exclusive benefits from your very first stay — special member rates, free Wi-Fi, late checkout, and the chance to earn points toward free nights and rewards.</p>
                    <Button />
                </div>
            </div>
        </section>
    )
}