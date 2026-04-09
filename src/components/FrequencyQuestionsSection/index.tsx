'use client'

import { frequencyQuestionMapping } from "@/components/FrequencyQuestionsSection/config";
import QuestionBlock from "@/components/FrequencyQuestionsSection/QuestionBlock";
import { useState } from "react";
import Title from "@/components/shared/Title";

const FrequencyQuestionsSection = () => {
    const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

    const setActive = (id: number) => {
        if (id === activeQuestion) {
            setActiveQuestion(null);
        } else {
            setActiveQuestion(id);
        }
    };

    return (
        <section
            className="mt-[77px] sm:mt-24 md:mt-28 lg:mt-36"
            aria-labelledby="faq-section-title"
        >
            <div id="faq-section-title">
                <Title className="mb-9 sm:mb-12 md:mb-14 lg:mb-20">
                    Часто задаваемые вопросы
                </Title>
            </div>

            <div role="list" aria-label="Список часто задаваемых вопросов">
                {frequencyQuestionMapping.map((question) => (
                    <div key={question.id} role="listitem">
                        <QuestionBlock
                            title={question.title}
                            description={question.description}
                            isActive={activeQuestion === question.id}
                            onClick={() => setActive(question.id)}
                            isBorder={question.isBorder}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FrequencyQuestionsSection;