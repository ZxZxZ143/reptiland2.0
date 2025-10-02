import {FC} from "react";
import {IconProps} from "@/assets/icons/type";
import clsx from "clsx";

const MapPointSvg: FC<IconProps> = ({className}) => {
    return (
        <svg className={clsx(className)} width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.2832 0.0105C19.0665 0.0106827 24.5654 5.50942 24.5654 12.2927C24.5654 21.4769 14.7861 26.8447 12.6797 27.8943C12.4248 28.0213 12.1416 28.0212 11.8867 27.8943C9.78092 26.845 1.58716e-05 21.4773 0 12.2927C0 5.50931 5.49978 0.0105 12.2832 0.0105ZM12.2832 7.02905C9.37602 7.02905 7.01855 9.38555 7.01855 12.2927C7.01856 15.1999 9.37603 17.5564 12.2832 17.5564C15.1902 17.5562 17.5469 15.1998 17.5469 12.2927C17.5469 9.38566 15.1902 7.02924 12.2832 7.02905Z" fill="#1E1E1E"/>
        </svg>
    );
};

export default MapPointSvg;
