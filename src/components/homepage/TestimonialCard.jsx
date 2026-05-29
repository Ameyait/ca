"use client";
 
import { useState } from "react";
import { Quote } from "lucide-react";
 
export default function TestimonialCard({ quote, name, company }) {
 
  // Limit feedback to 150 characters
  const limitedQuote =
    quote.length > 150
      ? quote.slice(0, 150)
      : quote;
 
  return (
    <div className="max-w-4xl mx-auto h-[240px]">
 
      <div className="relative h-full bg-white rounded-2xl px-8 py-10 shadow-sm border border-gray-100 flex flex-col justify-between">
 
        {/* Quote Icon */}
        <div className="absolute -top-5 left-10 w-12 h-12 rounded-xl bg-brand-primary flex items-center justify-center shadow-md">
          <Quote size={22} className="text-white" />
        </div>
 
        {/* Quote */}
        <div className="flex-1 flex items-center">
          <p className="text-xl leading-9 text-text-primary mt-4">
            {limitedQuote}
          </p>
        </div>
 
        {/* Bottom */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-6">
 
          <div>
            <h4 className="text-lg font-semibold text-text-primary">
              {name}
            </h4>
 
            <p className="text-sm text-text-secondary mt-1">
              {company}
            </p>
          </div>
 
          {/* Rating */}
          <div className="flex gap-1 text-yellow-400 text-lg">
            ★★★★★
          </div>
 
        </div>
      </div>
    </div>
  );
}
 