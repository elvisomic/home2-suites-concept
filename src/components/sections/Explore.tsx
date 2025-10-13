
import Nearby from "../cards/Nearby"

export const Explore = () => {
    return (
        <section className="hidden md:block overflow-hidden">
            <div className="h-200 grid grid-cols-2 grid-rows-[40%_60%]">
                <div className="h-full flex items-center pl-4 lg:pl-16 xl:pl-28 2xl:pl-32 3xl:pl-72">
                    <div className="h-80 py-12 flex flex-wrap">
                        <h1 className="md:mt-20 lg:mt-16 md:text-[36px] lg:text-[44px] xl:text-[52px] 2xl:text-[62px] whitespace-nowrap">Explore New York City</h1>
                        <p className="text-[16px]/ mx-1">Discover top attractions and see how<br />close they are.</p>
                    </div>
                </div>
                <div className="flex items-end h-200">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1796.9655333904511!2d-73.98422179234979!3d40.75930284555972!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855e93476d5%3A0x32c93e473f7dfe73!2sHome2%20Suites%20by%20Hilton%20New%20York%20Times%20Square!5e0!3m2!1sen!2srs!4v1758804894634!5m2!1sen!2srs"
                        className="h-170 w-full row-span-2 flex rounded-xl z-10"></iframe>
                </div>
                <div>
                    <div className="h-120 overflow-y-scroll   
                    [&::-webkit-scrollbar]:w-2
                    [&::-webkit-scrollbar-track]:rounded-full
                    [&::-webkit-scrollbar-track]:bg-gray-100
                    [&::-webkit-scrollbar-thumb]:rounded-full
                    [&::-webkit-scrollbar-thumb]:bg-[#8c6b47]">
                        <Nearby />
                    </div>
                </div>
            </div>
        </section>
    )
}