import React from "react"

interface ListProps {
    src?: string,
    title: string,
    carTime: string,
    walkTime: string,
}

const list: ListProps[] = [
    { src: "/home2-suites-concept/assets/NeighbourhoodSection/EmpireStateBuildingC.jpg", title: "Empire State Building", carTime: "10m", walkTime: "20m" },
    { src: "/home2-suites-concept/assets/NeighbourhoodSection/FlatironC.jpg", title: "Flatiron Building", carTime: "15m", walkTime: "30m" },
    { src: "/home2-suites-concept/assets/NeighbourhoodSection/CentralParkC.jpg", title: "Central Park", carTime: "5m", walkTime: "12m" },
    { src: "/home2-suites-concept/assets/NeighbourhoodSection/GrandCentralC.jpg", title: "Grand Central Terminal", carTime: "4m", walkTime: "10m" },
    { src: "", title: "Zara Fifth Avenue", carTime: "4m", walkTime: "10m" },
    { src: "", title: "Macy's Herald Square", carTime: "5m", walkTime: "17m" },
    { src: "", title: "Rockefeller Center", carTime: "3m", walkTime: "5m" },
    { src: "", title: "Chelsea Market", carTime: "20m", walkTime: "45m" },
    { src: "", title: "The High Line", carTime: "12m", walkTime: "30m" },
    { src: "", title: "Broadway Theatre", carTime: "11m", walkTime: "7m" },
    { src: "", title: "H&M", carTime: "1m", walkTime: "4m" },
]

export const ExplorePhones: React.FC = () => {
    return (
        <section id="explore" className="h-auto md:hidden mt-24 overflow-hidden">
            <h1 className="sm:text-[38px] text-[52px] text-center sm:mb-24 mb-16 font-semibold">Explore <br /> New York City</h1>
            <div className="relative ">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1796.9655333904511!2d-73.98422179234979!3d40.75930284555972!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855e93476d5%3A0x32c93e473f7dfe73!2sHome2%20Suites%20by%20Hilton%20New%20York%20Times%20Square!5e0!3m2!1sen!2srs!4v1758804894634!5m2!1sen!2srs"
                    className="h-170 w-full row-span-2 flex rounded-xl z-10"></iframe>
                <div className="absolute bottom-25 left-20 sm:left-40 right-0 flex overflow-x-auto gap-4 z-20 scrollbar-none">
                    {list.map((item, index) => (
                        <div key={index} className={`bg-white rounded-xl shadow-md flex-shrink-0 w-56 h-28 px-3 py-4 gap-x-2 grid ${item.src ? 'grid-cols-[40%_60%]' : 'grid-cols-1'} grid-rows-[40%_60%]`}>
                            {item.src && <div className="row-span-2">
                                <img src={`${item.src}`} className="object-cover h-20 w-full" />
                            </div>
                            }<div className="flex flex-row items-center">
                                <h1 className="opacity-70">{index + 1} / {item.title}</h1>
                            </div>
                            <div className="flex items-end">
                                <div className="flex flex-row -my-4">
                                    <img src="/home2-suites-concept/assets/svg/car.svg" className="h-6 my-2" />
                                    {item.carTime}
                                    <img src="/home2-suites-concept/assets/svg/walkingIcon.svg" className="ml-2  h-6" />
                                    {item.walkTime}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
} 