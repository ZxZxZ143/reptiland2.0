import Title from "@/components/shared/Title";
import TgSvg from "@/assets/icons/TgSvg";
import InstaSvg from "@/assets/icons/InstaSvg";
import YoutubeSvg from "@/assets/icons/YoutubeSvg";
import PhoneSvg from "@/assets/icons/PhoneSvg";
import MailSvg from "@/assets/icons/MailSvg";

const Footer = () => {
    return (
        <div className="mt-[77px]">
            <Title>Хотите задать нам вопрос?</Title>
            <p className="font-medium text-sm leading-6 mt-1.5 text-subtext-footer">
                Свяжитесь с нами по любому вопрос
                по электронной почте, в социальных сетях
                или по номеру телефона на WhatsApp
            </p>
            <div className="flex flex-col w-full items-center mt-9 px-9 gap-7">
                <div className="flex justify-center items-center gap-4 w-full py-4 bg-bg-footer rounded-[20px]">
                    <InstaSvg className="w-10" />
                    <TgSvg className="w-10" />
                    <YoutubeSvg className="w-10" />
                </div>
                <div className="flex justify-center items-center gap-4 w-full py-4 bg-bg-footer rounded-[20px]">
                    <PhoneSvg className="w-10" />
                    <MailSvg className="w-10" />
                </div>
            </div>
            <p className="mt-20 block text-center text-text-label font-medium text-base">
                © Рептилэнд, 2025
            </p>
        </div>
    );
};

export default Footer;
