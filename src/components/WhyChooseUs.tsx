import { Clock, Award, Shield, Tag } from "lucide-react";

interface FeatureProps {
  icon: typeof Clock;
  title: string;
  description: string;
}

function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div className="flex items-start p-4 space-x-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex-shrink-0">
        <div className="p-3 bg-primary/10 rounded-lg">
          <Icon className="w-6 h-6 text-primary" />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="mt-1 text-sm text-slate-600">{description}</p>
      </div>
    </div>
  );
}

export function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: "Serving Al Ain & Abu Dhabi",
      description: "Local experts providing comprehensive network solutions across both cities"
    },
    {
      icon: Award,
      title: "Certified Network Technicians",
      description: "Our team consists of certified professionals with years of experience"
    },
    {
      icon: Clock,
      title: "Same-Day Installation Available",
      description: "Quick response times and efficient service delivery when you need it"
    },
    {
      icon: Tag,
      title: "Affordable Pricing & Warranty",
      description: "Competitive rates with warranty coverage for your peace of mind"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-slate-600">
            Trust your network infrastructure to certified professionals
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
