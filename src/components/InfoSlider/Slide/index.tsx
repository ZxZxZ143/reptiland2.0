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
        <div className="keen-slider__slide w-full flex flex-col items-center">
            <div className={clsx('relative w-full min-h-[207px]', className)}>
                <div className="w-full absolute bottom-0 left-0 rounded-[20px] bg-bg-slide h-9/10" />
                <Image src={img} alt={alt} className={clsx('max-w-[560px] w-full', imageClassName)} />
            </div>
            <div className="flex flex-col mt-6 gap-4">
                <p className="font-medium text-lg text-text-slide-title">
                    {title}
                </p>
                <p className="text-base text-text-slide-description whitespace-pre-line">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Slide;
