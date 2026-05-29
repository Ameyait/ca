import { FAQSection, ServiceHero, TabsSection, CTASection } from "@/components";
import { TABSLLP } from "@/data/tabsData";
import { FAQ_LLP_REGIST } from "@/data/faq"
export default function iipRegistartion() {
    return (
        <>
            <section >
                <ServiceHero
                    title="LLP Registration"
                    subtitle="Professional Limited Liability Partnership registration with end-to-end compliance support."
                    price="₹5,999"
                    features={[
                        "End-to-end LLP Setup",
                        "Dedicated CA Assistance",
                        "Legal Documentation Support",
                        "Annual Compliance Guidance",
                    ]}
                />
                <TabsSection tabs={TABSLLP} />
                <FAQSection data={FAQ_LLP_REGIST} />

            </section>
        </>
    );
}
