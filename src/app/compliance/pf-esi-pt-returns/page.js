import { FAQSection, ServiceHero, TabsSection, CTASection } from "@/components";
import { PFESIPTDATA } from "@/data/tabsData";
import { PF_REGISTRATION } from "@/data/faq"
export default function IncomeTaxFiling() {
    return (
        <>
            <section >
                <ServiceHero
                    title="PF, ESI & PT Return Filing"
                    subtitle="Private Limited, OPC, LLP — get your business registered hassle-free."
                    price="₹6,999"
                    features={[

                        "Best Price Guaranteed",
                        "Free Expert Assistance",
                        "Complete Online Process",
                        "Filing of PF, ESI & PT Monthly returns",
                        "Filing PT Annual Returns",
                        "Managing Employees in PF & ESI Portals"
                    ]}
                />
                <TabsSection tabs={PFESIPTDATA} />
                <FAQSection data={PF_REGISTRATION} />
            </section>
        </>
    );
}
