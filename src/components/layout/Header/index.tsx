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
                <InstaSvg className="w-[42px]" />
                <TgSvg className="w-[42px]" />
                <YoutubeSvg className="w-[42px]" />
            </div>
        </header>
    );
};

export default Header;
