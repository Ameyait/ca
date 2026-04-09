"use client";
import { useState } from "react";
import { Text } from "..";
export default function TabsSection({ tabs = [] }) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.key);
  const activeContent = tabs.find((tab) => tab.key === activeTab);
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-second-bg">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-2xl p-2 flex items-center justify-between overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 md:px-6 py-2 rounded-xl whitespace-nowrap text-sm md:text-[15px] font-medium transition-all duration-200
                ${
                  activeTab === tab.key
                    ? "bg-[#0e7490] text-white"
                    : "text-gray-600 hover:text-black"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="mt-6 md:mt-8 lg:mt-10 bg-white rounded-2xl p-5 md:p-6 lg:p-8 shadow-sm">
          <Text as="h4" variant="h4" className="mb-3 md:mb-4 text-[#0e7490]">
            {activeContent?.title}
          </Text>
          <Text
            as="p"
            variant="body"
            className="text-text-secondary leading-relaxed text-sm md:text-base"
          >
            {activeContent?.content}
          </Text>
        </div>
      </div>
    </section>
  );
}