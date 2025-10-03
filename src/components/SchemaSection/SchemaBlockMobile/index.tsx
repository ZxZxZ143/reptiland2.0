import Image, {StaticImageData} from "next/image";
import {FC} from "react";
import clsx from "clsx";

interface SchemaBlockProps {
    title: string;
    name: string;
    description: string;
    name2?: string;
    description2?: string;
    time: string;
    img: StaticImageData;
    border?: boolean;
}

const SchemaBlockMobile: FC<SchemaBlockProps> = ({
                                                     img,
                                                     description,
                                                     name,
                                                     time,
                                                     title,
                                                     border,
                                                     name2,
                                                     description2
                                                 }) => {
    return (
        <div
            className={clsx("text-text-schema py-5 border-border-schema border-b-1 md:hidden", {'border-t-1': border})}>
            <p className="text-3xl font-bold mb-5">{time}</p>
            <p className="text-base font-bold mb-4">{title}</p>
            <div className="flex gap-7">
                <Image
                    src={img}
                    width={100}
                    height={100}
                    alt="лектор"
                    className="w-[70px] h-[70px] max-w-[70px]"/>
                <div className="flex flex-col">
                    <p className="text-base font-bold">{name}</p>
                    <p className="font-medium text-subtext-schema text-xxs leading-6">{description}</p>
                    {
                        name && (
                            <p className="text-base font-bold">{name2}</p>
                        )
                    }
                    {
                        description2 && (
                            <p className="font-medium text-subtext-schema text-xxs leading-6">{description2}</p>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default SchemaBlockMobile;
