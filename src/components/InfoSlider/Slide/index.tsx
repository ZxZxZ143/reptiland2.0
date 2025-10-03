import clsx from 'clsx';
import React, {FC} from 'react';
import Image, { StaticImageData } from "next/image";

interface SlideProps {
    title: string;
    description: string;
    img: StaticImageData;
    alt: string;
    className?: string;
    imageClassName?: string;
}

const Slide:FC<SlideProps> = ({img, description, title, alt, className, imageClassName}) => {
    return (
        <div className="keen-slider__slide w-full flex flex-col items-center lg:flex-row-reverse lg:items-start lg:gap-[106px]">
            <div className={clsx('relative w-full min-h-[207px] lg:min-h-[400px] lg:flex-10', className)}>
                <div className="w-full absolute bottom-0 left-0 rounded-[20px] bg-bg-slide h-9/10 z-0" />
                <Image src={img} alt={alt} className={clsx('max-w-[560px] w-full z-10', imageClassName)} />
            </div>
            <div className="flex flex-col mt-6 gap-4 lg:flex-7 lg:mt-10">
                <p className="font-medium text-lg sm:text-xl md:text-2xl lg:text-4xl text-text-slide-title">
                    {title}
                </p>
                <p className="text-base sm:text-md lg:text-lg text-text-slide-description whitespace-pre-line lg:whitespace-normal">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Slide;
