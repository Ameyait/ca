import { FAQSection, ServiceHero, TabsSection,CTASection } from "@/components";
import { TABSDATA } from "@/data/tabsData";
import { FAQ_COMPANY_REGIST } from "@/data/faq"
export default function AuditServices() {
    return (
        <>
            <section >
                <ServiceHero
                    title="Audit Services"
                    subtitle="Statutory, internal, and tax audits conducted by experienced Chartered Accountants."
                    price="₹14,999"
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
