import {FC} from 'react';
import {IconProps} from "@/assets/icons/type";

const PlusSvg: FC<IconProps> = ({className}) => {
    return (
        <svg className={className} width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 9.25L17.5 26.75" stroke="#3D3D3D" strokeWidth="2" strokeLinecap="round"/>
            <path d="M26.25 18L8.75 18" stroke="#3D3D3D" strokeWidth="2" strokeLinecap="round"/>
        </svg>
    );
};

export default PlusSvg;
