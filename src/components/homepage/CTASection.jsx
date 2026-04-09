import { Button, Container, Text } from "..";
import { Calendar, Phone } from "lucide-react";

export default function CTASection({
    title,
    subtitle,
    primaryText = "Book Consultation",
    secondaryText = "Call Now",
}) {
    return (
        <section className="w-full bg-brand-primary py-20 text-white">
            <Container>

                <div className="text-center max-w-2xl mx-auto">

                    {/* Title */}
                    <Text variant="h2" as="h2" className="text-white font-[500]">
                        {title}
                    </Text>

                    {/* Subtitle */}
                    <Text className="mt-4 text-white/90">
                        {subtitle}
                    </Text>

                    {/* Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mt-8">

                        {/* Primary */}
                        <div> <Button
                            variant="yellow"
                            className="flex items-center gap-2 text-xs px-6 py-3 rounded-lg"
                        >
                            <Calendar size={18} />
                            {primaryText}
                        </Button></div>

                        {/* Secondary */}
                        <div><Button
                            variant="outline" className=" gap-2 text-xs border-2 rounded-xl border-white text-white "
                        >
                            <Phone size={18} />
                            {secondaryText}
                        </Button></div>

                    </div>

                </div>

            </Container>
        </section>
    );
}