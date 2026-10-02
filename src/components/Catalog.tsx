import { useState } from 'react';
import { FileText } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { PRODUCTS } from '@/data/content';
import { WHATSAPP_LINK } from '@/data/company';
import { useReveal } from '@/hooks/useReveal';

const CATEGORIES = ['Todos', 'Bonsái Natural', 'Terrario Memorial', 'Bonsái Artificial', 'Urnas en MDF'];

export function Catalog() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const { ref, visible } = useReveal<HTMLDivElement>();

  const filtered =
    activeCategory === 'Todos'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="catalogo" className="relative py-24 sm:py-32 overflow-hidden bg-cream-50">
      {/* Soft glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-72 w-[800px] rounded-full bg-blue-50/30 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-600/80">
            Catálogo
          </span>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.15] text-sand-800 sm:text-5xl text-balance">
            Memoriales, urnas y certificados
          </h2>
          <p className="mt-5 text-[17px] leading-[1.7] text-sand-500">
            Una selección breve de los recuerdos que preparamos para cada familia.
          </p>
          <div className="mt-7 flex justify-center">
            <a
              href="/Catalogo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-blue-700 to-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(29,78,216,0.2)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(29,78,216,0.3)] hover:-translate-y-px"
            >
              <FileText className="h-4 w-4" />
              Ver Catálogo Completo (PDF)
            </a>
          </div>
        </div>

        {/* Category filter */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-blue-700 text-white shadow-sm'
                  : 'bg-white/70 text-sand-500 border border-sand-100 backdrop-blur-sm hover:bg-white hover:text-sand-700 hover:border-sand-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div
          ref={ref}
          className={`mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 ${
            visible ? 'visible' : ''
          } reveal`}
        >
          {filtered.map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-2xl bg-white border border-sand-100/80 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/85 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-700 shadow-sm">
                  {product.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-semibold text-sand-800">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-sand-500">
                  {product.description}
                </p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-px"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Consultar por WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
