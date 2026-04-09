import type { Metadata, Viewport } from "next";
import { Manrope, M_PLUS_1_Code } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
    variable: "--font-manrope",
    subsets: ["latin", "cyrillic"],
});

const mPlus1Code = M_PLUS_1_Code({
    variable: "--font-M_PLUS_1_Code",
    subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://reptiland.kz"),
    title: {
        default: "Reptiland.kz — первая выставка рептилий в Казахстане",
        template: "%s | Reptiland.kz",
    },
    description:
        "Первая в Казахстане выставка рептилий — уникальное событие для всех любителей экзотических животных и террариумистики. Змеи, ящерицы, хамелеоны, черепахи и другие редкие виды со всего мира.",
    keywords: [
        "Reptiland",
        "Reptiland.kz",
        "выставка рептилий Казахстан",
        "выставка рептилий Алматы",
        "рептилии Алматы",
        "экзотические животные",
        "террариумистика",
        "хамелеоны",
        "змеи",
        "ящерицы",
        "черепахи",
    ],
    applicationName: "Reptiland.kz",
    category: "events",
    alternates: {
        canonical: "/",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
    openGraph: {
        title: "Reptiland.kz — первая выставка рептилий в Казахстане",
        description:
            "Посетите первую в Казахстане выставку рептилий: змеи, ящерицы, хамелеоны, черепахи и другие экзотические животные.",
        url: "https://reptiland.kz",
        siteName: "Reptiland.kz",
        locale: "ru_KZ",
        type: "website",
        images: [
            {
                url: "/images/banner.png",
                width: 1200,
                height: 630,
                alt: "Reptiland.kz — первая выставка рептилий в Казахстане",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Reptiland.kz — первая выставка рептилий в Казахстане",
        description:
            "Змеи, ящерицы, хамелеоны, черепахи и другие редкие рептилии на выставке Reptiland.",
        images: ["/images/banner.png"],
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#ffffff",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Event",
        name: "Reptiland.kz — первая выставка рептилий в Казахстане",
        description:
            "Выставка рептилий в Алматы: змеи, ящерицы, хамелеоны, черепахи и другие экзотические животные.",
        startDate: "2026-05-30T11:00:00+05:00",
        endDate: "2026-05-31T19:00:00+05:00",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        image: ["https://reptiland.kz/images/banner.png"],
        location: {
            "@type": "Place",
            name: "Бакшасарай",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Алматы",
                streetAddress: "ул. Тимирязева, 42к1",
                addressCountry: "KZ",
            },
        },
        organizer: {
            "@type": "Organization",
            name: "Reptiland.kz",
            url: "https://reptiland.kz",
        },
    };

    return (
        <html lang="ru">
        <body
            className={`${manrope.variable} ${mPlus1Code.variable} antialiased font-sans bg-background`}
        >
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        </body>
        </html>
    );
}