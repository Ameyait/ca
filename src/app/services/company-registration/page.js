import { FAQSection, ServiceHero, TabsSection, CTASection } from "@/components";
import { TABSDATA } from "@/data/tabsData";
import { FAQ_COMPANY_REGIST } from "@/data/faq"
export default function Home() {
    return (
        <>
            <section >
                <ServiceHero
                    title="Private Limited Company Registration"
                    subtitle="Private Limited, OPC, LLP — get your business registered hassle-free."
                    price="₹6,999"
                    features={[
                        "Business registration support",
                        "Professional documentation",
                        "Compliance management",
                        "Expert consultation",
                    ]}
                />
                <TabsSection tabs={TABSDATA} />
                <FAQSection data={FAQ_COMPANY_REGIST} />

            </section>
        </>
    );
}
