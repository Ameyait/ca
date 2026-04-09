"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileMenu({ menu, onClose }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleMenu = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="fixed inset-0 bg-white z-50 p-4 overflow-y-auto">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">
          Vishodhana Advisors LLP
        </h2>
        <button onClick={onClose}>✕</button>
      </div>

      {/* Menu */}
      {menu.map((item, index) => (
        <div key={index} className="border-b">
          <button
            onClick={() => toggleMenu(index)}
            className="w-full text-left py-3 flex justify-between"
          >
            {item.title}
            {item.children && "⌄"}
          </button>

          {/* Submenu */}
          {openIndex === index && item.children && (
            <div className="pl-4 pb-3">
              {item.children.map((child, i) => (
                <Link
                  key={i}
                  href={child.href}
                  className="block py-2 text-gray-600"
                  onClick={onClose}
                >
                  {child.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}