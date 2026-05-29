import { FAQSection, ServiceHero, TabsSection, CTASection } from "@/components";
import { FOODDATA } from "@/data/tabsData";
import { FAQ_FOOD_LICENSE } from "@/data/faq"
export default function GSTFiling() {
    return (
        <>
            <section >
                <ServiceHero
                    title="Food License – Online"
                    subtitle="Private Limited, OPC, LLP — get your business registered hassle-free."
                    price="₹1,999"
                    features={[


                        "Best Price Guaranteed",
                        "Free Expert Assistance",
                        "Complete Online Process",
                        "Filing of Application for Food License",
                        "Food License Certificate",
                        "Food License Renewal"
                    ]}
                />
                <TabsSection tabs={FOODDATA} />
                <FAQSection data={FAQ_FOOD_LICENSE} />
            </section>
        </>
    );
}
