interface ServiceHeroProps {
  title: string;
  description: string;
  imageUrl: string;
}

export function ServiceHero({ title, description, imageUrl }: ServiceHeroProps) {
  return (
    <section className="relative bg-gray-50 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/50 z-10"></div>
      <div className="absolute inset-0 fiber-lines"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${imageUrl})`,
          opacity: 0.25,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      ></div>
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            {title}
          </h1>
          <p className="text-xl text-slate-700 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
