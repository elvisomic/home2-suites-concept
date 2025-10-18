import { NeighbourhoodCard } from "../cards/NeighbourhoodCard"

export const Neighbourhood = () => {
    return (
        <section className="hidden lg:block 3xl:px-72 2xl:px-32 lg:px-16 overflow-hidden">

            <div className="flex flex-col mt-20 mb-10">
                <h1 className="flex text-[68px]/25 justify-center font-semibold">What's Nearby</h1>
                <p className="flex text-[20px]/7 justify-center font-light">Conveniently located, our hotel is surrounded by a variety of attractions, dining options, and local landmarks. Guests can easily explore nearby shops, restaurants, and cultural highlights, making it simple to experience the best of the area during their stay.</p>
            </div>
            <div className="relative lg:grid lg:grid-cols-3 lg:grid-rows-2 2xl:gap-y-[140px] 2xl:mt-25 mb-70 lg:gap-y-[100px] xl:gap-y-[120px] justify-items-center w-full 2xl:gap-x-35 xl:gap-x-48 lg:gap-x-10 ">

                <NeighbourhoodCard imageSrc="/home2-suites-concept/assets/NeighbourhoodSection/EmpireStateBuildingC.jpg" title="Empire State Building" description="Breathtaking views from New York's most iconic tower" buttonText="EXPLORE" />

                <NeighbourhoodCard imageSrc="/home2-suites-concept/assets/NeighbourhoodSection/GrandCentralC.jpg" title="Grand Central Terminal" description="A stunning landmark where history meets hustle" buttonText="EXPLORE" offset="translate-y-[100px]" />

                <NeighbourhoodCard imageSrc="/home2-suites-concept/assets/NeighbourhoodSection/edgeTest.avif" title="The Edge" description="Sky-high thrills on Manhattan's boldest observation deck" buttonText="EXPLORE" />

                <NeighbourhoodCard imageSrc="/home2-suites-concept/assets/NeighbourhoodSection/vesselTest.jpg" title="Vessel" description="Climbable art piece with unforgettable city views" buttonText="EXPLORE" />

                <NeighbourhoodCard imageSrc="/home2-suites-concept/assets/NeighbourhoodSection/TimesSquareC.jpg" title="Times Square" description="Bright lights and energy at the heart of New York" buttonText="EXPLORE" offset="translate-y-[100px]" />

                <NeighbourhoodCard imageSrc="/home2-suites-concept/assets/NeighbourhoodSection/MuseumNHC.jpg" title="American Museum of Natural History" description="Fascinating exhibits and discoveries for all ages" buttonText="EXPLORE" />

                <NeighbourhoodCard imageSrc="/home2-suites-concept/assets/NeighbourhoodSection/CentralParkC.jpg" title="Central Park" description="Endless paths, lakes, and escapes in the city's backyard" buttonText="EXPLORE" />

                <NeighbourhoodCard imageSrc="/home2-suites-concept/assets/NeighbourhoodSection/FlatironC.jpg" title="Flatiron Building" description="A uniquely shaped icon made for photos" buttonText="EXPLORE" offset="translate-y-[100px]" />

                <NeighbourhoodCard imageSrc="/home2-suites-concept/assets/NeighbourhoodSection/BroadwayC.jpg" title="Broadway" description="World-class performances on New York’s famous stage" buttonText="EXPLORE" />

            </div>

        </section>
    )
}