import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { TESTIMONIALS } from '@/data/content';
import { COMPANY } from '@/data/company';

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const count = TESTIMONIALS.length;

  const next = useCallback(() => setCurrent((p) => (p + 1) % count), [count]);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + count) % count), [count]);

  useEffect(() => {
    const id = setInterval(next, 7000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section id="testimonios" className="relative bg-cream-50 py-24 sm:py-32 overflow-hidden">
      {/* Clean Unclipped Logo Background Watermark */}
      <div className="pointer-events-none absolute top-16 right-4 sm:right-8 md:right-12 w-64 sm:w-80 md:w-96 opacity-[0.13] select-none transform -rotate-6">
        <img src="/favicon.png" alt="" className="w-full h-auto object-contain" />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        
        {/* Header featuring Logo cleanly integrated */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-4 inline-flex items-center gap-3 rounded-full bg-white/80 border border-sand-200/80 px-4 py-2 shadow-sm backdrop-blur-md">
            <img src="/favicon.png" alt={COMPANY.name} className="h-7 w-7 object-contain" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-700">
              {COMPANY.shortName} · Recuerdos
            </span>
          </div>

          <h2 className="font-serif text-4xl font-medium leading-[1.15] text-sand-800 sm:text-5xl text-balance">
            Un homenaje para cada historia
          </h2>
          <p className="mt-3 max-w-lg text-[16px] text-sand-500">
            Experiencias reales de las familias que han confiado la despedida de su mascota a nuestro equipo.
          </p>
        </div>

        {/* Testimonials Card */}
        <div className="relative mt-12">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] bg-white border border-sand-100/80 p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="w-full shrink-0">
                  <div className="grid gap-6 sm:grid-cols-[0.95fr_1.05fr] sm:items-center">
                    <div className="overflow-hidden rounded-[1.2rem] bg-sand-100 h-64 sm:h-80">
                      <img
                        src={t.image}
                        alt={t.alt}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-blue-600">
                        <Heart className="h-4 w-4 fill-current" />
                        <span className="text-[11px] font-bold uppercase tracking-wider">
                          {t.pet}
                        </span>
                      </div>
                      <h3 className="mt-3 font-serif text-2xl font-semibold text-sand-800 sm:text-3xl">
                        {t.name}
                      </h3>
                      <p className="mt-4 text-[15px] leading-relaxed text-sand-600">
                        "{t.text}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {count > 1 && (
              <div className="mt-8 flex items-center justify-between border-t border-sand-100 pt-5">
                <div className="flex items-center gap-2.5">
                  <img src="/favicon.png" alt="" className="h-6 w-6 object-contain opacity-90" />
                  <span className="text-xs font-semibold text-sand-500">
                    Homenajes Amigo Eterno
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={prev}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-sand-200 text-sand-500 transition-all hover:bg-sand-50 hover:text-blue-600 hover:border-blue-300"
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>

                  <div className="flex gap-1.5">
                    {TESTIMONIALS.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`rounded-full transition-all duration-300 ${
                          i === current ? 'w-7 h-1.5 bg-blue-600' : 'w-1.5 h-1.5 bg-sand-200'
                        }`}
                        aria-label={`Ir al testimonio ${i + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={next}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-sand-200 text-sand-500 transition-all hover:bg-sand-50 hover:text-blue-600 hover:border-blue-300"
                    aria-label="Siguiente"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
