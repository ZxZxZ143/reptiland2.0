import {ISliderMapping} from "@/components/InfoSlider/type";
import MicrophonePng from "@/assets/images/microphone.png";
import SnakePng from "@/assets/images/snake.png";
import SverchokPng from "@/assets/images/Sverchok.png";
import TerrariumPng from "@/assets/images/terrarium.png";

export const sliderMapping: Array<ISliderMapping> = [
    {
        id: 0,
        title: "Экзотические животные",
        description: `На нашей выставке вы встретите уникальных рептилий и амфибий, небольших, безопасных экзотических питомцев.\n Мы помогаем разрушить страхи, показывая их настоящую красоту и обаяние. Убедитесь сами - вы обязательно влюбитесь в этих удивительных существ!`,
        img: SnakePng,
        alt: "Змея",
        className: "px-5 pb-6",
    },
    {
        id: 1,
        title: "Экзотические насекомые",
        description: "Редкие и необычные насекомые — миниатюрные и безопасные экзотические питомцы. Под руководством специалистов можно полностью оборудовать для них комфортное жилище, оформить его и украсить.",
        img: SverchokPng,
        alt: "Сверчок",
        className: "pl-5 pb-6",
        imageClassName: "h-full scale-110 translate-x-[5%] -translate-y-[5%]",
    },
    {
        id: 2,
        title: "Оборудование",
        description: "Террариумы на любой вкус  и цвет. Качественное и красивое оборудование для ваших замечательных питомцев вам помогут подобрать специалисты, проконсультируя и внимательно обсудив нужды питомца.",
        img: TerrariumPng,
        alt: "Террариум",
        className: "px-5 pb-6",
        imageClassName: "h-full",
    },
    {
        id: 3,
        title: "Лекции",
        description: "Террариумы на любой вкус  и цвет. Качественное и красивое оборудование для ваших замечательных питомцев вам помогут подобрать специалисты, проконсультируя и внимательно обсудив нужды питомца.",
        img: MicrophonePng,
        alt: "Микрофон",
        className: "pb-6",
    }
]
