import { FAQSection, ServiceHero, TabsSection, CTASection } from "@/components";
import { MSMEDATA} from "@/data/tabsData";
import { FAQ_MSME_REGISTRATION} from "@/data/faq"
export default function MSMERegistration() {
    return (
        <>
            <section >
                <ServiceHero
                    title="MSME Registration–Online"
                    subtitle="Private Limited, OPC, LLP — get your business registered hassle-free."
                    price="₹6,999"
                    features={[
                        "Best Price Guaranteed",
                        "Free Expert Assistance",
                        "Complete Online Process",
                        "Filing of MSME Registration Application",
                        "Udyam Registration Certificate",
                        "Current Account opening support"
                    ]}
                />
                <TabsSection tabs={MSMEDATA} />
                <FAQSection data={FAQ_MSME_REGISTRATION} />

            </section>
        </>
    );
}
