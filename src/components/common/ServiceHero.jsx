import { Container, Text, Button,EnquiryForm } from "..";
import { Check } from "lucide-react";
export default function ServiceHero({
    title,
    subtitle,
    price,
    features = [],
}) {
    return (
        <section className="w-full bg-first-bg py-20">
            <Container>
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    {/* LEFT CONTENT */}
                    <div>
                        <Text variant="h1" as="h1" className="text-brand-primary">
                            {title}
                        </Text>
                        <Text className="mt-4 text-text-secondary">
                            {subtitle}
                        </Text>
                        <div className="mt-6 inline-block bg-[#f3dba5] px-6 py-4 rounded-xl">
                            <span className="text-text-secondary text-sm mr-2">
                                Starting from
                            </span>
                            <span className="text-3xl font-bold text-brand-primary">
                                {price}
                            </span>
                        </div>
                        {/* Features */}
                        <ul className="mt-6 space-y-3">
                            {features.map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <Check className="text-green-500" size={18} />
                                    <span className="text-text-primary">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <EnquiryForm title="Enquire About GST Filing" />
                </div>
            </Container>
        </section>
    );
}