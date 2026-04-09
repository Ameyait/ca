"use client";

import { Text } from "@/components";

export default function AssociationsSection() {
    const data = [
        {
            icon: "e",
            title: "eMudhra",
            desc: "Digital Signature Certificate Partner",
        },
        {
            icon: "T",
            title: "TallyPrime",
            desc: "Authorized Tally Solutions Provider",
        },
        {
            icon: "G",
            title: "Genius Tax Software",
            desc: "Tax Filing Technology Partner",
        },
        {
            icon: "S",
            title: "Spegta GST",
            desc: "GST Compliance Software Partner",
        },
        {
            icon: "Q",
            title: "Quick2Tally",
            desc: "Accounting Automation Partner",
        },
        {
            icon: "C",
            title: "ClearTax",
            desc: "Tax & Compliance Platform",
        },
    ];

    return (
        <section className="w-full py-12 md:py-16 bg-first-bg">

            {/* Header */}
            <div className="text-center mb-12 px-4">
                <Text as="h2" variant="h2">
                    Our Associations
                </Text>
                <Text as="p" variant="p" className="text-gray-600 max-w-2xl mx-auto">
                    We partner with leading technology and financial platforms to deliver the best services.
                </Text>
            </div>

            {/* Grid */}
            <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-2 md:grid-cols-3 gap-6">

                {data.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition"
                    >

                        {/* Icon Box */}
                        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[#efe6d6] rounded-xl text-[#0e7490] text-xl font-semibold">
                            {item.icon}
                        </div>

                        {/* Title */}
                        <h4 className="font-semibold text-text-primary mb-1">
                            {item.title}
                        </h4>

                        {/* Description */}
                        <p className="text-sm text-gray-600">
                            {item.desc}
                        </p>

                    </div>
                ))}

            </div>
        </section>
    );
}