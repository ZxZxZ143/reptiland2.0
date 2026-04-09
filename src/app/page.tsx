import Banner from "@/components/Banner";
import Header from "@/components/layout/Header";
import BuySection from "@/components/BuySection";
import InfoSlider from "@/components/InfoSlider";
import RulesSection from "@/components/RulesSection";
import FrequencyQuestionsSection from "@/components/FrequencyQuestionsSection";
import TicketCost from "@/components/TicketsCost";
import Footer from "@/components/layout/Footer";
import SchemaPlaceholder from "@/components/SchemaPlaceholder";

export default function Home() {
    return (
        <div className="py-3 md:mb-11">
            <Header />

            <main id="main-content">
                <Banner />

                <div className="px-5 pt-8 max-w-[1280px] mx-auto lg:px-[68px]">
                    <BuySection />
                    <InfoSlider />
                    <SchemaPlaceholder />
                    <RulesSection />
                    <FrequencyQuestionsSection />
                    <TicketCost />
                </div>
            </main>

            <div className="px-5 max-w-[1280px] mx-auto lg:px-[68px]">
                <Footer />
            </div>
        </div>
    );
}