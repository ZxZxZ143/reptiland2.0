import {FC, PropsWithChildren} from "react";
import clsx from "clsx";

interface SliderButtonProps {
    onClick: () => void;
    className?: string;
}

const SliderButton:FC<PropsWithChildren<SliderButtonProps>> = ({className, onClick, children}) => {
    return (
        <button onClick={onClick} className={clsx('bg-bg-slider-button rounded-full w-[93px] aspect-square flex justify-center items-center', className)}>
            {children}
        </button>
    );
};

export default SliderButton;
