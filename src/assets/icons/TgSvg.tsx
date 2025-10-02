import {FC} from "react";
import {IconProps} from "@/assets/icons/type";
import clsx from "clsx";

const TgSvg: FC<IconProps> = ({className}) => {
    return (
        <svg className={clsx(className)} width="42" height="42" viewBox="0 0 42 42" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <rect width="42" height="42" rx="21" fill="#1E1E1E"/>
            <path
                d="M22.7647 31C19.8529 31 17.6691 29.4583 17.6691 25.75V19.8333H15V16.625C17.9118 15.8333 19.125 13.25 19.2868 11H22.3199V16.0833H25.8382V19.8333H22.3199V25C22.3199 26.5417 23.0882 27.0833 24.3015 27.0833H26V31H22.7647Z"
                fill="white"/>
        </svg>
    );
};

export default TgSvg;
