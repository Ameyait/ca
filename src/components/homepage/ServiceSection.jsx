import { ServiceCard, SectionHeader, Container, Text } from "..";

export default function ServicesSection({ data }) {
    return (
        <section className="w-full bg-first-bg py-16">
            <Container>
                <SectionHeader
                    title="Our Services"
                    subtitle="Professional tax, accounting, and compliance solutions designed to support your business operations."
                />
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {data.map((item, i) => (
                        <ServiceCard
                            key={i}
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