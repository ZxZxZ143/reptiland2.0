import {ITicketsMapping} from "@/components/TicketsCost/type";
import Person1Png from "@/assets/images/person_1.png"
import Person2Png from "@/assets/images/person_2.png"
import Person3Png from "@/assets/images/person_3.png"
import Person4Png from "@/assets/images/person_4.png"
import Person5Png from "@/assets/images/person_5.png"

export const ticketMapping: Array<ITicketsMapping> = [
    {
        id: 0,
        title: 'Взрослые гости',
        cost: '2 000 ₸',
        age: 'от 18 лет',
        img: Person1Png,
        alt: 'Человек',
    },
    {
        id: 1,
        title: 'Юные исследователи',
        cost: '1 000 ₸',
        age: 'от 7 лет',
        img: Person2Png,
        alt: 'Человек',
    },
    {
        id: 2,
        title: 'Гости с особыми возможностями',
        cost: 'бесплатно',
        img: Person3Png,
        alt: 'Человек',
        isFree: true,
    },
    {
        id: 3,
        title: 'Мудрые гости',
        cost: '1 500 ₸',
        age: 'пенсионный',
        img: Person4Png,
        alt: 'Человек',
    },
    {
        id: 4,
        title: 'Будущие исследователи',
        cost: 'бесплатно',
        age: 'до 7 лет',
        img: Person5Png,
        alt: 'Человек',
        isFree: true,
    },
]
