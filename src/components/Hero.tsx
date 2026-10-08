import { ArrowDown, Heart, ShieldCheck, FileText } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { COMPANY, WHATSAPP_LINK } from '@/data/company';
import { PHOTOS } from '@/data/photos';

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-28 sm:pt-36 pb-20 sm:pb-28"
      style={{
        background: 'linear-gradient(180deg, #FDFBF7 0%, #F4F0FA 35%, #EBF2FC 60%, #FDFBF7 100%)',
      }}
    >
      {/* Very subtle paw print watermark — barely visible */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 24 24' fill='%23374985' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 11.5c-2.2 0-4 1.8-4 4 0 1.8 1.8 3.5 4 3.5s4-1.7 4-3.5c0-2.2-1.8-4-4-4zm-5.5-2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm11 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-8-3.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm5 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}
      />
      
      {/* Clean Unclipped Logo Background Watermark */}
      <div className="pointer-events-none absolute top-32 right-4 sm:right-10 md:right-16 w-64 sm:w-80 md:w-96 opacity-[0.13] select-none transform -rotate-6">
        <img src="/favicon.png" alt="" className="w-full h-auto object-contain" />
      </div>

      {/* Ultra-soft ambient glow */}
      <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-blue-100/25 blur-[120px] pointer-events-none" />
      <div className="absolute top-40 -left-20 h-[500px] w-[500px] rounded-full bg-purple-50/30 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 h-[400px] w-[400px] rounded-full bg-amber-50/20 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="max-w-2xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-blue-100 px-4 py-2 text-[11px] font-semibold tracking-widest uppercase text-blue-700/90 shadow-sm backdrop-blur-md">
              <Heart className="h-3 w-3" fill="currentColor" />
              Cremación de mascotas en Quito
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-700/10 border border-blue-200/60 px-3.5 py-1.5 text-[10px] font-bold tracking-wider uppercase text-blue-900 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              Servicio 24 horas
            </span>
          </div>

          <h1 className="mt-8 font-serif text-[3.2rem] font-medium leading-[1.08] text-sand-900 sm:text-6xl lg:text-[4.5rem] text-balance">
            Cremación y memoriales
            <br />
            <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent italic">realizado con respeto</span>
          </h1>

          <p className="mt-4 text-[13px] font-semibold tracking-wider uppercase text-blue-800/80">
            {COMPANY.motto}
          </p>

          <p className="mt-5 max-w-lg text-[17px] leading-[1.75] text-sand-600">
            En {COMPANY.name} acompañamos a cada familia con cremación individual,
            retiro a domicilio 24/7 y memoriales personalizados entregados en ~48 horas.
          </p>

          {/* Quote Card */}
          <div className="mt-6 rounded-2xl bg-white/80 border border-blue-100/90 p-4 shadow-sm backdrop-blur-md">
            <p className="font-serif italic text-sm leading-relaxed text-blue-950/80">
              "{COMPANY.quote}"
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-blue-700 to-blue-600 px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_30px_rgba(29,78,216,0.25)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(29,78,216,0.35)] hover:-translate-y-px"
            >
              <WhatsAppIcon className="h-[18px] w-[18px]" />
              Pedir información por WhatsApp
            </a>
            <a
              href="#catalogo"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/60 border border-sand-200 backdrop-blur-md px-6 py-3.5 text-[15px] font-medium text-sand-700 shadow-sm transition-all duration-300 hover:bg-white hover:shadow-md hover:border-sand-300"
            >
              <FileText className="h-4 w-4 text-blue-600/70" />
              Ver catálogo
            </a>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-3">
            {[
              { number: '24 Horas', label: 'Servicio disponible 24/7' },
              { number: '100%', label: 'Cremación individual' },
              { number: '48 Horas', label: 'Video y certificado incluido' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-white/50 border border-white/80 backdrop-blur-md p-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:bg-white/80 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
              >
                <div className="font-serif text-xl font-semibold text-blue-700/90">{stat.number}</div>
                <div className="mt-0.5 text-xs text-sand-500">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-2 text-[11px] tracking-wide text-sand-500">
            <ShieldCheck className="h-3.5 w-3.5 text-blue-600" />
            Cremación individual con video inicial · Certificado de cremación · Quito, Ecuador
          </div>
        </div>

        <div className="relative">
          <div className="grid gap-3.5 sm:grid-cols-[1fr_0.75fr]">
            <div className="relative overflow-hidden rounded-[2rem] bg-white/70 p-2.5 shadow-[0_16px_48px_rgba(0,0,0,0.06)] border border-white/90 backdrop-blur-sm">
              <img
                src={PHOTOS.piaeo.src}
                alt={PHOTOS.piaeo.alt}
                className="h-[400px] w-full rounded-[1.5rem] object-cover sm:h-[480px]"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-5 left-5 right-5 rounded-xl bg-white/90 backdrop-blur-lg p-3.5 shadow-lg border border-white/80 flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <ShieldCheck className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-[11px] font-bold text-sand-800">100% Transparente</div>
                  <div className="text-[10px] text-sand-500">Certificado y video del proceso</div>
                </div>
              </div>
            </div>

            <div className="grid gap-3.5">
              <div className="overflow-hidden rounded-[1.6rem] bg-white/70 p-2.5 shadow-[0_12px_36px_rgba(0,0,0,0.05)] border border-white/90 backdrop-blur-sm">
                <img
                  src={PHOTOS.osa.src}
                  alt={PHOTOS.osa.alt}
                  className="h-44 w-full rounded-[1.2rem] object-cover sm:h-52"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="rounded-[1.6rem] border border-sand-100 bg-white/70 p-5 shadow-[0_4px_16px_rgba(0,0,0,0.03)] backdrop-blur-sm">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-600/70">
                  Cuidado Humano
                </div>
                <p className="mt-2 font-serif text-lg font-medium leading-snug text-sand-700">
                  Recuerdos vivos y una despedida digna.
                </p>
                <img
                  src={PHOTOS.romita.src}
                  alt={PHOTOS.romita.alt}
                  className="mt-3.5 h-28 w-full rounded-xl object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#nosotros"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sand-300 transition-colors hover:text-blue-500"
        aria-label="Desplazar hacia abajo"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
