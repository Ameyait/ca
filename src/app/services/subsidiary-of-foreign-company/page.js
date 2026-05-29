import { FAQSection, ServiceHero, TabsSection, CTASection } from "@/components";
import { TABSSOFC } from "@/data/tabsData";
import { FAQ_SOFC_REGIST } from "@/data/faq"
export default function SubsidiaryOFForgComp() {
    return (
        <>
            <section >
                <ServiceHero
                    title="Subsidiary of Foreign Company"
                    subtitle="Set up your subsidiary company in India with our expert assistance."
                    price="₹10,999"
                    features={[
                        "Foreign Company Registration",
                        "Dedicated CA Assistance",
                        "Regulatory Compliance Support",
                        "Business Setup Guidance",
                    ]}
                />
                <TabsSection tabs={TABSSOFC} />
                <FAQSection data={FAQ_SOFC_REGIST} />

            </section>
        </>
    );
}
