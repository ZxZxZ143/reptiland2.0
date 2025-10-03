import {FC, PropsWithChildren} from "react";
import clsx from "clsx";

interface ButtonProps {
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
    type?: 'submit' | 'reset' | 'button';
    className?: string;
    size?: 'small' | 'medium' | 'large';
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
                                                        className,
                                                        type = 'button',
                                                        variant = 'primary',
                                                        onClick,
                                                        children,
                                                        size = 'medium',
                                                    }) => {
    const classNameMapping = {
        'primary': 'bg-bg-button hover:bg-bg-button/80 active:bg-bg-button/50',
        'secondary': 'bg-bg-button-secondary hover:bg-bg-button-secondary/80 active:bg-bg-button-secondary/50'
    }

    const sizeMapping = {
        'small': 'py-2.5',
        'medium': 'p-3',
        'large': 'p-4'
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={clsx('transition cursor-pointer inline-flex justify-center items-center text-text-button text-lg font-bold rounded-full',
                classNameMapping[variant],
                sizeMapping[size],
                className)
            }
        >
            {children}
        </button>
    );
};

export default Button;
