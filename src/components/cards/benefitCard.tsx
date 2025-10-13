
interface BenefitCardProps {
    logoSrc: string,
    title: string,
    description: string,
}

export const BenefitCard = ({ logoSrc, title, description }: BenefitCardProps) => {
    
    return (
        <div className="relative xl:w-[320px] 2xl:w-[405px] rounded-xl p-6 overflow-visible bg-gray-200" >
            <img src={logoSrc} className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 p-4 rounded-full bg-gray-300" />

            <div className="mt-8">
                <h2 className="text-xl text-center mb-2 font-coreR">{title}</h2>
                <p className="text-black text-center">{description}</p>
            </div>
        </div>
    )
}