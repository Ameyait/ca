import { FAQSection, ServiceHero, TabsSection,CTASection } from "@/components";
import { TDSDATA } from "@/data/tabsData";
import { TDS_REGISTRATION } from "@/data/faq"
export default function IncomeTaxFiling() {
    return (
        <>
            <section >
                <ServiceHero
                    title="TDS Returns"
                    subtitle="Private Limited, OPC, LLP — get your business registered hassle-free."
                    price="₹6,999"
                    features={[
                        "Best Price Guaranteed",
                        "Free Expert Assistance",
                        "Complete Online Process",
                        "Pay after service option available for monthly packages",
                        "Single point of contact for quick query resolution",
                        "Generating form 16 and form 16A for all the employees and vendors"
                    ]}
                />
                <TabsSection tabs={TDSDATA} />
                <FAQSection data={TDS_REGISTRATION} />    
            </section>
        </>
    );
}
