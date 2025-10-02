import Image, {StaticImageData} from "next/image";
import {FC} from "react";
import clsx from "clsx";
import Button from "@/components/shared/Button";

interface TicketProps {
    title: string;
    cost: string;
    age?: string;
    img: StaticImageData,
    alt: string;
    isFree?: boolean;
}

const Ticket:FC<TicketProps> = ({alt, img, age, cost, title, isFree}) => {
    return (
        <div className="flex justify-between gap-9">
            <div className="flex gap-6">
                <Image src={img} alt={alt} className="min-w-16 w-16 h-16 aspect-square" />
                <div className="flex flex-col gap-2 font-bold text-base">
                    <p>{title}</p>
                    <p className={clsx({'text-text-free': isFree})}>{cost}</p>
                </div>
            </div>
            {
                age && (
                    <div className="bg-bg-age rounded-[10px] h-fit w-fit inline-flex justify-center items-center px-5 pt-1.5 pb-2">
                        <p className="text-xs text-text-age font-bold whitespace-nowrap">{age}</p>
                    </div>
                )
            }
        </div>
    );
};

export default Ticket;
