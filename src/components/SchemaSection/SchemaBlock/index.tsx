import Image from "next/image";
import {FC} from "react";
import clsx from "clsx";

interface SchemaBlockProps {
    title: string;
    name: string;
    description: string;
    name2?: string;
    description2?: string;
    time: string;
    img: string;
    border?: boolean;
}


const SchemaBlock: FC<SchemaBlockProps> = ({
                                               img,
                                               description,
                                               description2,
                                               border,
                                               name2,
                                               name,
                                               time,
                                               title
                                           }) => {
    return (
        <div
            className={clsx("hidden md:flex gap-10 w-full py-9 border-b-1 border-border-schema", {'border-t-1': border})}>
            <div className="flex gap-7 lg:gap-9 flex-4">
                <Image
                    src={img}
                    width={100}
                    height={100}
                    alt="лектор"
                    className="w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] max-w-[70px] lg:max-w-[100px]"/>
                <div className="flex flex-col gap-2">
                    <p className="text-lg lg:text-3xl font-bold">{name}</p>
                    <p className="font-medium text-subtext-schema text-base lg:text-lg leading-6">{description}</p>
                    {
                        name && (
                            <p className="text-lg lg:text-3xl font-bold">{name2}</p>
                        )
                    }
                    {
                        description2 && (
                            <p className="font-medium text-subtext-schema text-base lg:text-lg leading-6">{description2}</p>
                        )
                    }
                </div>
            </div>
            <p className="flex-5 text-lg lg:text-xl font-medium text-text-schema">
                {
                    title
                }
            </p>
            <p className="flex-1 text-2xl lg:text-3xl font-bold text-text-schema">
                {
                    time
                }
            </p>
        </div>
    );
};

export default SchemaBlock;
