import { AssociationSlider, HeroSection, WhyChooseUsSection, PricingSection, TestimonialSection, FAQSection, CTASection, Footer } from "@/components";
import ServicesSection from "@/components/homepage/ServiceSection";
import Image from "next/image";
import { SERVICES } from "@/data/services";
import { WHY_CHOOSE_US } from "@/data/whyChooseUs";
import { PRICING_PLANS } from "@/data/pricing";
import { TESTIMONIALS } from "@/data/testimonials";
import { FAQ_DATA } from "@/data/faq";
export default function Home() {
  return (
    <>
      <section >
        <HeroSection />
        <AssociationSlider />
        <ServicesSection data={SERVICES} />
        <WhyChooseUsSection data={WHY_CHOOSE_US} />
        <PricingSection data={PRICING_PLANS} />
        <TestimonialSection data={TESTIMONIALS} />
        <FAQSection data={FAQ_DATA} />
      </section>
    </>
  );
}
