import { Text } from "..";
export default function ServiceCard({ title, description, Icon }) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-100 mb-4">
                <Icon className="text-green-600" size={22} />
            </div>
            <Text variant="h3" as="h3">
                {title}
            </Text>
            <Text variant="p" as="p">{description}</Text>
        </div>
    );
}