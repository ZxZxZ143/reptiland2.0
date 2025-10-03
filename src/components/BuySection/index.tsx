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
                <Button className="w-full md:max-w-[321px]">
                    КУПИТЬ БИЛЕТЫ
                </Button>
                <Button variant="secondary" className="w-full md:mt-0 mt-9 md:max-w-[321px]">
                    УЧАСТВОВАТЬ
                </Button>
            </div>
        </div>
    );
};

export default BuySection;
