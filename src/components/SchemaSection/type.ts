import {StaticImageData} from "next/image";

export interface ISchemaSection {
    "04.10": {
        id: number;
        title: string;
        titleMobile: string;
        name: string;
        description: string;
        time: string;
        img: StaticImageData;
        border?: boolean;
    }[],
    "05.10": {
        id: number;
        title: string;
        titleMobile: string;
        name: string;
        description: string;
        time: string;
        img: StaticImageData;
        border?: boolean;
    }[],

}
