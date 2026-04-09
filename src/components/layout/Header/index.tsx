import InstaSvg from "@/assets/icons/InstaSvg";
import TgSvg from "@/assets/icons/TgSvg";
import YoutubeSvg from "@/assets/icons/YoutubeSvg";

const Header = () => {
    return (
        <header
            className="flex w-full justify-between items-center gap-3 flex-wrap px-5 md:px-7 lg:px-12 max-w-[1280px] mx-auto"
            role="banner"
        >
            <div>
                <a
                    href="/"
                    aria-label="Reptiland — перейти на главную страницу"
                >
                    <span className="sr-only">Главная страница Reptiland</span>
                    <h1 className="font-alt text-3xl text-header-text tracking-[4px] font-bold md:text-5xl">
                        REPTILAND
                    </h1>
                </a>
            </div>

            <nav
                className="flex items-center justify-end gap-4"
                aria-label="Социальные сети Reptiland"
            >
                <a
                    href="https://www.instagram.com/reptiland_kz?igsh=ZTI3c2FkNDk2MDRm"
                    target="_blank"
                    rel="noopener noreferrer external"
                    aria-label="Instagram Reptiland — открывается в новой вкладке"
                    title="Instagram Reptiland"
                >
                    <InstaSvg className="w-[42px]" aria-hidden="true" />
                </a>

                <a
                    href="https://t.me/almazoonews"
                    target="_blank"
                    rel="noopener noreferrer external"
                    aria-label="Telegram Reptiland — открывается в новой вкладке"
                    title="Telegram Reptiland"
                >
                    <TgSvg className="w-[42px]" aria-hidden="true" />
                </a>

                <a
                    href="https://www.youtube.com/channel/UCaFJ3j24WUzTnIQq0aLrhqQ"
                    target="_blank"
                    rel="noopener noreferrer external"
                    aria-label="YouTube Reptiland — открывается в новой вкладке"
                    title="YouTube Reptiland"
                >
                    <YoutubeSvg className="w-[42px]" aria-hidden="true" />
                </a>
            </nav>
        </header>
    );
};

export default Header;