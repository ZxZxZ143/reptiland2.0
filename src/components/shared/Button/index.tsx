import {FC, PropsWithChildren} from "react";
import clsx from "clsx";

interface ButtonProps {
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
    type?: 'submit' | 'reset' | 'button';
    className?: string;
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
                                                        className,
                                                        type = 'button',
                                                        variant = 'primary',
                                                        onClick,
                                                        children
                                                    }) => {
    const classNameMapping = {
        'primary': 'bg-bg-button',
        'secondary': 'bg-bg-button-secondary'
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={clsx('inline-flex justify-center items-center py-1.5 text-text-button text-lg font-bold rounded-full',
                classNameMapping[variant],
                className)
            }
        >
            {children}
        </button>
    );
};

export default Button;
