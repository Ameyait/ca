"use client";

import { Button, EnquiryForm, Text } from "..";
import Image from "next/image";
import { Calendar, Phone } from "lucide-react";
export default function HeroSection() {
  return (
    <section className="w-full bg-first-bg pt-28 pb-12">
      <div className="w-full px-4 md:px-6 lg:px-10 2xl:max-w-[1400px] 2xl:mx-auto">

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT */}
          <div className="flex flex-col gap-6">
            <Text variant="h1" as="h1">
              Reliable Tax Solutions <br />
              For Businesses & Individuals
            </Text>

            <Text as="span" variant="span">
              GST Filing | Income Tax | Audit Services | Business Registration
            </Text>

            <div className="flex gap-4 flex-wrap">
              <div><Button> <Calendar size={18} /> Book Consultation</Button></div>
              <div><Button variant="outline"><Phone size={18} /> Call Now</Button></div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-6 w-full max-w-md mx-auto lg:ml-auto">
            <EnquiryForm title="Get Free Consultation" />
            {/* Image */}
            {/* <div className="w-full rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/consulting.png"
                alt="Consulting"
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
            </div> */}

            {/* Enquiry Form */}


          </div>

        </div>

        {/* Bottom badges */}
        <div className="flex  justify-center gap-4 mt-20 lg:w-[66%] m-auto">
          <Button variant="yellow">👥 Trusted by 500+ Businesses</Button>
          <Button variant="yellow">🏆 25+ Years Experience</Button>
          <Button variant="yellow">⭐ 4.9 Highly Rated Client Service</Button>
        </div>

      </div>
    </section>
  );
}
