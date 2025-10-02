import React from 'react';
import ClockSvg from "@/assets/icons/ClockSvg";
import MapPointSvg from "@/assets/icons/MapPointSvg";
import Image from "next/image";
import ReptilePng from "@/assets/images/Reptile.png";

const Banner = () => {
    return (
        <div className="mt-8">
            <div className="text-sm font-bold px-[34px] text-text-banner w-fit">
                <div className="flex items-center justify-center gap-5">
                    <ClockSvg className="w-7"/>
                    <p>4-5 октября, 11:00</p>
                </div>
                <div className="flex items-center justify-center gap-5 mt-3">
                    <MapPointSvg className="h-7"/>
                    <p>4-5 октября, 11:00</p>
                </div>
            </div>
            <div className="w-full overflow-hidden mt-8">
                <Image src={ReptilePng} alt="Хамелион на ветке" className="w-full min-w-[420px] translate-x-[5%]" />
            </div>
        </div>
    );
};

export default Banner;
