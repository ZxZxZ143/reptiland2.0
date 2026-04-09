import Image from "next/image";
import { FC } from "react";
import clsx from "clsx";

interface TicketProps {
    title: string;
    cost: string;
    age?: string;
    img: string;
    alt: string;
    isFree?: boolean;
}

const Ticket: FC<TicketProps> = ({ alt, img, age, cost, title, isFree }) => {
    return (
        <article className="flex justify-between lg:max-w-[460px] gap-3">
            <div className="flex gap-6">
                <Image
                    src={img}
                    width={100}
                    height={100}
                    alt={alt}
                    className="min-w-16 md:w-[74px] md:h-[74px] w-16 h-16 aspect-square"
                    sizes="(max-width: 768px) 64px, 74px"
                />

                <div className="flex flex-col gap-2 font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
                    <h3 className="text-inherit font-inherit leading-inherit">
                        {title}
                    </h3>

                    <p
                        className={clsx({
                            "text-text-free": isFree,
                        })}
                        aria-label={isFree ? `${title}: бесплатно` : `${title}: ${cost}`}
                    >
                        {cost}
                    </p>
                </div>
            </div>

            {age && (
                <div
                    className="bg-bg-age rounded-[10px] h-fit w-fit inline-flex justify-center items-center px-5 md:px-3.5 pt-1.5 pb-2"
                    aria-label={`Возрастная категория: ${age}`}
                >
                    <span className="text-xs sm:text-sm md:text-s lg:text-base text-text-age font-bold whitespace-nowrap">
                        {age}
                    </span>
                </div>
            )}
        </article>
    );
};

export default Ticket;