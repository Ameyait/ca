
import { FAQSection, ServiceHero, TabsSection, CTASection } from "@/components";
import { TABSOPC } from "@/data/tabsData";
import { FAQ_OPC_REGIST } from "@/data/faq"
export default function onePersonCompany() {
    return (
        <>
            <section >
                <ServiceHero
                    title="One Person Company Registration"
                    subtitle="Professional One Person Company registration with end-to-end compliance support."
                    price="₹4,999"
                    features={[
                        "Quick OPC Registration",
                        "Dedicated CA Support",
                        "Company PAN & TAN",
                        "Complete Compliance Assistance",
                    ]}
                />
                <TabsSection tabs={TABSOPC} />
                <FAQSection data={FAQ_OPC_REGIST} />

            </section>
        </>
    );
}
