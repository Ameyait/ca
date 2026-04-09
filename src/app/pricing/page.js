import { FAQSection, ServiceHero, TabsSection,CTASection, PricingSection, FeatureComparison } from "@/components";
import { TABSDATA } from "@/data/tabsData";
import { FAQ_COMPANY_REGIST } from "@/data/faq"
import { PRICING_PLANS } from "@/data/pricing";
export default function Pricing() {
    return (
        <>
            <section >
               <PricingSection data={PRICING_PLANS} />
               <FeatureComparison />
            </section>
        </>
    );
}
