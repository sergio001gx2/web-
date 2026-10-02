import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { TESTIMONIALS } from '@/data/content';

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
      {/* Soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-blue-50/25 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
        <div className="text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-600/80">
            Recuerdos
          </span>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.15] text-sand-800 sm:text-5xl text-balance">
            Un homenaje para cada historia
          </h2>
        </div>

        <div className="relative mt-14">
          {/* Decorative quote */}
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-50/60 text-blue-400/60">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
          </div>

          <div className="mt-6 overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="w-full shrink-0 px-4">
                  <div className="mx-auto grid max-w-4xl gap-8 rounded-[1.5rem] bg-white border border-sand-100/80 p-5 text-left shadow-[0_4px_20px_rgba(0,0,0,0.04)] sm:p-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                    <div className="overflow-hidden rounded-[1.2rem]">
                      <img
                        src={t.image}
                        alt={t.alt}
                        className="h-72 w-full object-cover sm:h-80"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-blue-600/70">
                        <Heart className="h-4 w-4" fill="currentColor" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                          {t.pet}
                        </span>
                      </div>
                      <p className="mt-5 font-serif text-2xl font-medium leading-relaxed text-sand-700 sm:text-3xl text-balance">
                        {t.name}
                      </p>
                      <p className="mt-4 text-[15px] leading-[1.75] text-sand-500">{t.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {count > 1 && (
            <div className="mt-10 flex items-center justify-center gap-4">
              <button
                onClick={prev}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-sand-200/80 text-sand-400 transition-all duration-300 hover:bg-sand-50 hover:text-sand-600 hover:border-sand-300"
                aria-label="Mensaje anterior"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <div className="flex gap-1.5">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`rounded-full transition-all duration-500 ${
                      i === current ? 'w-7 h-1.5 bg-blue-600/70' : 'w-1.5 h-1.5 bg-sand-200'
                    }`}
                    aria-label={`Ir al mensaje ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-sand-200/80 text-sand-400 transition-all duration-300 hover:bg-sand-50 hover:text-sand-600 hover:border-sand-300"
                aria-label="Siguiente mensaje"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
