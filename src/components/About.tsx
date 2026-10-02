import { Heart, Leaf, Shield, Clock } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { PHOTOS } from '@/data/photos';
import { COMPANY } from '@/data/company';

const VALUES = [
  {
    icon: Heart,
    title: 'Sensibilidad',
    description: 'Entendemos tu dolor y tratamos cada despedida con cercanía, calma y respeto.',
  },
  {
    icon: Shield,
    title: 'Claridad',
    description: 'Certificado de cremación y video inicial del proceso de cremación, nada más.',
  },
  {
    icon: Leaf,
    title: 'Recuerdos personalizados',
    description: 'Memoriales vivos, urnas, huellas y detalles hechos a la medida de cada familia.',
  },
  {
    icon: Clock,
    title: 'Disponibilidad',
    description: 'Atención por WhatsApp y coordinación rápida cuando el momento lo necesita.',
  },
];

export function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="nosotros" className="relative bg-cream-50 py-24 sm:py-32 overflow-hidden">
      {/* Very soft background glow */}
      <div className="absolute top-20 -right-32 h-96 w-96 rounded-full bg-blue-50/40 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div
          ref={ref}
          className={`grid gap-16 lg:grid-cols-2 lg:items-center ${visible ? 'visible' : ''} reveal`}
        >
          {/* Image side */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
              <img
                src={PHOTOS.marco.src}
                alt={PHOTOS.marco.alt}
                className="h-[460px] w-full object-cover sm:h-[540px]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 hidden max-w-[240px] rounded-2xl bg-white/90 backdrop-blur-lg p-5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-white/80 sm:block">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <Heart className="h-5 w-5" fill="currentColor" />
                </span>
                <div>
                  <div className="font-serif text-lg font-semibold text-sand-800">
                    Hecho a mano
                  </div>
                  <div className="text-[11px] text-sand-500">memoriales para cada familia</div>
                </div>
              </div>
            </div>
            {/* Decorative blob */}
            <div className="absolute -left-8 -top-8 -z-10 h-48 w-48 rounded-full bg-blue-50/50 blur-3xl" />
          </div>

          {/* Content side */}
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-600/80">
              Sobre Nosotros
            </span>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.15] text-sand-800 sm:text-5xl text-balance">
              Acompañamos cada despedida con calma y respeto
            </h2>
            <p className="mt-6 text-[17px] leading-[1.75] text-sand-600">
              En {COMPANY.name} entendemos lo que significa perder a un compañero de vida.
              Por eso el proceso es claro, humano y discreto: cremación, retiro a domicilio
              y un recuerdo que honre su historia.
            </p>
            <p className="mt-4 text-[15px] leading-[1.75] text-sand-500">
              Trabajamos en Quito con la misma cercanía que verás en nuestras redes:
              atención por WhatsApp, memoriales personalizados y un trato respetuoso
              en cada paso.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {VALUES.map((value) => (
                <div key={value.title} className="group flex gap-4 rounded-2xl p-3 -m-3 transition-all duration-300 hover:bg-blue-50/40">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/80 text-blue-600 shadow-sm transition-transform duration-300 group-hover:scale-105">
                    <value.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-sand-800">
                      {value.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-sand-500">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
