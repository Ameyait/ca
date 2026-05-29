"use client";

import { useEffect, useRef } from "react";
import { Text } from "..";
export default function AssociationSlider() {
    const scrollRef = useRef(null);

    const items = [
        "TallyPrime",
        "ClearTax",
        "Saral GST",
        "GSTHero",
        "Gen GST",
        "Zoho Books",
        "Busy Accounting",
    ];

    // Auto scroll
    useEffect(() => {
        const container = scrollRef.current;
        let scrollAmount = 0;
        const interval = setInterval(() => {
            if (!container) return;
            scrollAmount += 1;
            container.scrollLeft += 1;
            // infinite loop effect
            if (scrollAmount >= container.scrollWidth / 2) {
                container.scrollLeft = 0;
                scrollAmount = 0;
            }
        }, 20);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full bg-second-bg py-10 overflow-hidden">

            {/* Heading */}
            <Text variant="h2" as="h2">
                Our Trusted Business Partners
            </Text>
            <div
                ref={scrollRef}
                className="flex gap-6 overflow-hidden no-scrollbar pt-5 px-4 md:px-10"
            >
                {[...items, ...items].map((item, i) => (
                    <div
                        key={i}
                        className="min-w-[220px] bg-white rounded-xl shadow-md px-6 py-6 text-center text-gray-700 font-medium"
                    >
                        {item}
                    </div>
                ))}
            </div>
        </section>
    );
}