import FAQItem from "./FAQItem";
import { Container, SectionHeader } from "..";
 
export default function FAQSection({ data }) {
    return (
        <section className="w-full bg-first-bg py-20">
            <Container>
                {/* Header */}
                <SectionHeader title="Frequently Asked Questions" />
                {/* FAQ List */}
                <div className="max-w-2xl mx-auto space-y-4">
                    {data.map((item, index) => (
                        <FAQItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                        />
                    ))}
                </div>
 
            </Container>
        </section>
    );
}
 