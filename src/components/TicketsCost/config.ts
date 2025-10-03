import {ITicketsMapping} from "@/components/TicketsCost/type";
import Person1Png from "../../../public/images/person_1.png"
import Person2Png from "../../../public/images/person_2.png"
import Person3Png from "../../../public/images/person_3.png"
import Person4Png from "../../../public/images/person_4.png"
import Person5Png from "../../../public/images/person_5.png"

export const ticketMapping: Array<ITicketsMapping> = [
    {
        id: 0,
        title: 'Взрослые гости',
        cost: '2 000 ₸',
        age: 'от 18 лет',
        img: '/images/person_1.png',
        alt: 'Человек',
    },
    {
        id: 1,
        title: 'Юные исследователи',
        cost: '1 000 ₸',
        age: 'от 7 лет',
        img: '/images/person_2.png',
        alt: 'Человек',
    },
    {
        id: 2,
        title: 'Гости с особыми возможностями',
        cost: 'бесплатно',
        img: '/images/person_3.png',
        alt: 'Человек',
        isFree: true,
    },
    {
        id: 3,
        title: 'Мудрые гости',
        cost: '1 500 ₸',
        age: 'пенсионный',
        img: '/images/person_4.png',
        alt: 'Человек',
    },
    {
        id: 4,
        title: 'Будущие исследователи',
        cost: 'бесплатно',
        age: 'до 7 лет',
        img: '/images/person_5.png',
        alt: 'Человек',
        isFree: true,
    },
]
