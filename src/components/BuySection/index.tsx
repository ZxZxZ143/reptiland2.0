import React from 'react';
import Button from "@/components/shared/Button";

const BuySection = () => {
    return (
        <div>
            <h2 className="font-alt text-2xl font-bold tracking-wider text-title-buy-section uppercase">
                УНИКАЛЬНОЕ СОБЫТИЕ, КОТОРОЕ ЗНАКОМИТ ДВА МИРА
            </h2>
            <p className="mt-5 text-buy-section text-md">
                Первая в Казахстане выставка террариумных животных и оборудования
            </p>
            <div className="px-[14px] mt-7">
                <Button className="w-full">
                    КУПИТЬ БИЛЕТЫ
                </Button>
                <Button variant="secondary" className="w-full mt-9">
                    УЧАСТВОВАТЬ
                </Button>
            </div>
        </div>
    );
};

export default BuySection;
