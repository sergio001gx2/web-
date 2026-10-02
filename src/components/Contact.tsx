import { Instagram, Facebook, Phone, MapPin, Heart } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { COMPANY, WHATSAPP_LINK } from '@/data/company';

export function Contact() {
  return (
    <section id="contacto" className="relative bg-cream-50 py-24 sm:py-32 overflow-hidden">
      {/* Soft glow */}
      <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-blue-50/25 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Info side */}
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-600/80">
              Contacto
            </span>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.15] text-sand-800 sm:text-5xl text-balance">
              Estamos aquí para acompañarte
            </h2>
            <p className="mt-5 text-[17px] leading-[1.7] text-sand-500">
              No tienes que pasar por esto solo. Escríbenos en cualquier momento y te
              responderemos con una atención cercana, clara y respetuosa.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl bg-white border border-sand-100/80 p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_6px_24px_rgba(0,0,0,0.06)] hover:-translate-y-px"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-transform duration-300 group-hover:scale-105">
                  <WhatsAppIcon className="h-6 w-6" />
                </span>
                <div>
                  <div className="font-semibold text-sand-800">WhatsApp</div>
                  <div className="text-sm text-sand-400">{COMPANY.phone}</div>
                </div>
              </a>

              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
                className="group flex items-center gap-4 rounded-2xl bg-white border border-sand-100/80 p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_6px_24px_rgba(0,0,0,0.06)] hover:-translate-y-px"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600 transition-transform duration-300 group-hover:scale-105">
                  <Phone className="h-6 w-6" />
                </span>
                <div>
                  <div className="font-semibold text-sand-800">Teléfono</div>
                  <div className="text-sm text-sand-400">{COMPANY.phone}</div>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl bg-white border border-sand-100/80 p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  <MapPin className="h-6 w-6" />
                </span>
                <div>
                  <div className="font-semibold text-sand-800">Ubicación</div>
                  <div className="text-sm text-sand-400">{COMPANY.address} y alrededores</div>
                </div>
              </div>
            </div>
          </div>

          {/* Social side */}
          <div
            className="relative overflow-hidden rounded-[1.5rem] p-8 sm:p-10"
            style={{
              background: 'linear-gradient(135deg, #1e3a6e 0%, #1a3264 50%, #152a54 100%)',
            }}
          >
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-blue-400/8 blur-3xl" />
            <div className="absolute -bottom-16 -left-8 h-56 w-56 rounded-full bg-blue-300/5 blur-3xl" />

            <div className="relative">
              <Heart className="h-8 w-8 text-blue-300/50" fill="currentColor" />
              <h3 className="mt-5 font-serif text-2xl font-semibold text-white/90 sm:text-3xl">
                Síguenos en redes sociales
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-blue-100/40">
                En Instagram, Facebook y TikTok compartimos el mismo tono: cercano,
                respetuoso y sencillo.
              </p>

              <div className="mt-7 flex flex-col gap-3">
                <a
                  href={COMPANY.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl bg-white/[0.06] border border-white/[0.06] p-3.5 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.1]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.08] text-white/70 transition-all duration-300 group-hover:bg-white group-hover:text-blue-700">
                    <Instagram className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-white/80">Instagram</div>
                    <div className="text-xs text-white/30">{COMPANY.instagramHandle}</div>
                  </div>
                </a>

                <a
                  href={COMPANY.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl bg-white/[0.06] border border-white/[0.06] p-3.5 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.1]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.08] text-white/70 transition-all duration-300 group-hover:bg-white group-hover:text-blue-700">
                    <Facebook className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-white/80">Facebook</div>
                    <div className="text-xs text-white/30">Crematorio Amigo Eterno EC</div>
                  </div>
                </a>

                <a
                  href={COMPANY.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl bg-white/[0.06] border border-white/[0.06] p-3.5 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.1]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.08] text-white/70 transition-all duration-300 group-hover:bg-white group-hover:text-blue-700">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V8.57a8.27 8.27 0 0 0 4.83 1.55V6.69h-1.1z" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-white/80">TikTok</div>
                    <div className="text-xs text-white/30">{COMPANY.tiktokHandle}</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
