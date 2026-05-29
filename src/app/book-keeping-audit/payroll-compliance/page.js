import { FAQSection, ServiceHero, TabsSection, CTASection } from "@/components";
import { TABSPRC } from "@/data/tabsData";
import { FAQ_PRC_REGIST } from "@/data/faq"
export default function AuditServices() {
    return (
        <>
            <section >
                <ServiceHero
                    title="Payroll Compliance"
                    subtitle="Accurate payroll processing and regulatory compliance support."
                    price="₹10,999"
                    features={[
                        "Accurate Salary Processing",
                        "PF, ESI & PT Compliance",
                        "TDS Calculation & Filing",
                        "Payroll Reports & Documentation",
                    ]}
                />
                <TabsSection tabs={TABSPRC} />
                <FAQSection data={FAQ_PRC_REGIST} />
            </section>
        </>
    );
}
