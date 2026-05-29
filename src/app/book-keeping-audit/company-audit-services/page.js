import { FAQSection, ServiceHero, TabsSection, CTASection } from "@/components";
import { TABSCAS } from "@/data/tabsData";
import { FAQ_CAS_REGIST } from "@/data/faq"
export default function AuditServices() {
    return (
        <>
            <section >
                <ServiceHero
                    title="Company Audit Services"
                    subtitle="Independent audit solutions ensuring financial accuracy and regulatory compliance."
                    price="₹9,999"
                    features={[
                        "Statutory Audit Support",
                        "Financial Statement Review",
                        "Compliance Verification",
                        "Risk Assessment & Reporting",
                    ]}
                />
                <TabsSection tabs={TABSCAS} />
                <FAQSection data={FAQ_CAS_REGIST} />
            </section>
        </>
    );
}
