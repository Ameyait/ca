"use client";

import { Text } from "..";

// ✅ Reusable Icon Component
const Icon = ({ value }) => {
  return value ? (
    <span className="text-emerald-500 text-lg font-semibold">✓</span>
  ) : (
    <span className="text-gray-300 text-lg font-semibold">×</span>
  );
};

export default function FeatureComparison() {
  const features = [
    "GST Return Filing",
    "Income Tax Return Filing",
    "Basic Bookkeeping",
    "TDS Return Filing",
    "Payroll Processing",
    "Dedicated CA Support",
    "Quarterly Review",
    "Company Audit",
    "ROC Compliance",
    "Priority Support",
    "Tax Planning",
    "Legal Advisory",
  ];

  const data = {
    Basic: [1,1,1,0,0,0,0,0,0,0,0,0],
    Standard: [1,1,1,1,1,1,1,0,0,0,0,0],
    Premium: [1,1,1,1,1,1,1,1,1,1,1,1],
  };

  return (
    <section className="w-full py-12 md:py-16 bg-second-bg">
      <div className="max-w-4xl mx-auto px-4 text-center">

        {/* Title */}
        <Text as="h2" variant="h2" className="mb-6">
          Feature Comparison
        </Text>

        {/* Table Wrapper */}
        <div className="overflow-x-auto">
          <table className="w-full border border-[#ede4d4] rounded-xl overflow-hidden bg-white">

            {/* Header */}
            <thead>
              <tr className="text-left text-sm text-gray-700 ">
                <th className="p-3">Feature</th>
                <th className="p-3 text-center">Basic</th>
                <th className="p-3 text-center text-brand-primary">Standard</th>
                <th className="p-3 text-center">Premium</th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {features.map((feature, i) => (
                <tr
                  key={i}
                  className="border-t border-[#ede4d480] text-sm font-[300] hover:bg-[#fafafa] transition"
                >
                  {/* Feature Name */}
                  <td className="p-3 text-text-primary text-left">
                    {feature}
                  </td>

                  {/* Basic */}
                  <td className="p-3 text-center">
                    <Icon value={data.Basic[i]} />
                  </td>

                  {/* Standard */}
                  <td className="p-3 text-center">
                    <Icon value={data.Standard[i]} />
                  </td>

                  {/* Premium */}
                  <td className="p-3 text-center">
                    <Icon value={data.Premium[i]} />
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </section>
  );
}