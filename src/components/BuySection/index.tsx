import React from "react";
import Button from "@/components/shared/Button";

const BuySection = () => {
    return (
        <section aria-labelledby="buy-section-title">
            <h2
                id="buy-section-title"
                className="font-alt text-2xl font-bold text-title-buy-section tracking-[20%] xl:leading-20 lg:leading-16 md:leading-10 leading-8 uppercase sm:text-3xl md:text-5xl lg:text-6xl lg:whitespace-pre-line"
            >
                УНИКАЛЬНОЕ СОБЫТИЕ,{"\n"} КОТОРОЕ ЗНАКОМИТ {"\n"} ДВА МИРА
            </h2>

            <p className="mt-5 md:mt-7 lg:mt-14 text-buy-section text-md md:text-3xl sm:text-xl">
                Первая в Казахстане выставка террариумных животных и оборудования
            </p>

            <div
                className="px-[14px] md:px-0 mt-7 lg:mt-14 md:flex md:gap-16"
                aria-label="Основные действия"
            >
                <Button
                    className="w-full md:max-w-[321px] opacity-60"
                >
                        КУПИТЬ БИЛЕТЫ
                </Button>

                <Button
                    variant="secondary"
                    className="w-full md:mt-0 mt-9 md:max-w-[321px]"
                >
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSc3V9Zj1qOUrjjAaW9m4iCnXeyOKlKQESCUOK03q8YT7AO4YQ/viewform"
                        target="_blank"
                        rel="noopener noreferrer external"
                        aria-label="Подать заявку на участие в выставке Reptiland, откроется в новой вкладке"
                        title="Участвовать в Reptiland"
                    >
                        УЧАСТВОВАТЬ
                    </a>
                </Button>
            </div>
        </section>
    );
};

export default BuySection;