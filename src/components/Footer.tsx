import { Phone, Instagram, Facebook, MapPin, Clock } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { COMPANY, WHATSAPP_LINK } from '@/data/company';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden pt-16 pb-12 text-white"
      style={{
        background: 'linear-gradient(180deg, #152a54 0%, #0d1730 100%)',
      }}
    >
      {/* Clean subtle Logo Watermark in Footer Background */}
      <div className="pointer-events-none absolute bottom-4 right-8 w-72 sm:w-96 opacity-[0.07] select-none">
        <img src="/favicon.png" alt="" className="w-full h-auto object-contain" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 pb-12 border-b border-white/10">
          {/* Brand Info & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 p-2 shadow-inner border border-white/15 backdrop-blur-sm">
                <img src="/favicon.png" alt={COMPANY.name} className="h-full w-full object-contain" />
              </span>
              <div>
                <h3 className="font-serif text-2xl font-bold tracking-tight text-white">
                  {COMPANY.shortName}
                </h3>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-300">
                  {COMPANY.tagline}
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-blue-100/70">
              Acompañamos cada despedida con el respeto, la calma y la dignidad que tu compañero merece. Servicios de cremación individual y memoriales en Quito.
            </p>
            <div className="flex items-center gap-2 text-xs text-blue-200/60 pt-1">
              <MapPin className="h-4 w-4 text-blue-400 shrink-0" />
              <span>{COMPANY.address}</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white/90 mb-4 pb-1 border-b border-white/10 inline-block">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Inicio', href: '#inicio' },
                { label: 'Nosotros', href: '#nosotros' },
                { label: 'Servicios', href: '#servicios' },
                { label: 'Catálogo', href: '#catalogo' },
                { label: 'Galería', href: '#galeria' },
                { label: 'Contacto', href: '#contacto' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-blue-100/60 transition-colors duration-200 hover:text-white hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Phone & Direct Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white/90 mb-4 pb-1 border-b border-white/10 inline-block">
              Atención Telefónica 24/7
            </h4>
            <div className="space-y-3">
              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
                className="group flex items-center gap-3 rounded-xl bg-white/[0.08] border border-white/10 p-3.5 transition-all duration-300 hover:bg-blue-600/30 hover:border-blue-400/40"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/20 text-blue-300 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs text-blue-200/60">Llámanos directamente</div>
                  <div className="font-bold text-white text-base">{COMPANY.phone}</div>
                </div>
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl bg-emerald-600/20 border border-emerald-500/30 p-3.5 transition-all duration-300 hover:bg-emerald-600/40 hover:border-emerald-400"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/30 text-emerald-300 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs text-emerald-200/70">WhatsApp Inmediato</div>
                  <div className="font-semibold text-white text-sm">Escribir por WhatsApp</div>
                </div>
              </a>

              <div className="flex items-center gap-2 text-xs text-blue-200/50 pt-1">
                <Clock className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                <span>Atención y retiros a domicilio las 24 horas</span>
              </div>
            </div>
          </div>

          {/* Social Networks */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white/90 mb-4 pb-1 border-b border-white/10 inline-block">
              Síguenos en Redes
            </h4>
            <p className="text-xs text-blue-100/60 mb-4 leading-relaxed">
              Encuentra consejos, homenajes y detalles de nuestros memoriales en nuestras redes oficiales.
            </p>
            <div className="space-y-2.5">
              <a
                href={COMPANY.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg bg-white/[0.05] border border-white/10 px-3.5 py-2.5 text-sm text-blue-100/80 transition-all duration-300 hover:bg-pink-600/20 hover:border-pink-400/50 hover:text-white"
              >
                <Instagram className="h-4 w-4 text-pink-400" />
                <span>Instagram {COMPANY.instagramHandle}</span>
              </a>

              <a
                href={COMPANY.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg bg-white/[0.05] border border-white/10 px-3.5 py-2.5 text-sm text-blue-100/80 transition-all duration-300 hover:bg-blue-600/20 hover:border-blue-400/50 hover:text-white"
              >
                <Facebook className="h-4 w-4 text-blue-400" />
                <span>Facebook Oficial</span>
              </a>

              <a
                href={COMPANY.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg bg-white/[0.05] border border-white/10 px-3.5 py-2.5 text-sm text-blue-100/80 transition-all duration-300 hover:bg-neutral-800/40 hover:border-white/30 hover:text-white"
              >
                <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V8.57a8.27 8.27 0 0 0 4.83 1.55V6.69h-1.1z" />
                </svg>
                <span>TikTok {COMPANY.tiktokHandle}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200/50">
          <div className="flex items-center gap-2">
            <img src="/favicon.png" alt="" className="h-5 w-5 object-contain opacity-70" />
            <span>© {year} {COMPANY.name}. Todos los derechos reservados.</span>
          </div>
          <div className="text-center sm:text-right">
            <span>Cremaciones y memoriales con dignidad en Quito, Ecuador</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
