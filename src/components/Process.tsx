import { STEPS } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export function Process() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="proceso"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{
        background: 'linear-gradient(180deg, #1e3a6e 0%, #1a3264 50%, #152a54 100%)',
      }}
    >
      {/* Clean Unclipped Logo Background Watermark */}
      <div className="pointer-events-none absolute top-12 left-4 sm:left-8 md:left-12 w-64 sm:w-80 md:w-96 opacity-[0.14] select-none transform rotate-6">
        <img src="/favicon.png" alt="" className="w-full h-auto object-contain" />
      </div>

      {/* Soft glow accents */}
      <div className="absolute top-0 right-1/4 h-64 w-64 rounded-full bg-blue-400/10 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-blue-300/8 blur-[60px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-300/70">
            Cómo trabajamos
          </span>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.15] text-white/95 sm:text-5xl text-balance">
            Un proceso sencillo y lleno de respeto
          </h2>
          <p className="mt-5 text-[17px] leading-[1.7] text-blue-100/50">
            Te acompañamos en cada paso, para que solo te ocupes de despedirte con amor.
          </p>
        </div>

        <div
          ref={ref}
          className={`mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 ${
            visible ? 'visible' : ''
          } reveal`}
        >
          {STEPS.map((step, index) => (
            <div key={step.number} className="relative">
              {index < STEPS.length - 1 && (
                <div className="absolute left-[3rem] top-8 hidden h-px w-[calc(100%-2.5rem)] bg-gradient-to-r from-blue-400/20 to-transparent lg:block" />
              )}
              <div className="relative">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/[0.06] border border-white/[0.08] font-serif text-xl font-semibold text-blue-300/80 backdrop-blur-sm">
                  {step.number}
                </span>
                <h3 className="mt-5 font-serif text-lg font-semibold text-white/90">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-blue-100/40">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
