import { Text } from "..";

export default function SectionHeader({
  title,
  subtitle,
  align = "center",
  className = "",
}) {
  return (
    <div
      className={`${align === "center" ? "text-center" : "text-left"} mb-12 ${className}`}
    >
      <Text variant="h2" as="h2">
        {title}
      </Text>

      {subtitle && (
        <Text variant="p" as="p">
          {subtitle}
        </Text>
      )}
    </div>
  );
}