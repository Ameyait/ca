import PricingCard from "./PricingCard";
import { Container, SectionHeader } from "..";

export default function PricingSection({ data }) {
    return (
        <section className=" bg-first-bg py-16">
            <Container>
                <SectionHeader
                    title="Simple, Transparent Pricing"
                    subtitle="Choose a plan that fits your business needs."
                />
                <div className="grid gap-10 md:grid-cols-3 max-w-5xl m-auto items-center">
                    {data.map((plan, index) => (
                        <PricingCard key={index} {...plan} />
                    ))}
                </div>
            </Container>
        </section>
    );
}