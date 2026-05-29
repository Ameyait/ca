import { FAQSection, ServiceHero, TabsSection,CTASection } from "@/components";
import { GSTDATA } from "@/data/tabsData";
import { FAQ_GST_REGISTRATION } from "@/data/faq"
export default function GSTFiling() {
    return (
        <>
            <section >
                <ServiceHero
                    title="GST Registration"
                    subtitle="Private Limited, OPC, LLP — get your business registered hassle-free."
                    price="₹6,999"
                    features={[
                        "End-to-end registration support",
                        "DSC & DIN included",
                        "MOA & AOA drafting",
                        "PAN & TAN application",
                    ]}
                />
                <TabsSection tabs={GSTDATA} />
                <FAQSection data={FAQ_GST_REGISTRATION } />    
            </section>
        </>
    );
}
