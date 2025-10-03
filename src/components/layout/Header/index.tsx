import InstaSvg from "@/assets/icons/InstaSvg";
import TgSvg from "@/assets/icons/TgSvg";
import YoutubeSvg from "@/assets/icons/YoutubeSvg";

const Header = () => {
    return (
        <header className="flex justify-between items-center gap-3 flex-wrap px-5 md:px-7 lg:px-12 max-w-[1280px] mx-auto">
            <h1 className="font-alt text-3xl text-header-text tracking-[4px] font-bold md:text-5xl">
                REPTILAND
            </h1>
            <div className="flex items-center justify-end gap-4">
                <a href="https://www.instagram.com/reptiland_kz?igsh=ZTI3c2FkNDk2MDRm" target="_blank" rel="noopener noreferrer">
                    <InstaSvg className="w-[42px]" />
                </a>
                <a href="https://t.me/almazoonews" target="_blank" rel="noopener noreferrer">
                    <TgSvg className="w-[42px]" />
                </a>
                <a href="https://www.youtube.com/channel/UCaFJ3j24WUzTnIQq0aLrhqQ" target="_blank" rel="noopener noreferrer">
                    <YoutubeSvg className="w-[42px]" />
                </a>
            </div>
        </header>
    );
};

export default Header;
