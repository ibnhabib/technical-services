interface ServiceContentProps {
  content: string[];
}

export function ServiceContent({ content }: ServiceContentProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg">
            {content.map((paragraph, index) => (
              <p key={index} className="text-slate-700 mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
