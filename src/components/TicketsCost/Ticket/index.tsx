import Image from "next/image";
import {FC} from "react";
import clsx from "clsx";

interface TicketProps {
    title: string;
    cost: string;
    age?: string;
    img: string,
    alt: string;
    isFree?: boolean;
}

const Ticket: FC<TicketProps> = ({alt, img, age, cost, title, isFree}) => {
    return (
        <div className="flex justify-between lg:max-w-[460px] gap-3">
            <div className="flex gap-6">
                <Image
                    src={img}
                    width={100}
                    height={100}
                    alt={alt}
                    className="min-w-16 md:w-[74px] md:h-[74px] w-16 h-16 aspect-square"/>
                <div className="flex flex-col gap-2 font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
                    <p>{title}</p>
                    <p className={clsx({'text-text-free': isFree})}>{cost}</p>
                </div>
            </div>
            {
                age && (
                    <div
                        className="bg-bg-age rounded-[10px] h-fit w-fit inline-flex justify-center items-center px-5 md:px-3.5 pt-1.5 pb-2">
                        <p className="text-xs sm:text-sm md:text-s lg:text-base text-text-age font-bold whitespace-nowrap">{age}</p>
                    </div>
                )
            }
        </div>
    );
};

export default Ticket;
