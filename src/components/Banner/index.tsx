import React from 'react';
import ClockSvg from "@/assets/icons/ClockSvg";
import MapPointSvg from "@/assets/icons/MapPointSvg";
import Image from "next/image";
import ReptilePng from "@/assets/images/Reptile.png";

const Banner = () => {
    return (
        <div className="mt-8">
            <div className="sm:flex sm:items-center sm:gap-16 text-sm font-bold px-[34px] sm:px-[44px] md:px-[64px] lg:px-[89px] text-text-banner max-w-[1280px] mx-auto w-full">
                <div className="flex items-center justify-center gap-5 w-fit">
                    <ClockSvg className="w-7 h-7 sm:w-9 sm:h-9"/>
                    <p className="sm:whitespace-pre-line sm:text-xl">4-5 октября,{"\n"} 11:00</p>
                </div>
                <div className="flex items-center justify-center gap-5 sm:mt-0 mt-3 w-fit">
                    <MapPointSvg className="h-7 w-6 sm:h-9 sm:w-8"/>
                    <p className="sm:whitespace-pre-line sm:text-xl">4-5 октября,{"\n"} 11:00</p>
                </div>
            </div>
            <div className="w-full overflow-hidden mt-8">
                <Image src={ReptilePng} alt="Хамелион на ветке" className="w-full min-w-[420px] translate-x-[5%]" />
            </div>
        </div>
    );
};

export default Banner;
