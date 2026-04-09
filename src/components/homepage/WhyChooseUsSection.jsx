import { Container, WhyCard, SectionHeader } from "..";
export default function WhyChooseUsSection({ data }) {
    return (
        <section className="w-full bg-second-bg py-16">
            <Container>
                <SectionHeader
                    title="Why Choose Us"
                    subtitle="Trusted by 500+ businesses across Hyderabad for reliable financial services."
                />
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {data.map((item, index) => (
                        <WhyCard
                            key={index}
                            title={item.title}
                            description={item.description}
                            Icon={item.icon}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}