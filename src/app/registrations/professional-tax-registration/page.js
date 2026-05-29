import { FAQSection, ServiceHero, TabsSection, CTASection } from "@/components";
import { TAXSDATA } from "@/data/tabsData";
import { FAQ_PROFESSIONAL_TAX  } from "@/data/faq"
export default function GSTFiling() {
    return (
        <>
            <section >
                <ServiceHero
                    title="Professional Tax Registration"
                    subtitle="Private Limited, OPC, LLP — get your business registered hassle-free."
                    price="₹6,999"
                    features={[

                        "Best Price Guaranteed",
                        "Free Expert Assistance",
                        "Complete Online Process",
                        "Filing of PT Registration in Telangana",
                        "PT Registration Certificate",
                        "Create PT Logins"
                    ]}
                />
                <TabsSection tabs={TAXSDATA} />
                <FAQSection data={FAQ_PROFESSIONAL_TAX } />
            </section>
        </>
    );
}
