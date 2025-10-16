import React from "react"

interface ListProps {
    src?: string,
    title: string,
    desc: string,
    carTime: string,
    walkTime: string,
    miles?: string
}

const list: ListProps[] = [
    { src: "/home2-suites-concept/assets/NeighbourhoodSection/EmpireStateBuildingC.jpg", title: "Empire State Building", desc: "EMP", carTime: "11min", walkTime: "15min", miles: "1 mile" },
    { src: "/home2-suites-concept/assets/NeighbourhoodSection/FlatironC.jpg", title: "Flatiron Building", desc: "EMP", carTime: "11min", walkTime: "15min", miles: "1 mile" },
    { src: "/home2-suites-concept/assets/NeighbourhoodSection/EmpireStateBuildingC.jpg", title: "Central Park", desc: "EMP", carTime: "11min", walkTime: "15min", miles: "1 mile" },
    { src: "/home2-suites-concept/assets/NeighbourhoodSection/EmpireStateBuildingC.jpg", title: "Grand Central", desc: "EMP", carTime: "11min", walkTime: "15min", miles: "1 mile" },
    { src: "/home2-suites-concept/assets/NeighbourhoodSection/EmpireStateBuildingC.jpg", title: "Zara", desc: "EMP", carTime: "11min", walkTime: "15min", miles: "1 mile" },
    { src: "/home2-suites-concept/assets/NeighbourhoodSection/EmpireStateBuildingC.jpg", title: "Macy's", desc: "EMP", carTime: "11min", walkTime: "15min", miles: "1 mile" },
    { src: "/home2-suites-concept/assets/NeighbourhoodSection/EmpireStateBuildingC.jpg", title: "H&M", desc: "EMP", carTime: "11min", walkTime: "15min", miles: "1 mile" },
    { src: "/home2-suites-concept/assets/NeighbourhoodSection/EmpireStateBuildingC.jpg", title: "Macy's", desc: "EMP", carTime: "11min", walkTime: "15min", miles: "1 mile" },
    { src: "/home2-suites-concept/assets/NeighbourhoodSection/EmpireStateBuildingC.jpg", title: "H&M", desc: "EMP", carTime: "11min", walkTime: "15min", miles: "1 mile" },
    { src: "/home2-suites-concept/assets/NeighbourhoodSection/EmpireStateBuildingC.jpg", title: "Macy's", desc: "EMP", carTime: "11min", walkTime: "15min", miles: "1 mile" },
    { src: "/home2-suites-concept/assets/NeighbourhoodSection/EmpireStateBuildingC.jpg", title: "H&M", desc: "EMP", carTime: "11min", walkTime: "15min", miles: "1 mile" },
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
                        <div key={index} className="bg-white rounded-xl shadow-md flex-shrink-0 w-56 h-28 px-3 py-4 gap-x-2 grid grid-cols-[40%_60%] grid-rows-[40%_60%]">
                            <div className="row-span-2">
                                <img src={`${item.src}`} className="object-cover h-20 w-full" />
                            </div>
                            <div className="flex flex-row items-center">
                                <h1 className="opacity-70">{index + 1} / {item.title}</h1>
                            </div>
                            <div className="flex items-end">
                                <div className="flex flex-row -my-4">
                                    <img src="/home2-suites-concept/assets/svg/car.svg" className="h-6 my-2" />
                                    15m
                                    <img src="/home2-suites-concept/assets/svg/walkingIcon.svg" className="ml-2  h-6" />
                                    20m
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
} 