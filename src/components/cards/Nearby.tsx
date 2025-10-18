import React from "react"

interface ListProps {
    title: string,
    carTime: string,
    walkTime: string,
    miles?: string
}

const list: ListProps[] = [
    { title: "Empire State Building", carTime: "10min", walkTime: "20min", miles: "0.9 mile" },
    { title: "Flatiron Building", carTime: "15min", walkTime: "30min", miles: "1.5 mile" },
    { title: "Central Park", carTime: "5min", walkTime: "12min", miles: "0.6 mile" },
    { title: "Grand Central Terminal", carTime: "4min", walkTime: "10min", miles: "0.8 mile" },
    { title: "Zara Fifth Avenue", carTime: "4m", walkTime: "10m", miles: "0.5 mile" },
    { title: "Macy's Herald Square", carTime: "5m", walkTime: "17m", miles: "0.7 mile" },
    { title: "Rockefeller Center", carTime: "3m", walkTime: "5m", miles: "0.1 mile" },
    { title: "Chelsea Market", carTime: "20m", walkTime: "45m", miles: "2 miles" },
    { title: "The High Line", carTime: "12m", walkTime: "30m", miles: "1.3 mile" },
    { title: "Broadway Theatre", carTime: "11m", walkTime: "7m", miles: "0.3 mile" },
    { title: "H&M Times Square", carTime: "1m", walkTime: "4m", miles: "0.3 mile" },
]

const ListCard: React.FC = () => {
    return (
        <div className="divide-y divide-gray-900 pl-4 lg:pl-16 xl:pl-28 2xl:pl-32 3xl:pl-72">
            {list.map((item, index) => (
                <div className="grid grid-rows-2 grid-cols-[85%_15%] p-2 hover:bg-gray-100 overflow-x-hidden">
                    <div className="h-8 ">
                        <div className=" flex flex-row gap-2 ">
                            <p className="text-[16px] text-gray-500 mt-1">{index + 1} /</p>
                            <h1 className="text-[20px]">{item.title}</h1>
                        </div>
                        <div className="">

                        </div>
                        <div className=" flex flex-row overflow-hidden h-9">
                            <img src="/home2-suites-concept/assets/svg/car.svg" className="opacity-60 ml-6 mt-2 h-10 overflow-hidden" />
                            <p className="mt-1 ml-1 min-w-12">{item.carTime}</p>
                            <img src="/home2-suites-concept/assets/svg/walkingIcon.svg" className="opacity-60 ml-2 -mt-1 h-10" />
                            <p className="mt-1 ml-1">{item.walkTime}</p>
                        </div>
                    </div>
                    <div className="row-span-2 flex items-center justify-center">
                        <p className="">{item.miles}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ListCard;