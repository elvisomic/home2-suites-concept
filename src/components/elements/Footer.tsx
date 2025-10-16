const FooterLink = ({ href, text }: { href?:string, text:string }) => {
    return (
        <a href={`${href}`} className="font-light cursor-pointer hover:underline">{text}</a>
    )
}

export const Footer = () => {
    return (
        <footer className="relative h-150 bg-white px-2 2xl:px-72 2xl:py-24 md:px-8 lg:px-24 xl:px-32 py-16 mb-24">
            <hr className="border-1 border-[#AAAD00]" />

            <div className="h-full md:grid md:grid-cols-[50%_50%] items-center md:px-4 lg:px-20 py-8 justify-center">
                <div className="flex justify-center items-center md:h-34 md:w-64 2xl:h-54 2xl:w-104">
                    <img src="/home2-suites-concept/assets/Home2.png" className="2xl:h-40 2xl:w-80 md:h-30 md:w-60 h-30 w-60" />
                </div>
                <div className="h-full p-7 md:p-14 flex items-center justify-center">
                    <div className="flex flex-col gap-y-8">
                        <div className="flex flex-row gap-x-2">
                            <img src="/home2-suites-concept/assets/svg/walkingIcon.svg" className=" h-6" />
                            <h1>150 W 48th Street, New York, New York, 10017, USA</h1>
                        </div>

                        <div className="flex flex-row gap-x-20">
                            <div className="flex flex-row gap-x-2">
                                <img src="/home2-suites-concept/assets/svg/walkingIcon.svg" className="h-6" />
                                <h1>+1-877-6HOME02</h1>
                            </div>
                            <div className="flex flex-row gap-x-2">
                                <img src="/home2-suites-concept/assets/svg/walkingIcon.svg" className="h-6" />
                                <h1>+1-877-6HOME02</h1>
                            </div>
                        </div>

                        <div className="flex flex-row gap-x-10 items-center ml-1">
                            <div className="flex flex-row gap-x-2">
                                <h1>Social Media</h1>
                            </div>
                            <div className="flex flex-row items-center gap-x-4">
                                <img src="/home2-suites-concept/assets/logo/facebook.svg" className="h-14" />
                                <img src="/home2-suites-concept/assets/logo/x.png" className="h-10" />
                                <img src="/home2-suites-concept/assets/logo/instagram.svg" className="ml-2 h-11" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <hr className="border-1/3 border-gray-400" />


            <div className="flex justify-between items-center w-full flex-wrap">
                <div className="flex flex-row gap-x-4 md:gap-x-12 flex-wrap text-[12px] md:text-[20px]">
                    <FooterLink text="ABOUT US" />
                    <FooterLink text="CONTACT US" />
                    <FooterLink text="HELP" />
                    <FooterLink text="PRIVACY POLICY" />
                    <FooterLink text="DISCLAIMER" href="#disclaimer" />
                </div>
                <div className="text-[20px] font-light mt-4 sm:mt-0">
                    Showcase Project • Elvis Omić
                </div>
            </div>
        </footer>
    )
}