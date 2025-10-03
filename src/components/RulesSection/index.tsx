import Title from "@/components/shared/Title";
import {rulesMapping} from "@/components/RulesSection/config";

const RulesSection = () => {
    return (
        <div className="mt-[77px] sm:mt-24 md:mt-28 lg:mt-36">
            <Title>Правила посещения выставки</Title>
            <div className="text-base text-text-rules leading-7 mt-5 sm:mt-8 md:mt-12 lg:mt-20">
                {
                    rulesMapping.map(rule => (
                        <p key={rule.id} className="mb-1.5 md:mt-4 sm:text-lg md:text-xl lg:text-3xl lg:leading-12 leading-9">
                            <strong>{rule.title}</strong>
                            {" "}
                            {rule.description}
                        </p>
                    ))
                }
            </div>
        </div>
    );
};

export default RulesSection;
