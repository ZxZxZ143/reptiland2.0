import Title from "@/components/shared/Title";
import {rulesMapping} from "@/components/RulesSection/config";

const RulesSection = () => {
    return (
        <div className="mt-[77px]">
            <Title>Правила посещения выставки</Title>
            <div className="text-base text-text-rules leading-7 mt-5">
                {
                    rulesMapping.map(rule => (
                        <p key={rule.id} className="mb-1.5">
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
