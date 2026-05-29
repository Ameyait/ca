import { Container, Text } from "..";
import { MapPin, Phone, Mail, Link } from "lucide-react";
import Image from "next/image";
export default function Footer() {
    return (
        <footer className="w-full bg-second-bg py-16">
            <Container>

                {/* Top Section */}
                <div className="grid gap-10 md:grid-cols-4">

                    {/* Column 1 */}
                    <div>
                        <div className="">
                            <Image src="/Vishodhanas.png" width={180} height={230} alt="vishodana" />
                        </div>
                        <Text className="mt-4 text-text-secondary">
                            Chartered Accountants with 25+ years of trusted financial expertise in Hyderabad.
                        </Text>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <Text variant="h4" as="h4" className="font-semibold mb-4">
                            Services
                        </Text>
                        <ul className="space-y-2 text-text-secondary text-xs cursor-pointer">
                            <li className="hover:text-brand-primary">GST Filing</li>
                            <li className="hover:text-brand-primary">Income Tax Returns</li>
                            <li className="hover:text-brand-primary">Company Registration</li>
                            <li className="hover:text-brand-primary">Audit Services</li>
                            <li className="hover:text-brand-primary">Payroll Compliance</li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <Text variant="h4" as="h4" className="font-semibold mb-4">
                            Quick Links
                        </Text>
                        <ul className="space-y-2 text-text-secondary text-xs cursor-pointer">
                            <li className="hover:text-brand-primary">About Us</li>
                            <li className="hover:text-brand-primary">Pricing</li>
                            <li className="hover:text-brand-primary">Knowledge Centre</li>
                            <li className="hover:text-brand-primary">Associations</li>
                            <li className="hover:text-brand-primary">Contact</li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <Text variant="h4" as="h4" className="font-semibold mb-4">
                            Contact
                        </Text>

                        <div className="space-y-4 text-text-secondary">

                            {/* Address */}
                            <div className="flex gap-3 items-start">
                                <div><MapPin size={18} className="text-brand-primary mt-1 " /></div>
                                <Text as="p" variant="p">
                                    Flat No. 302, Plot No. 320, Gokul Nilayam,
                                    Road No. 7, Anjaneya Nagar, Moosapet,
                                    Kukatpally, Hyderabad – 500018
                                </Text>

                            </div>

                            {/* Phone */}
                            <div className="flex gap-3 items-center">
                                <Phone size={18} className="text-brand-primary" />
                                <Text as="p" variant="p">+91 9000010000</Text>
                            </div>

                            {/* Email */}
                            <div className="flex gap-3 items-center">
                                <Mail size={18} className="text-brand-primary" />
                                <Text as="p" variant="p">info@contact.com</Text>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-300 mt-12 pt-6 text-center space-y-2">

                    <Text variant="p" as="p" className="text-sm text-gray-600">
                        © 2026 Vishodhana Advisors LLP. Professional Financial & Compliance Services. All rights reserved.
                    </Text>

                    {/* <Text variant="p" as="p" className="text-sm text-gray-500">
                        Designed & Developed by{" "}
                        <a
                            href="https://www.ameyait.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-primary font-medium hover:underline"
                        >
                            AmeyaitSolutions
                        </a>
                    </Text> */}

                </div>

            </Container>
        </footer>
    );
}