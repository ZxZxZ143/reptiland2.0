import {StaticImageData} from "next/image";

export interface ISliderMapping {
    id: number;
    title: string,
    description: string,
    img: StaticImageData,
    alt: string,
    className?: string,
    imageClassName?: string
}
