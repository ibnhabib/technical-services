import { ServiceHero } from './ServiceHero';
import { ServiceContent } from './ServiceContent';
import { ServiceFeatures } from './ServiceFeatures';
import { ServiceCta } from './ServiceCta';

interface ServicePageProps {
  title: string;
  description: string;
  content: string[];
  features: string[];
  imageUrl: string;
  schemaData: Record<string, unknown>;
}

export function ServicePage({
  title,
  description,
  content,
  features,
  imageUrl,
  schemaData
}: ServicePageProps) {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <ServiceHero title={title} description={description} imageUrl={imageUrl} />
      <ServiceContent content={content} />
      <ServiceFeatures title="Key Features & Benefits" features={features} />
      <ServiceCta />
    </div>
  );
}
