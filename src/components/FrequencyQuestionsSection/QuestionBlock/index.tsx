import { FC, useId } from "react";
import PlusSvg from "@/assets/icons/PlusSvg";
import clsx from "clsx";

interface QuestionBlockProps {
    title: string;
    description: string;
    isActive: boolean;
    onClick: () => void;
    isBorder: boolean;
}

const QuestionBlock: FC<QuestionBlockProps> = ({
                                                   isActive,
                                                   description,
                                                   title,
                                                   onClick,
                                                   isBorder,
                                               }) => {
    const id = useId();
    const buttonId = `faq-button-${id}`;
    const panelId = `faq-panel-${id}`;

    return (
        <div
            className={clsx(
                "w-full text-text-questions py-5 sm:py-7 md:py-10 lg:py-12 border-b-1 border-border-accordion",
                {
                    "border-t-1": isBorder,
                }
            )}
        >
            <button
                id={buttonId}
                type="button"
                onClick={onClick}
                aria-expanded={isActive}
                aria-controls={panelId}
                className={clsx(
                    "w-full flex justify-between items-center group gap-16 text-left transition-all duration-300",
                    {
                        "mb-3.5 sm:mb-5 md:mb-7 lg:mb-9": isActive,
                    }
                )}
            >
                <span className="text-s sm:text-base md:text-xl lg:text-3xl leading-6">
                    {title}
                </span>

                <PlusSvg
                    className={clsx(
                        "min-w-9 md:min-w-10 lg:min-w-12 md:min-h-10 lg:min-h-12 md:[&>path]:stroke-1 aspect-square rounded-full group-hover:bg-bg-accordion-plus group-hover:[&>path]:stroke-white transition-all duration-500",
                        {
                            "rotate-45 bg-bg-accordion-plus [&>path]:stroke-white": isActive,
                        }
                    )}
                    aria-hidden="true"
                />
            </button>

            {isActive && (
                <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="transition-all duration-300 overflow-hidden h-fit max-h-screen"
                >
                    <p className="text-s leading-6 sm:text-base md:text-xl lg:text-2xl sm:leading-8 md:leading-10 lg:leading-12">
                        {description}
                    </p>
                </div>
            )}
        </div>
    );
};

export default QuestionBlock;