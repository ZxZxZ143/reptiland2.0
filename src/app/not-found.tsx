import Link from "next/link";
import Header from "@/components/layout/Header";
import Button from "@/components/shared/Button";

export default function NotFound() {
    return (
        <div className="min-h-screen py-3 flex flex-col w-full bg-background">
            <Header/>

            <main
                id="main-content"
                className="flex-1 px-5 pb-10 max-w-[1280px] mx-auto w-full lg:px-[68px] flex items-center justify-center"
            >
                <section
                    className="w-full max-w-[600px] mx-auto flex flex-col items-start"
                    aria-labelledby="not-found-title"
                >
                    <p className="font-alt font-bold text-title-buy-section text-sm tracking-[0.3em] uppercase">
                        404
                    </p>

                    <h1
                        id="not-found-title"
                        className="mt-4 font-alt font-bold uppercase tracking-[0.08em]
                                   text-3xl sm:text-4xl md:text-5xl
                                   text-header-text leading-tight"
                    >
                        Кажется, эта страница уползла
                    </h1>

                    <div className="mt-6 w-12 h-[2px] bg-title-buy-section/40 rounded-full"/>

                    <p className="mt-6 font-alt text-subtext-footer text-base sm:text-lg leading-7">
                        Возможно, ссылка устарела, страница была перемещена или её никогда не существовало.
                        Главное событие на месте — выставка Reptiland ждёт вас.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Link
                            href="/"
                            aria-label="Вернуться на главную страницу"
                            className="block w-full sm:w-auto"
                        >
                            <Button className="w-full sm:min-w-[220px]">
                                НА ГЛАВНУЮ
                            </Button>
                        </Link>

                        <Button variant="secondary" className="w-full sm:min-w-[220px]">
                            КУПИТЬ БИЛЕТЫ
                        </Button>
                    </div>

                    <div className="mt-10 rounded-2xl bg-bg-footer px-5 py-3 w-fit">
                        <p className="text-text-label text-sm sm:text-base font-medium tracking-wide">
                            Алматы · 30–31 мая · Reptiland
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}