import { FAQSection, ServiceHero, TabsSection,CTASection } from "@/components";
import { PVTDATA } from "@/data/tabsData";
import { PVT_REGISTRATION  } from "@/data/faq"
export default function IncomeTaxFiling() {
    return (
        <>
            <section >
                <ServiceHero
                    title="Private Limited Compliances"
                    subtitle="Private Limited, OPC, LLP — get your business registered hassle-free."
                    price="₹7,999"
                    features={[
                        "Best Price Guaranteed",
                        "Free Expert Assistance",
                        "Complete Online Process",
                        "Filing of ROC Annual Returns",
                        "Company Audit from CA Partners",
                        "Book Keeping and Tax Compliance"
                    ]}
                />
                <TabsSection tabs={PVTDATA} />
                <FAQSection data={PVT_REGISTRATION } />    
            </section>
        </>
    );
}
