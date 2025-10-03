import Image, {StaticImageData} from "next/image";
import {FC} from "react";
import clsx from "clsx";

interface SchemaBlockProps {
    title: string;
    titleMobile: string;
    name: string;
    description: string;
    time: string;
    img: StaticImageData;
    border?: boolean;
}

const SchemaBlock: FC<SchemaBlockProps> = ({img, description, name, time, titleMobile, title, border}) => {
    return (
        <div className={clsx("text-text-schema py-5 border-border-schema border-b-1", {'border-t-1': border})}>
            <p className="text-3xl font-bold mb-5">{time}</p>
            <p className="text-base font-bold mb-4">{titleMobile}</p>
            <div className="flex gap-7">
                <Image src={img} alt="лектор" className="w-[70px] h-[70px] max-w-[70px]" />
                <div className="flex flex-col">
                    <p className="text-base font-bold">{name}</p>
                    <p className="font-medium text-subtext-schema text-xxs leading-6">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default SchemaBlock;
