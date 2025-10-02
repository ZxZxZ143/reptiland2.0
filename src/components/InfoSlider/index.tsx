'use client'

import Title from "@/components/shared/Title";
import "keen-slider/keen-slider.min.css";
import {useKeenSlider} from "keen-slider/react";
import Slide from "@/components/InfoSlider/Slide";
import SnakePng from "@/assets/images/snake.png";
import SverchokPng from "@/assets/images/Sverchok.png";
import TerrariumPng from "@/assets/images/terrarium.png";
import MicrophonePng from "@/assets/images/microphone.png";
import SliderButton from "@/components/InfoSlider/SliderButton";
import ArrowSvg from "@/assets/icons/ArrowSvg";
import {sliderMapping} from "@/components/InfoSlider/config";

const InfoSlider = () => {
    const [sliderRef, slider] =  useKeenSlider({
        loop: true,
        slides: {
            perView: 1,
            spacing: 15,
        }
    });

    const nextSlide = () => {
        slider.current?.next();
    }

    const prevSlide = () => {
        slider.current?.prev();
    }

    return (
        <div className="mt-20">
            <Title>
                Что меня ждёт на выставке?
            </Title>
            <div ref={sliderRef} className="keen-slider mt-14">
                {
                    sliderMapping.map(item => (
                        <Slide
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            img={item.img}
                            alt={item.alt}
                            className={item.className}
                            imageClassName={item.imageClassName}
                        />
                    ))
                }
            </div>
            <div className="mt-8 flex gap-4 justify-center">
                <SliderButton onClick={prevSlide}>
                    <ArrowSvg className="w-full" />
                </SliderButton>
                <SliderButton onClick={nextSlide}>
                    <ArrowSvg className="w-full rotate-180" />
                </SliderButton>
            </div>
        </div>
    );
};

export default InfoSlider;
