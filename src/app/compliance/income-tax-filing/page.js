import { FAQSection, ServiceHero, TabsSection,CTASection } from "@/components";
import { TABSDATA } from "@/data/tabsData";
import { FAQ_COMPANY_REGIST } from "@/data/faq"
export default function IncomeTaxFiling() {
    return (
        <>
            <section >
                <ServiceHero
                    title="Income Tax Return"
                    subtitle="Private Limited, OPC, LLP — get your business registered hassle-free."
                    price="₹6,999"
                    features={[
                        "Best Price Guaranteed",
                        "Free Expert Assistance",
                        "Complete Online Process",
                        "Tax Calculation based on inputs received",
                        "Assistance for Tax Payment or refund filing",
                        "Share ITR Filed copy and Acknowledgement"
                    ]}
                />
                <TabsSection tabs={TABSDATA} />
                <FAQSection data={FAQ_COMPANY_REGIST} />    
            </section>
        </>
    );
}