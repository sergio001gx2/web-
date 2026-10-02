import { Heart, Instagram, Facebook, Phone } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { COMPANY, WHATSAPP_LINK } from '@/data/company';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-14"
      style={{
        background: 'linear-gradient(180deg, #152a54 0%, #111f3f 100%)',
      }}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80">
                <Heart className="h-5 w-5" fill="currentColor" />
              </span>
              <span className="font-serif text-xl font-semibold text-white/90">
                {COMPANY.shortName}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/30">
              {COMPANY.tagline}. Acompañamos cada despedida con el respeto y la dignidad
              que tu mascota merece.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white/80">Navegación</h4>
            <ul className="mt-4 space-y-2 text-sm">
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
                    className="text-white/30 transition-colors duration-300 hover:text-blue-300/80"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white/80">Contacto</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/30 transition-colors duration-300 hover:text-blue-300/80"
                >
                  <WhatsAppIcon className="h-4 w-4" /> WhatsApp 24/7
                </a>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-white/30 transition-colors duration-300 hover:text-blue-300/80"
                >
                  <Phone className="h-4 w-4" /> {COMPANY.phone}
                </a>
              </li>
              <li className="flex gap-2.5 pt-2">
                <a
                  href={COMPANY.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.06] text-white/40 transition-all duration-300 hover:bg-blue-600/30 hover:text-white/80"
                  aria-label="Instagram"
                >
                  <Instagram className="h-3.5 w-3.5" />
                </a>
                <a
                  href={COMPANY.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.06] text-white/40 transition-all duration-300 hover:bg-blue-600/30 hover:text-white/80"
                  aria-label="Facebook"
                >
                  <Facebook className="h-3.5 w-3.5" />
                </a>
                <a
                  href={COMPANY.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.06] text-white/40 transition-all duration-300 hover:bg-blue-600/30 hover:text-white/80"
                  aria-label="TikTok"
                >
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V8.57a8.27 8.27 0 0 0 4.83 1.55V6.69h-1.1z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
}
