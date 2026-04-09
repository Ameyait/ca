
import { User, Phone, Mail } from "lucide-react";
import { Button } from "..";

export default function EnquiryForm({title}) {
    return (
        <section>
                <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
                    <h3 className="text-[#1276a8] font-semibold mb-4">
                        {title}
                    </h3>
                    <div className="space-y-3">
                        {/* Name */}
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full text-base pl-10 pr-4 py-3 rounded-md bg-first-bg outline-none"
                            />
                        </div>
                        {/* Phone */}
                        <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="w-full pl-10   text-base  pr-4 py-3 rounded-md bg-first-bg outline-none"
                            />
                        </div>
                        {/* Email */}
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full pl-10  text-base  pr-4 py-3 rounded-md bg-first-bg outline-none"
                            />
                        </div>

                        <Button className="w-full">
                            Book Free Consultation
                        </Button>
                    </div>
                </div>
        </section>
    )
}