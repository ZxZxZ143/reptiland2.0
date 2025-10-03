import {FC, PropsWithChildren} from 'react';
import clsx from "clsx";

interface TitleProps {
    className?: string;
}

const Title:FC<PropsWithChildren<TitleProps>> = ({className, children}) => {
    return (
        <h2 className={clsx('text-xl font-bold text-title sm:text-2xl md:text-4xl lg:text-5xl', className)}>
            {children}
        </h2>
    );
};

export default Title;
