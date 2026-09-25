import { Button } from '@/components/ui/button';
import { PhoneCall, Mail } from 'lucide-react';

export function ServiceCta() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl text-slate-700 mb-8">
            Contact us today for a free consultation and quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="gap-2" asChild>
              <a href="tel:+971569811332">
                <PhoneCall className="h-5 w-5" />
                Call Now
              </a>
            </Button>
            <Button variant="outline" className="gap-2" asChild>
              <a href="mailto:info@technicalservices.ae">
                <Mail className="h-5 w-5" />
                Email Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
