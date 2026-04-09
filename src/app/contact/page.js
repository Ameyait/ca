"use client";

import { EnquiryForm, Text } from "@/components";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactSection() {
    return (
        <section className="w-full bg-first-bg">

            {/* TOP CONTENT */}
            <div className="py-12 md:py-16">

                {/* Header */}
                <div className="text-center mb-10 px-4">
                    <Text variant="h2" as="h2" className="text-[#0e7490] mb-3">
                        Contact Us
                    </Text>
                    <Text variant="p" as="p" className="text-gray-600">
                        Have questions? Reach out and our team will get back to you within 2 hours.
                    </Text>
                </div>

                {/* Layout */}
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[1.2fr_1fr] gap-20">
                    {/* LEFT */}
                    <div className="space-y-5">
                        <div className="flex gap-4 bg-white rounded-2xl p-5 shadow-sm">
                            <div className="bg-gray-100 p-3 rounded-xl">
                                <MapPin className="text-[#0e7490]" size={20} />
                            </div>
                            <div>
                                <Text as="h3" variant="h3" className="font-semibold">Office Address</Text>
                                <Text as="p" variant="p">
                                    Flat No. 302, Plot No. 320, Gokul Nilayam, Road No. 7, Anjaneya Nagar, Moosapet, Kukatpally, Hyderabad – 500018
                                </Text>
                            </div>
                        </div>
                        <div className="flex gap-4 bg-white rounded-2xl p-5 shadow-sm">
                            <div className="bg-gray-100 p-3 rounded-xl">
                                <Phone className="text-[#0e7490]" size={20} />
                            </div>
                            <div>
                                <Text as="h3" variant="h3" className="font-semibold">Phone</Text>
                                <p className="text-gray-600 text-sm mt-1">+91 9000010000</p>
                            </div>
                        </div>

                        <div className="flex gap-4 bg-white rounded-2xl p-5 shadow-sm">
                            <div className="bg-gray-100 p-3 rounded-xl">
                                <Mail className="text-[#0e7490]" size={20} />
                            </div>
                            <div>
                                <Text as="h3" variant="h3" className="font-semibold">Email</Text>
                                <p className="text-gray-600 text-sm mt-1">info@contact.com</p>
                            </div>
                        </div>

                        <div className="flex gap-4 bg-white rounded-2xl p-5 shadow-sm">
                            <div className="bg-gray-100 p-3 rounded-xl">
                                <Clock className="text-[#0e7490]" size={20} />
                            </div>
                            <div>
                                <Text as="h3" variant="h3" className="font-semibold">Working Hours</Text>
                                <p className="text-gray-600 text-sm mt-1">
                                    Mon – Sat: 10:00 AM – 7:00 PM
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT FORM */}
                    <div className="md:sticky md:top-24 h-fit">
                        <EnquiryForm title="Get Free Consultation" />
                    </div>

                </div>
            </div>

            {/* MAP SECTION */}
            <div className="w-full h-[350px] md:h-[450px]">
                <iframe
                    src="https://www.google.com/maps?q=Hyderabad&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    className="w-full h-full"
                ></iframe>
            </div>

        </section>
    );
}