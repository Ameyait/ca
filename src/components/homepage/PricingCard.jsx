import { Check } from "lucide-react";
import { Button } from "..";

export default function PricingCard({
  title,
  price,
  duration,
  features,
  highlight,
}) {
  return (
    <div
      className={`rounded-2xl p-8 shadow-md flex flex-col h-full transition
      ${highlight 
        ? "bg-brand-primary text-white scale-110 z-10" 
        : "bg-white"
      }`}
    >
      {/* Badge */}
      {highlight && (
        <span className="bg-yellow-400 text-black text-xs px-3 py-1 rounded-full w-fit mb-4">
          Most Popular
        </span>
      )}

      {/* Title */}
      <h3 className="font-semibold text-xl">{title}</h3>

      {/* Price */}
      <div className="mt-3 text-4xl font-bold">
        {price}
        <span className="text-sm font-normal ml-1">{duration}</span>
      </div>

      {/* Features */}
      <ul className="mt-6 space-y-3 text-sm flex-1">
        {features.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-xs">
            <Check
              size={18}
              className={`mt-1 ${
                highlight ? "text-yellow-300" : "text-green-500"
              }`}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <div className="mt-8">
        <Button
          className={`w-full ${
            highlight
              ? "bg-yellow-400 text-black hover:opacity-90"
              : ""
          }`}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}