import React from 'react';
import Button from "@/components/shared/Button";

const BuySection = () => {
    return (
        <div>
            <h2 className="font-alt text-2xl font-bold text-title-buy-section tracking-[2.2px] uppercase sm:text-3xl md:text-5xl lg:text-6xl lg:whitespace-pre-line">
                УНИКАЛЬНОЕ СОБЫТИЕ,{"\n"} КОТОРОЕ ЗНАКОМИТ {"\n"} ДВА МИРА
            </h2>
            <p className="mt-5 md:mt-7 lg:mt-14 text-buy-section text-md md:text-3xl sm:text-xl">
                Первая в Казахстане выставка террариумных животных и оборудования
            </p>
            <div className="px-[14px] md:px-0 mt-7 lg:mt-14 md:flex md:gap-16">
                <a className="block w-full md:max-w-[321px]" href="https://ticketon.kz/almaty/event/reptiland-v-almaty" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full md:max-w-[321px]">
                        КУПИТЬ БИЛЕТЫ
                    </Button>
                </a>
                <a className="block w-full md:max-w-[321px]" href="https://docs.google.com/forms/d/e/1FAIpQLSeQgvYh-_JrqKl6jqLQsN-4-p7rCzZ6-brtHiKMMm0ErQwXpw/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" className="w-full md:mt-0 mt-9 md:max-w-[321px]">
                        УЧАСТВОВАТЬ
                    </Button>
                </a>
            </div>
        </div>
    );
};

export default BuySection;
