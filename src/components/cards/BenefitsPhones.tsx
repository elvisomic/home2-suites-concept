const Button = () => {
    return (
        <button className="hover:bg-[#AAAD00]/70 transition ease-in-out duration-300 mt-8 h-16 w-50 p-2 rounded bg-[#AAAD00] text-white">JOIN HILTON HONORS</button>
    )
}

const Benefit = ({ src, pText, hText, cName }: { src: string, pText: string, hText: string, cName?: string }) => {
    return (
        <div className={`bg-gray-100 grid grid-rows-[40%_60%] overflow-hidden grid-cols-[30%_70%] p-2 ${cName}`} >
            <div className="row-span-2 flex items-center justify-center">
                <img src={`/home2-suites-concept/assets/svg/${src}`} className="h-16 w-16 bg-gray-200 rounded-full p-2" />
            </div>

            <div className="flex items-end font-coreR">
                <h2 className="text-[20px]">{hText}</h2>
            </div>

            <div className="flex items-center text-[13px]">
                <p>{pText}</p>
            </div>
        </div>
    )
}

export const BenefitsPhone = () => {
    return (
        <section id="hiltonplus" className="lg:hidden px-4 sm:px-6 bg-gray-200 h-300 py-12">
            <div className="flex flex-col mb-12">
                <h1 className="flex text-[40px] font-semibold">Hilton Honors Benefits</h1>
                <p className="flex mt-4 text-[16px] sm:text-[20px]/7 font-light">Hilton Honors Member Benefits give guests exclusive savings, the ability to earn rewards, and access to convenient digital tools that make every stay easier and more rewarding.</p>
            </div>
            <div className="grid grid-rows-4 w-full h-140 divide-y divide-bg">
                <Benefit src="dollar.svg" pText="Hilton Honors Discount Rate gives members exclusive savings on stays and lets them earn reward points." hText="Hilton Honors Discount" cName="rounded-t-xl" />
                <Benefit src="points.svg" pText="Earn points on every stay and redeem them for free nights, upgrades, and more rewards." hText="Points & Perks" />
                <Benefit src="room.svg" pText="Select your preferred room in advance for a stay that suits you best." hText="Choose Your Room" />
                <Benefit src="checkin.svg" pText="Skip the front desk and check in seamlessly using your phone." hText="Digital Check-In" cName="rounded-b-xl" />
            </div>
            <div className="mt-8 h-80 w-full">
                <div className="flex flex-col">
                    <h1 className="text-[20px]/12 font-semibold">Do you want to become a member?</h1>
                    <p className="sm:text-[20px]/7 font-light">Join Hilton Honors for free and enjoy exclusive benefits from your very first stay — special member rates, free Wi-Fi, late checkout, and the chance to earn points toward free nights and rewards.</p>
                    <div className="w-full flex justify-center">
                        <Button />
                    </div>
                </div>
            </div>
        </section>
    )
}