import { FAQSection, ServiceHero, TabsSection, CTASection } from "@/components";
import { SHOPSDATA } from "@/data/tabsData";
import { FAQ_SHOPS_ESTABLISHMENT} from "@/data/faq"
export default function GSTFiling() {
    return (
        <>
            <section >
                <ServiceHero
                    title="Shops & Establishment"
                    subtitle="Private Limited, OPC, LLP — get your business registered hassle-free."
                    price="₹1,999"
                    features={[

                        "Best Price Guaranteed",
                        "Free Expert Assistance",
                        "Complete Online Process",
                        "Get Your Shops & Establishment Certificate on same day",
                        "Proprietorship Registration",
                        "Yearly renewal at 50% discount"
                    ]}
                />
                <TabsSection tabs={SHOPSDATA} />
                <FAQSection data={FAQ_SHOPS_ESTABLISHMENT} />
            </section>
        </>
    );
}
