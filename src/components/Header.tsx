import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { COMPANY, WHATSAPP_LINK } from '@/data/company';

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-[0_2px_20px_rgba(55,37,24,0.06)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#inicio" className="flex items-center gap-3" aria-label={COMPANY.name}>
          <span className="flex h-16 w-16 items-center justify-center overflow-visible transition-all duration-500">
            <img src="/favicon.png" alt="Amigo Eterno" className="h-16 w-16 object-contain drop-shadow-[0_8px_12px_rgba(29,78,216,0.18)]" />
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={`font-serif text-[1.8rem] font-semibold tracking-tight transition-colors duration-500 ${
                scrolled ? 'text-sand-800' : 'text-sand-800'
              }`}
            >
              {COMPANY.shortName}
            </span>
            <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-blue-600">
              {COMPANY.tagline}
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-sand-700 transition-colors hover:text-blue-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-1.5 text-sm font-medium text-sand-700 transition-colors hover:text-blue-600"
          >
            <Phone className="h-4 w-4" />
            Llamar
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-800 hover:shadow-md"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full bg-sand-100 text-sand-800 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 top-0 z-40 bg-cream-50 transition-transform duration-400 lg:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
      >
        <div className="flex h-full flex-col px-6 pt-24 pb-8">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-sand-100 py-4 font-serif text-2xl text-sand-800 transition-colors hover:text-blue-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col gap-3 pt-8">
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
              className="flex items-center justify-center gap-2 rounded-full border border-sand-200 py-3 text-sm font-semibold text-sand-800"
            >
              <Phone className="h-4 w-4" /> Llamar ahora
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-blue-700 py-3 text-sm font-semibold text-white shadow-sm"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
