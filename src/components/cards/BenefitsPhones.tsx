const Benefit = ({ src, pText, hText, cName }: { src: string, pText: string, hText: string, cName?:string }) => {
    return (
        <div className={`bg-gray-100 grid grid-rows-[40%_60%] overflow-hidden grid-cols-[30%_70%] p-2 ${cName}`} >
            <div className="row-span-2 flex items-center justify-center">
                <img src={`src/assets/svg/${src}`} className="h-16 w-16 bg-gray-200 rounded-full p-2" />
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
        <section className="md:hidden mb-24 px-4 sm:px-6 bg-gray-200 h-auto py-12">
            <div className="flex flex-col mb-12">
                <h1 className="flex text-[28px] sm:text-[44px] justify-center font-light">Hilton Honors Member Benefits</h1>
                <p className="flex mt-4 text-[15px] sm:text-[20px]/7 justify-center font-light">Hilton Honors Member Benefits give guests exclusive savings, the ability to earn rewards, and access to convenient digital tools that make every stay easier and more rewarding.</p>
            </div>
            <div className="grid grid-rows-6 w-full h-140 divide-y divide-bg">
                <Benefit src="dollar.svg" pText="Hilton Honors Discount Rate gives members exclusive savings on stays and lets them earn reward points." hText="Hilton Honors Discount rate" cName="rounded-t-xl" />
                <Benefit src="points.svg" pText="Earn points on every stay and redeem them for free nights, upgrades, and more rewards." hText="Points & Perks" />
                <Benefit src="room.svg" pText="Select your preferred room in advance for a stay that suits you best." hText="Choose Your Room" />
                <Benefit src="checkin.svg" pText="Skip the front desk and check in seamlessly using your phone." hText="Digital Check-In" />
                <Benefit src="honors.svg" pText="Use your points for unique events, travel adventures, and exclusive experiences." hText="Hilton Honors Expiriences" />
                <Benefit src="digital-key.svg" pText="Unlock your room and hotel facilities straight from the Hilton Honors app." hText="Digital Key" cName="rounded-b-xl" />
            </div>
        </section>
    )
}