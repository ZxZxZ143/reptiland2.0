import Title from "@/components/shared/Title";
import {ticketMapping} from "@/components/TicketsCost/config";
import Ticket from "@/components/TicketsCost/Ticket";
import Button from "@/components/shared/Button";

const TicketCost = () => {
    return (
        <div className="mt-[77px]">
            <Title>Стоимость билетов</Title>
            <p className="mt-1.5 text-subtext-tickets font-medium text-sm">
                Актуальную стоимость билетов смотрите ниже. Билеты на выставку приобретаются на платформе <strong>Ticketon.</strong>
            </p>
            <div className="flex flex-col gap-6 mt-9">
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
                <Button className="px-20 py-1.5 mx-auto">КУПИТЬ БИЛЕТЫ</Button>
            </div>
        </div>
    );
};

export default TicketCost;
