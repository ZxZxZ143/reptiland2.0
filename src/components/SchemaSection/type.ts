import {StaticImageData} from "next/image";

export interface ISchemaSection {
    "04.10": {
        id: number;
        title: string;
        titleMobile: string;
        name: string;
        description: string;
        name2?: string;
        description2?: string;
        time: string;
        img: string;
        border?: boolean;
    }[],
    "05.10": {
        id: number;
        title: string;
        titleMobile: string;
        name: string;
        description: string;
        name2?: string;
        description2?: string;
        time: string;
        img: string;
        border?: boolean;
    }[],

}
