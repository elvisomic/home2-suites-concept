
interface ExploreCardProps {
    imageSrc: string,
    title: string,
    description: string,
    buttonText: string,
    offset?: string;
}

export const NeighbourhoodCard = ({ imageSrc, title, description, buttonText, offset }: ExploreCardProps) => {
    return (
        <div className={`relative 2xl:w-[355px] 2xl:h-[475px] lg:w-[270px] lg:h-[390px] object-cover overflow-hidden group ${offset}`}>
            <img
                src={imageSrc}
                loading="lazy"
                className="object-cover h-full 2xl:w-[355px] 2xl:h-[475px] lg:w-[270px] lg:h-[390px]"
            />

            <div className="absolute inset-0 bg-[#493728] flex flex-col items-center justify-center text-white text-center px-4 translate-y-full
            transition-transform duration-800
            group-hover:translate-y-0
            will-change-transform">
                <h2 className="text-2xl font-semibold mb-28">{title}</h2>
                <p className="font-light text-sm mb-8">{description}</p>
                <button className="px-6 py-2 border border-white rounded-full text-sm tracking-wide hover:bg-white hover:text-[#8c6b47] transition duration-300">
                    {buttonText}
                </button>
            </div>
        </div>
    );
};