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
        <div className={clsx("w-full text-text-questions py-5 border-b-1 border-border-accordion", {
            'border-t-1': isBorder,
        })} onClick={onClick}>
            <div className="flex justify-between items-center group gap-16 mb-3.5">
                <p className="text-s leading-6">{title}</p>
                <PlusSvg className={clsx("min-w-9 aspect-square rounded-full group-hover:bg-bg-accordion-plus group-hover:[&>path]:stroke-white transition-all duration-500", {
                    'rotate-45 bg-bg-accordion-plus [&>path]:stroke-white': isActive
                })}/>
            </div>
            <div className={clsx("transition-all duration-300 overflow-hidden h-fit", {
                'max-h-screen': isActive,
                'max-h-0': !isActive
            })}>
                <p className="text-s leading-6">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default QuestionBlock;
