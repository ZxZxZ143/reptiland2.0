import {FC} from "react";
import PlusSvg from "@/assets/icons/PlusSvg";
import clsx from "clsx";

interface QuestionBlockProps {
    title: string;
    description: string;
    isActive: boolean;
    onClick: () => void;
    isBorder: boolean;
}

const QuestionBlock: FC<QuestionBlockProps> = ({isActive, description, title, onClick, isBorder}) => {
    return (
        <div className={clsx("w-full text-text-questions py-5 sm:py-7 md:py-10 lg:py-12 border-b-1 border-border-accordion", {
            'border-t-1': isBorder,
        })} onClick={onClick}>
            <div className={clsx("transition-all duration-300 flex justify-between items-center group gap-16 mb-0", {'mb-3.5 sm:mb-5 md:mb-7 lg:mb-9': isActive})}>
                <p className="text-s sm:text-base md:text-xl lg:text-3xl leading-6">{title}</p>
                <PlusSvg className={clsx("min-w-9 md:min-w-10 lg:min-w-12 md:min-h-10 lg:min-h-12 md:[&>path]:stroke-1 aspect-square rounded-full group-hover:bg-bg-accordion-plus group-hover:[&>path]:stroke-white transition-all duration-500", {
                    'rotate-45 bg-bg-accordion-plus [&>path]:stroke-white': isActive
                })}/>
            </div>
            <div className={clsx("transition-all duration-300 overflow-hidden h-fit", {
                'max-h-screen': isActive,
                'max-h-0': !isActive
            })}>
                <p className="text-s leading-6 sm:text-base md:text-xl lg:text-2xl sm:leading-8 md:leading-10 lg:leading-12">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default QuestionBlock;
