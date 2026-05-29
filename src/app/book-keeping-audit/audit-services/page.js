import { FAQSection, ServiceHero, TabsSection, CTASection } from "@/components";
import { TABSOA } from "@/data/tabsData";
import { FAQ_OA_REGIST } from "@/data/faq"
export default function AuditServices() {
    return (
        <>
            <section >
                <ServiceHero
                    title="Accounts Outsourcing"
                    subtitle="Professional accounting services for smooth business operations and compliance."
                    price="₹14,999"
                    features={[
                        "Professional Bookkeeping",
                        "GST & Tax Support",
                        "Financial Statement Preparation",
                        "Compliance Assistance",
                    ]}
                />
                <TabsSection tabs={TABSOA} />
                <FAQSection data={FAQ_OA_REGIST} />
            </section>
        </>
    );
}
