"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Text } from "..";
export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-5 text-left"
      >
        <Text as="h5" variant="h5">
          {question}
        </Text>
        <ChevronDown
          size={18}
          className={`transition ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <Text  variant="p" as="p" className="px-6 pb-5 ">{answer}</Text> 
      )}
    </div>
  );
}