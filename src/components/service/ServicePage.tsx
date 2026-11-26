import Link from 'next/link';
import { ServiceHero } from './ServiceHero';
import { ServiceContent } from './ServiceContent';
import { ServiceFeatures } from './ServiceFeatures';
import { ServiceCta } from './ServiceCta';
import { AnswerBox } from '../AnswerBox';

interface ServicePageProps {
  title: string;
  answer?: string;
  description: string;
  content: string[];
  features: string[];
  imageUrl: string;
  schemaData: Record<string, unknown>;
  relatedGuide?: { href: string; title: string };
}

export function ServicePage({
  title,
  answer,
  description,
  content,
  features,
  imageUrl,
  schemaData,
  relatedGuide
}: ServicePageProps) {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <ServiceHero title={title} description={description} imageUrl={imageUrl} />
      {answer && (
        <div className="px-4 pt-10">
          <AnswerBox>{answer}</AnswerBox>
        </div>
      )}
      <ServiceContent content={content} />
      {relatedGuide && (
        <p className="max-w-3xl mx-auto px-4 pb-8 text-slate-600">
          Related guide:{' '}
          <Link href={relatedGuide.href} className="text-primary hover:underline">
            {relatedGuide.title}
          </Link>
        </p>
      )}
      <ServiceFeatures title="Key Features & Benefits" features={features} />
      <ServiceCta />
    </div>
  );
}
