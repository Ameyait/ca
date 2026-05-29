import { FAQSection, ServiceHero, TabsSection,CTASection } from "@/components";
import { GSTRETURNDATA} from "@/data/tabsData";
import { GST_REGISTRATION } from "@/data/faq"
export default function IncomeTaxFiling() {
    return (
        <>
            <section >
                <ServiceHero
                    title="GST Return Filing"
                    subtitle="Private Limited, OPC, LLP — get your business registered hassle-free."
                    price="₹6,999"
                    features={[
                        "Best Price Guaranteed",
                        "Free Expert Assistance",
                        "Complete Online Process",
                        "Pay after Service facility for Monthly Packages",
                        "Single Point of Contact for quick query resolutions",
                        "Nil Return Filing when there are no transactions"
                    ]}
                />
                <TabsSection tabs={GSTRETURNDATA} />
                <FAQSection data={GST_REGISTRATION} />    
            </section>
        </>
    );
}
