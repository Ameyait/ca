export default function TestimonialCard({ quote, name, company }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      
      {/* Quote Icon */}
      <div className="text-4xl text-gray-300 mb-4">“”</div>

      {/* Quote */}
      <p className="text-text-primary text-lg leading-relaxed">
        "{quote}"
      </p>

      {/* Name */}
      <h4 className="mt-6 font-semibold text-text-primary">
        {name}
      </h4>

      {/* Company */}
      <p className="text-sm text-text-secondary">
        {company}
      </p>
    </div>
  );
}