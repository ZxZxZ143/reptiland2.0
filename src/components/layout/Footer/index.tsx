import Title from "@/components/shared/Title";
import TgSvg from "@/assets/icons/TgSvg";
import InstaSvg from "@/assets/icons/InstaSvg";
import YoutubeSvg from "@/assets/icons/YoutubeSvg";
import PhoneSvg from "@/assets/icons/PhoneSvg";
import MailSvg from "@/assets/icons/MailSvg";

const Footer = () => {
    return (
        <footer
            className="mt-[77px] sm:mt-24 md:mt-28 lg:mt-36"
            aria-labelledby="footer-contact-title"
        >
            <div id="footer-contact-title">
                <Title>Хотите задать нам вопрос?</Title>
            </div>

            <p className="font-medium text-sm sm:text-base md:text-md lg:text-lg leading-6 mt-1.5 text-subtext-footer md:whitespace-pre-line">
                Свяжитесь с нами по любому вопросу
                по электронной почте, в социальных сетях {"\n"}
                или по номеру телефона в WhatsApp
            </p>

            <div className="flex flex-col w-full items-center mt-9 sm:mt-11 md:mt-12 px-9 gap-7 md:gap-12 sm:flex-row-reverse sm:justify-end sm:px-0">
                <nav
                    className="flex justify-center items-center gap-4 w-full py-4 bg-bg-footer rounded-[20px] sm:w-[277px]"
                    aria-label="Социальные сети Reptiland"
                >
                    <a
                        href="https://www.instagram.com/reptiland_kz?igsh=ZTI3c2FkNDk2MDRm"
                        target="_blank"
                        rel="noopener noreferrer external"
                        aria-label="Instagram Reptiland, откроется в новой вкладке"
                        title="Instagram Reptiland"
                    >
                        <InstaSvg
                            className="w-10"
                            aria-hidden="true"
                        />
                    </a>

                    <a
                        href="https://t.me/almazoonews"
                        target="_blank"
                        rel="noopener noreferrer external"
                        aria-label="Telegram Reptiland, откроется в новой вкладке"
                        title="Telegram Reptiland"
                    >
                        <TgSvg
                            className="w-10"
                            aria-hidden="true"
                        />
                    </a>

                    <a
                        href="https://www.youtube.com/channel/UCaFJ3j24WUzTnIQq0aLrhqQ"
                        target="_blank"
                        rel="noopener noreferrer external"
                        aria-label="YouTube Reptiland, откроется в новой вкладке"
                        title="YouTube Reptiland"
                    >
                        <YoutubeSvg
                            className="w-10"
                            aria-hidden="true"
                        />
                    </a>
                </nav>

                <address className="not-italic flex justify-center items-center gap-4 w-full py-4 bg-bg-footer rounded-[20px] sm:w-[277px]">
                    <a
                        href="tel:+77051194143"
                        aria-label="Позвонить по номеру +7 705 119 4143"
                        title="Позвонить"
                    >
                        <PhoneSvg
                            className="w-10"
                            aria-hidden="true"
                        />
                    </a>

                    <a
                        href="mailto:reptiland.contact@gmail.com"
                        aria-label="Написать на почту reptiland.contact@gmail.com"
                        title="Написать на почту"
                    >
                        <MailSvg
                            className="w-10"
                            aria-hidden="true"
                        />
                    </a>
                </address>
            </div>

            <p className="mt-20 block text-center text-text-label font-medium text-base sm:text-md md:text-lg lg:text-xl">
                <small>© Рептилэнд, {new Date().getFullYear()}</small>
            </p>
        </footer>
    );
};

export default Footer;