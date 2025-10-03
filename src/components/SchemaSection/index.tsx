'use client'

import {useState} from 'react';
import Title from "@/components/shared/Title";
import Button from "@/components/shared/Button";
import clsx from "clsx";
import {schemaSectionMapping} from "@/components/SchemaSection/config";
import SchemaBlockMobile from "@/components/SchemaSection/SchemaBlockMobile";
import SchemaBlock from "@/components/SchemaSection/SchemaBlock";

const SchemaSection = () => {
    const [day, setDay] = useState<'04.10' | '05.10'>('04.10');

    const setDayHandler = (day: '04.10' | '05.10') => {
        setDay(day);
    }

    return (
        <div className="mt-[77px]">
            <div className="md:flex md:items-start md:justify-between w-full md:gap-10">
                <div>
                    <Title>Расписание лекций</Title>
                    <p className="text-subtext-schema text-sm sm:text-s md:text-base lg:text-lg font-medium leading-6 mt-1.5 sm:mt-2.5 md:mt-3.5 lg:mt-5 md:whitespace-pre-line">Тут представлено актуальное
                        расписание лекций от наших специалистов.{"\n"} Выберите нужную дату.</p>
                </div>
                <div className="flex w-full justify-center gap-7 mt-5 md:w-fit md:mt-0 md:justify-end">
                    <Button
                        className={clsx("py-2.5", {
                            'px-12': day === '04.10',
                            'px-7 bg-bg-button-inactive text-text-schema': day !== '04.10',
                        })}
                        onClick={() => setDayHandler('04.10')}
                    >04.10</Button>
                    <Button
                        className={clsx("px-7", {
                            'px-12': day === '05.10',
                            'px-7 bg-bg-button-inactive text-text-schema': day !== '05.10',
                        })}
                        size="small" onClick={() => setDayHandler('05.10')}
                    >05.10</Button>
                </div>
            </div>
            <div className="flex flex-col mt-14">
                <div className="hidden md:flex lg:text-3xl text-xl font-bold text-text-table-header">
                    <p className="flex-4">
                        Спикер
                    </p>
                    <p className="flex-5">
                        Описание
                    </p>
                    <p className="flex-1">
                        Время
                    </p>
                </div>
                {
                    schemaSectionMapping[day].map((item) => (
                        <SchemaBlockMobile
                            key={item.id}
                            title={item.titleMobile}
                            name={item.name}
                            description={item.description}
                            name2={item.name2}
                            description2={item.description2}
                            time={item.time}
                            img={item.img}
                            border={item.border}
                        />
                    ))
                }
                {
                    schemaSectionMapping[day].map((item) => (
                        <SchemaBlock
                            key={item.id}
                            title={item.title}
                            name={item.name}
                            description={item.description}
                            name2={item.name2}
                            description2={item.description2}
                            time={item.time}
                            img={item.img}
                            border={item.border}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default SchemaSection;
