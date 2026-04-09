import React from "react";
import Title from "@/components/shared/Title";
import Image from "next/image";

const SchemaPlaceholder = () => {
    return (
        <section
            className="mt-[77px]"
            aria-labelledby="lecture-schedule-title"
        >
            <div className="w-full max-w-7/10">
                <div id="lecture-schedule-title">
                    <Title>Расписание лекций</Title>
                </div>

                <p className="text-subtext-schema text-sm sm:text-s md:text-base lg:text-lg font-medium leading-6 mt-1.5 sm:mt-2.5 md:mt-3.5 lg:mt-5">
                    Сейчас мы завершаем формирование программы. Полное расписание лекций будет опубликовано в
                    ближайшее время — следите за обновлениями!
                </p>
            </div>

            <div className="w-full flex justify-end">
                <Image
                    width={1000}
                    height={500}
                    src="/images/schema-reptile.png"
                    alt="Иллюстрация рептилии рядом с разделом расписания лекций"
                    sizes="(max-width: 640px) 100vw, 1000px"
                />
            </div>
        </section>
    );
};

export default SchemaPlaceholder;