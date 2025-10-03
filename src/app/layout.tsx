import type { Metadata } from "next";
import { Manrope, M_PLUS_1_Code } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

const m_PLUS_1_Code = M_PLUS_1_Code({
    variable: "--font-M_PLUS_1_Code",
    subsets: ["latin", "vietnamese"]
});

export const metadata: Metadata = {
  title: "Reptiland.kz",
  description: "Первая в Казахстане выставка рептилий — уникальное событие для всех любителей экзотических животных и террариумистики. Посетителей ждут змеи, ящерицы, хамелеоны, черепахи и другие редкие виды со всего мира. На выставке вы сможете ближе познакомиться с удивительным миром рептилий, узнать об их особенностях содержания и пообщаться с опытными заводчиками. Это отличная возможность открыть для себя разнообразие живой природы и сделать яркие впечатления для всей семьи.",
    keywords: [
        "выставка рептилий Казахстан",
        "рептилии Алматы",
        "экзотические животные",
        "террариумистика",
        "хамелеоны",
        "змеи",
        "ящерицы",
        "черепахи"
    ],
    openGraph: {
        title: "Reptiland.kz — Первая выставка рептилий в Казахстане",
        description:
            "Посетите первую в Казахстане выставку рептилий! Экзотические животные, змеи, хамелеоны, черепахи и многое другое.",
        url: "https://reptiland.kz",
        siteName: "Reptiland.kz",
        images: [
            {
                url: "/images/banner.png",
                width: 1200,
                height: 630,
                alt: "Выставка рептилий в Казахстане"
            }
        ],
        locale: "ru_RU",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Reptiland.kz — Первая выставка рептилий в Казахстане",
        description:
            "Змеи, ящерицы, хамелеоны, черепахи и редкие рептилии. Уникальное событие в Казахстане для любителей экзотических животных.",
        images: ["/images/banner.png"]
    },
    icons: {
        icon: "/favicon.ico"
    },
    alternates: {
        canonical: "https://reptiland.kz"
    },
    other: {
        // Telegram
        "telegram:title": "Первая выставка рептилий в Казахстане — Reptiland.kz",
        "telegram:description":
            "Подписывайтесь на официальный Telegram Reptiland и узнавайте все новости о выставке рептилий.",
        "telegram:keywords":
            "выставка рептилий Казахстан, Telegram рептилии, reptiland telegram, новости террариумистики",

        // WhatsApp
        "whatsapp:title": "Reptiland в WhatsApp — выставка рептилий Казахстан",
        "whatsapp:description":
            "Общайтесь с нами напрямую через WhatsApp, бронируйте билеты и узнавайте новости о выставке рептилий.",
        "whatsapp:keywords":
            "выставка рептилий Казахстан, WhatsApp reptiland, купить билет выставка рептилий, WhatsApp контакт reptiland",

        // Instagram
        "instagram:title":
            "Reptiland в Instagram — первая выставка рептилий в Казахстане",
        "instagram:description":
            "Следите за фото и видео рептилий на нашей странице в Instagram! Хамелеоны, змеи, черепахи и ящерицы ждут вас.",
        "instagram:keywords":
            "выставка рептилий Казахстан, reptiland instagram, фото рептилий, экзотические животные Алматы",
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${m_PLUS_1_Code.variable} antialiased font-sans bg-background`}
      >
        {children}
      </body>
    </html>
  );
}
