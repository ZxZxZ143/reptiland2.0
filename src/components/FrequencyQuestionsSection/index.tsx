'use client'

import {frequencyQuestionMapping} from "@/components/FrequencyQuestionsSection/config";
import QuestionBlock from "@/components/FrequencyQuestionsSection/QuestionBlock";
import { useState } from "react";
import Title from "@/components/shared/Title";

const FrequencyQuestionsSection = () => {
    const [activeQuestion, setActiveQuestion] = useState<number | null>(null)

    const setActive = (id: number) => {
        if (id === activeQuestion) {
            setActiveQuestion(null)
        } else {
            setActiveQuestion(id)
        }
    }

    return (
        <div className="mt-[77px] sm:mt-24 md:mt-28 lg:mt-36">
            <Title className="mb-9 sm:mb-12 md:mb-14 lg:mb-20">Часто задаваемые вопросы</Title>
            {
                frequencyQuestionMapping.map(question => (
                    <QuestionBlock
                        key={question.id}
                        title={question.title}
                        description={question.description}
                        isActive={activeQuestion === question.id}
                        onClick={() => setActive(question.id)}
                        isBorder={question.isBorder}
                    />
                ))
            }
        </div>
    );
};

export default FrequencyQuestionsSection;
