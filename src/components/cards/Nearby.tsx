import React from "react"

interface ListProps {
    title: string,
    desc: string,
    carTime: string,
    walkTime: string,
    miles?: string
}

const list: ListProps[] = [
    { title: "Empire State Building", desc: "EMP", carTime: "11min", walkTime: "15min", miles: "1 mile" },
    { title: "Flatiron Building", desc: "EMP", carTime: "11min", walkTime: "15min", miles: "1 mile" },
    { title: "Central Park", desc: "EMP", carTime: "11min", walkTime: "15min", miles: "1 mile" },
    { title: "Grand Central Terminal", desc: "EMP", carTime: "11min", walkTime: "15min", miles: "1 mile" },
    { title: "Zara", desc: "EMP", carTime: "11min", walkTime: "15min", miles: "1 mile" },
    { title: "Macy's", desc: "EMP", carTime: "11min", walkTime: "15min", miles: "1 mile" },
    { title: "H&M", desc: "EMP", carTime: "11min", walkTime: "15min", miles: "1 mile" },
    { title: "Macy's", desc: "EMP", carTime: "11min", walkTime: "15min", miles: "1 mile" },
    { title: "H&M", desc: "EMP", carTime: "11min", walkTime: "15min", miles: "1 mile" },
    { title: "Macy's", desc: "EMP", carTime: "11min", walkTime: "15min", miles: "1 mile" },
    { title: "H&M", desc: "EMP", carTime: "11min", walkTime: "15min", miles: "1 mile" },
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
                            <img src="/src/assets/svg/car.svg" className="opacity-60 ml-6 mt-2 h-10 overflow-hidden" />
                            <p className="mt-1 ml-1">{item.carTime}</p>
                            <img src="/src/assets/svg/walkingIcon.svg" className="opacity-60 ml-2 -mt-1 h-10" />
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