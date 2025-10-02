import {FC} from 'react';
import {IconProps} from "@/assets/icons/type";
import clsx from "clsx";

const ClockSvg:FC<IconProps> = ({className}) => {
    return (
        <svg className={clsx(className)} width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 0C20.9558 0 27 6.04423 27 13.5C27 20.9558 20.9558 27 13.5 27C6.04425 27 0 20.9558 0 13.5C5.42778e-06 6.04425 6.04426 3.06081e-05 13.5 0ZM13.5 4.25C12.9477 4.25 12.5 4.69775 12.5 5.25V13.25L12.5068 13.3779C12.571 14.0081 13.1029 14.5 13.75 14.5H18.75C19.3022 14.5 19.75 14.0522 19.75 13.5C19.75 12.9478 19.3022 12.5 18.75 12.5H14.5V5.25C14.5 4.69775 14.0523 4.25 13.5 4.25Z" fill="#1E1E1E"/>
        </svg>
    );
};

export default ClockSvg;
