'use client'

import Title from "@/components/shared/Title";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Slide from "@/components/InfoSlider/Slide";
import SliderButton from "@/components/InfoSlider/SliderButton";
import ArrowSvg from "@/assets/icons/ArrowSvg";
import { sliderMapping } from "@/components/InfoSlider/config";

const InfoSlider = () => {
    const [sliderRef, slider] = useKeenSlider({
        loop: true,
        slides: {
            perView: 1,
            spacing: 15,
        },
    });

    const nextSlide = () => {
        slider.current?.next();
    };

    const prevSlide = () => {
        slider.current?.prev();
    };

    return (
        <section
            className="mt-20 sm:mt-24 md:mt-28 lg:mt-36"
            aria-labelledby="info-slider-title"
        >
            <div id="info-slider-title">
                <Title>
                    Что меня ждёт на выставке?
                </Title>
            </div>

            <div
                ref={sliderRef}
                className="keen-slider mt-14"
                role="region"
                aria-roledescription="carousel"
                aria-label="Слайдер с информацией о выставке"
            >
                {sliderMapping.map((item, index) => (
                    <div
                        key={item.id}
                        className="contents"
                        role="group"
                        aria-roledescription="slide"
                        aria-label={`Слайд ${index + 1} из ${sliderMapping.length}: ${item.title}`}
                    >
                        <Slide
                            title={item.title}
                            description={item.description}
                            img={item.img}
                            alt={item.alt}
                            className={item.className}
                            imageClassName={item.imageClassName}
                        />
                    </div>
                ))}
            </div>

            <div
                className="mt-8 flex gap-4 justify-center lg:justify-start"
                aria-label="Управление слайдером"
            >
                <SliderButton
                    onClick={prevSlide}
                    aria-label="Предыдущий слайд"
                >
                    <ArrowSvg
                        className="w-full"
                        aria-hidden="true"
                    />
                </SliderButton>

                <SliderButton
                    onClick={nextSlide}
                    aria-label="Следующий слайд"
                >
                    <ArrowSvg
                        className="w-full rotate-180"
                        aria-hidden="true"
                    />
                </SliderButton>
            </div>
        </section>
    );
};

export default InfoSlider;