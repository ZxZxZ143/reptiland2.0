import {StaticImageData} from "next/image";

export interface ITicketsMapping {
    id: number;
    title: string;
    cost: string;
    age?: string;
    img: StaticImageData,
    alt: string;
    isFree?: boolean;
}
