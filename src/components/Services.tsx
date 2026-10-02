import { Flame, Leaf, Truck, Heart, Check } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { SERVICES } from '@/data/content';
import { WHATSAPP_LINK } from '@/data/company';
import { useReveal } from '@/hooks/useReveal';

const ICONS: Record<string, typeof Flame> = {
  flame: Flame,
  leaf: Leaf,
  truck: Truck,
  heart: Heart,
};

export function Services() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="servicios"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, rgba(239,246,255,0.9) 0%, rgba(224,239,255,0.8) 50%, rgba(248,250,252,0.9) 100%)',
      }}
    >
      {/* Soft decorative blur */}
      <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-blue-50/30 blur-[80px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-600/80">
            Nuestros Servicios
          </span>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.15] text-sand-800 sm:text-5xl text-balance">
            Opciones que se adaptan a tu proceso
          </h2>
          <p className="mt-5 text-[17px] leading-[1.7] text-sand-500">
            Cada familia vive la despedida de manera distinta. Por eso ofrecemos servicios
            pensados para acompañarte en el camino que necesites recorrer.
          </p>
        </div>

        <div
          ref={ref}
          className={`mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3 ${visible ? 'visible' : ''} reveal`}
        >
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon] ?? Heart;
            return (
              <article
                key={service.id}
                className={`group relative overflow-hidden rounded-[1.5rem] p-7 transition-all duration-500 ${
                  service.highlighted
                    ? 'bg-gradient-to-br from-blue-700 via-blue-600 to-blue-700 text-white shadow-[0_16px_48px_rgba(29,78,216,0.2)]'
                    : 'bg-white border border-sand-100 text-sand-800 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)] hover:-translate-y-0.5'
                }`}
              >
                {service.highlighted && (
                  <span className="absolute right-5 top-5 rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-100">
                    Más elegido
                  </span>
                )}
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 ${
                    service.highlighted ? 'bg-white/15 text-blue-100' : 'bg-blue-50 text-blue-600'
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </span>

                <h3 className="mt-5 font-serif text-xl font-semibold">{service.name}</h3>
                <p
                  className={`mt-2.5 text-[15px] leading-relaxed ${
                    service.highlighted ? 'text-blue-100/80' : 'text-sand-500'
                  }`}
                >
                  {service.description}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          service.highlighted ? 'text-blue-300/80' : 'text-blue-500/70'
                        }`}
                      />
                      <span
                        className={`text-sm leading-snug ${
                          service.highlighted ? 'text-blue-100/85' : 'text-sand-500'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-7 inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${
                    service.highlighted
                      ? 'text-blue-200/90 hover:text-white'
                      : 'text-blue-600/80 hover:text-blue-700'
                  }`}
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Solicitar este servicio →
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
