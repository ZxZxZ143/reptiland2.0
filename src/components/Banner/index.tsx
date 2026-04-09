import React from "react";
import ClockSvg from "@/assets/icons/ClockSvg";
import MapPointSvg from "@/assets/icons/MapPointSvg";
import Image from "next/image";

const Banner = () => {
    return (
        <section
            className="mt-8"
            aria-label="Информация о мероприятии Reptiland"
        >
            <div className="sm:flex sm:items-center sm:gap-16 text-sm font-bold px-[34px] sm:px-[44px] md:px-[64px] lg:px-[89px] text-text-banner max-w-[1280px] mx-auto w-full">
                <div className="flex items-center justify-center gap-5 w-fit">
                    <ClockSvg
                        className="w-7 h-7 sm:w-9 sm:h-9"
                        aria-hidden="true"
                    />
                    <p className="sm:whitespace-pre-line sm:text-xl">
                        <span className="sr-only">Дата и время мероприятия: </span>
                        <time dateTime="2026-05-30">30–31 мая</time>, 11:00
                    </p>
                </div>

                <div className="flex items-center justify-center gap-5 sm:mt-0 mt-3 w-fit">
                    <MapPointSvg
                        className="h-7 w-6 sm:h-9 sm:w-8"
                        aria-hidden="true"
                    />
                    <address className="whitespace-pre-line sm:text-xl not-italic">
                        <span className="sr-only">Адрес мероприятия: </span>
                        Алматы, ул. Тимирязева,{"\n"} 42к1, Бакшасарай
                    </address>
                </div>
            </div>

            <div className="w-full flex justify-end overflow-hidden mt-18 mb-9">
                <Image
                    width={1400}
                    height={600}
                    src="/images/hero-reptile.png"
                    alt="Баннер выставки Reptiland с изображением рептилии"
                    className="w-full max-w-9/10 min-w-[420px]"
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1400px"
                />
            </div>
        </section>
    );
};

export default Banner;