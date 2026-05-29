"use client";
 
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "./TestimonialCard";
import { Container, SectionHeader } from "..";
 
export default function TestimonialSection({ data }) {
  const [index, setIndex] = useState(0);
 
  const prev = () => {
    setIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };
 
  const next = () => {
    setIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };
 
  return (
    <section className="w-full bg-testimonial-bg py-20">
      <Container>
 
        <SectionHeader title="Client's Feedback" />
 
        {/* Card */}
        <TestimonialCard {...data[index]} />
 
        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-8">
         
          {/* Left */}
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center"
          >
            <ChevronLeft size={18} />
          </button>
 
          {/* Dots */}
          <div className="flex gap-2">
            {data.map((_, i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all ${
                  i === index
                    ? "w-6 bg-brand-primary"
                    : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
 
          {/* Right */}
          <button
            onClick={next}
            className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center"
          >
            <ChevronRight size={18} />
          </button>
 
        </div>
      </Container>
    </section>
  );
}
 