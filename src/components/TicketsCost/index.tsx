import Title from "@/components/shared/Title";
import {ticketMapping} from "@/components/TicketsCost/config";
import Ticket from "@/components/TicketsCost/Ticket";
import Button from "@/components/shared/Button";

const TicketCost = () => {
    return (
        <div className="mt-[77px] sm:mt-24 md:mt-28 lg:mt-36">
            <Title>Стоимость билетов</Title>
            <p className="mt-1.5 sm:mt-2.5 md:mt-3.5 lg:mt-5 text-subtext-tickets font-medium text-sm sm:text-base md:text-md lg:text-lg leading-6 md:whitespace-pre-line">
                Актуальную стоимость билетов смотрите ниже. Билеты на выставку {"\n"} приобретаются на платформе <strong>Ticketon.</strong>
            </p>
            <div className="flex flex-col gap-y-6 mt-9 md:flex-wrap lg:max-h-[400px] sm:gap-y-8 md:gap-y-10 lg:gap-y-12]">
                {
                    ticketMapping.map((item) => (
                        <Ticket
                            key={item.id}
                            title={item.title}
                            cost={item.cost}
                            alt={item.alt}
                            img={item.img}
                            isFree={item.isFree}
                            age={item.age}
                        />
                    ))
                }
            </div>
            <div className="flex justify-center items-center w-full mt-15">
                <a className="px-20 py-1.5 mx-auto" href="https://ticketon.kz/almaty/event/reptiland-v-almaty" target="_blank" rel="noopener noreferrer">
                    <Button className="px-20 py-1.5 mx-auto">КУПИТЬ БИЛЕТЫ</Button>
                </a>
            </div>
        </div>
    );
};

export default TicketCost;
