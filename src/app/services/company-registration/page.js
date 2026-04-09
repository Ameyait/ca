import { FAQSection, ServiceHero, TabsSection,CTASection } from "@/components";
import { TABSDATA } from "@/data/tabsData";
import { FAQ_COMPANY_REGIST } from "@/data/faq"
export default function Home() {
    return (
        <>
            <section >
                <ServiceHero
                    title="Company Registration"
                    subtitle="Private Limited, OPC, LLP — get your business registered hassle-free."
                    price="₹6,999"
                    features={[
                        "End-to-end registration support",
                        "DSC & DIN included",
                        "MOA & AOA drafting",
                        "PAN & TAN application",
                    ]}
                />
                <TabsSection tabs={TABSDATA} />
                <FAQSection data={FAQ_COMPANY_REGIST} />
                
            </section>
        </>
    );
}
