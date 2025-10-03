'use client'

import {useState} from 'react';
import Title from "@/components/shared/Title";
import Button from "@/components/shared/Button";
import SchemaBlock from "@/components/SchemaSection/SchemaBlock";
import Avatar1Png from "@/assets/images/avatar_1.png"
import clsx from "clsx";
import {schemaSectionMapping} from "@/components/SchemaSection/config";

const SchemaSection = () => {
    const [day, setDay] = useState<'04.10' | '05.10'>('04.10');

    const setDayHandler = (day: '04.10' | '05.10') => {
        setDay(day);
    }

    return (
        <div className="mt-[77px]">
            <Title>Расписание лекций</Title>
            <p className="text-subtext-schema text-sm font-medium leading-6 mt-1.5">Тут представлено актуальное
                расписание лекций от наших специалистов. Выберите нужную дату.</p>
            <div className="flex w-full justify-center gap-7 mt-5">
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
            <div className="flex flex-col mt-14">
                {
                    schemaSectionMapping[day].map((item) => (
                        <SchemaBlock
                            key={item.id}
                            title={item.title}
                            titleMobile={item.titleMobile}
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
