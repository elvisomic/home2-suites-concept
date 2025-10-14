const Slika = ({ src, cName }: { src:string, cName:string }) => {
    return <img src={src} loading="lazy" className={`object-cover w-full transform transition-transform duration-400 hover:scale-120 cursor-pointer ${cName} h-full`} />
}

const Z = ({ children, cols, rows, h, cName }: { children:React.ReactNode, cols:string, rows:string, h:string, cName?:string }) => {
    return (
        <div className={`col-span-${cols} row-span-${rows} xl:h-${h} overflow-hidden w-full ${cName}`}>
            {children}
        </div>
    )
}

const Text = ({ t, cName }: { t:string, cName:string }) => {
    return <h1 className={`absolute  text-white opacity-80 z-30 ml-4 xl:ml-6 2xl:row-span-2 ${cName}`}>{t}</h1>
}

export const Photos = () => {
    return (
        <section className="hidden md:h-200 xl:h-300 md:grid md:grid-cols-4 md:grid-rows-3 relative overflow-hidden">

            <div className="absolute inset-0 bg-black/60 pointer-events-none z-10"></div>
            <div className="col-span-2 row-span-2 h-150 xl:h-200 overflow-hidden w-full">
                <Text t="Freshly baked cookies you can't miss in Manhattan" cName="md:text-[28px] xl:text-[42px] xl:mt-165 md:mt-110 max-w-[350px] xl:max-w-[550px] 2xl:max-w-[650px]" />
                <Slika src="home2-suites-concept/assets/PhotosSection/cookiesC.jpg" cName="object-[50%]" />
            </div>

            <Z cols="1" rows="1" h="100" cName="">
                <Text t="A green oasis in the heart of Manhattan to explore" cName="xl:mt-65 2xl:mt-75 md:mt-45 md:text-[16px] xl:max-w-[280px] xl:text-[28px] 2xl:max-w-[340px] md:max-w-[180px] md:ml-2 lg:mt-50 lg:max-w-[220px]" />
                <Slika src="home2-suites-concept/assets/PhotosSection/centralParkC.jpg" cName="" />
            </Z>

            <Z cols="1" rows="1" h="100" cName="">
                <Text t="Unmissable shows lighting up Broadway's legendary stages" cName="xl:mt-55 2xl:mt-65 md:mt-45 md:text-[16px] xl:max-w-[280px] xl:text-[28px] 2xl:max-w-[340px] md:max-w-[180px] md:ml-2 lg:mt-50 lg:max-w-[220px]" />
                <Slika src="home2-suites-concept/assets/PhotosSection/broadwayC.png" cName="" />
            </Z>

            <Z cols="2" rows="2" h="200" cName="">
                <Text t="Iconic skyline views you'll never forget in Manhattan" cName="xl:mt-165 md:mt-110 md:text-[28px] xl:text-[42px]" />
                <Slika src="home2-suites-concept/assets/PhotosSection/landscapeC.jpg" cName="object-[73%]" />
            </Z>

            <Z cols="1" rows="1" h="100" cName="">
                <Text t="The world-famous symbol of freedom you must see" cName="xl:mt-65 2xl:mt-75 md:mt-45 md:text-[16px] xl:max-w-[280px] xl:text-[28px] 2xl:max-w-[340px] md:max-w-[180px] md:ml-2 lg:mt-50 lg:max-w-[220px]" />
                <Slika src="home2-suites-concept/assets/PhotosSection/libertyC.jpg" cName="object-[30%]" />
            </Z>
            
            <Z cols="1" rows="1" h="100" cName="">
                <Text t="Picture-perfect views and charm to discover in DUMBO" cName="2xl:mt-65 xl:mt-65 md:mt-45 md:text-[16px] xl:max-w-[280px] xl:text-[28px] 2xl:max-w-[330px] md:max-w-[180px] md:ml-2 lg:mt-50 lg:max-w-[220px]" />
                <Slika src="home2-suites-concept/assets/PhotosSection/dumboC.jpg" cName="" />
            </Z>
            
        </section>

    )
}