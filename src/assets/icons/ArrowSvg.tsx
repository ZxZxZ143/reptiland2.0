import React, {FC} from 'react';
import {IconProps} from "@/assets/icons/type";

const ArrowSvg: FC<IconProps> = ({className}) => {
    return (
        <svg className={className} width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M34.375 41.25L20.625 27.5L34.375 13.75" stroke="url(#paint0_radial_183_172)" strokeWidth="2"/>
            <defs>
                <radialGradient id="paint0_radial_183_172" cx="0" cy="0" r="1"
                                gradientTransform="matrix(15.0138 -0.102611 -0.0217154 -30.0273 27.5 27.6026)"
                                gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="#E8E8E8"/>
                </radialGradient>
            </defs>
        </svg>
    );
};

export default ArrowSvg;
