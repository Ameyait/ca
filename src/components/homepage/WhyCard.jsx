import { Text } from "..";
export default function WhyCard({ title, description, Icon }) {
  return (
    <div className="text-center max-w-xs mx-auto">
      
      {/* Icon */}
      <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-xl bg-[#cfe0ea] mb-5">
        <Icon className="text-brand-primary" size={28} />
      </div>

      {/* Title */}
      <h3 className="font-semibold text-lg text-text-primary">
        {title}
      </h3>

      {/* Description */}
      <Text variant="p" as="p">
        {description}
      </Text>
    </div>
  );
}