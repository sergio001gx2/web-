import { useState, useCallback, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { GALLERY_IMAGES } from '@/data/content';
import { useReveal } from '@/hooks/useReveal';

export function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const { ref, visible } = useReveal<HTMLDivElement>();

  const close = useCallback(() => setLightbox(null), []);
  const next = useCallback(
    () => setLightbox((p) => (p === null ? p : (p + 1) % GALLERY_IMAGES.length)),
    []
  );
  const prev = useCallback(
    () =>
      setLightbox((p) =>
        p === null ? p : (p - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
      ),
    []
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox, close, next, prev]);

  return (
    <section
      id="galeria"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FDFBF7 0%, #F4F0FA 50%, #FDFBF7 100%)',
      }}
    >
      {/* Clean Unclipped Logo Background Watermark */}
      <div className="pointer-events-none absolute top-16 right-4 sm:right-8 md:right-12 w-64 sm:w-80 md:w-96 opacity-[0.13] select-none transform -rotate-6">
        <img src="/favicon.png" alt="" className="w-full h-auto object-contain" />
      </div>
      {/* Decorative glow */}
      <div className="absolute bottom-20 right-0 h-80 w-80 rounded-full bg-blue-50/20 blur-[80px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-600/80">
            Galería
          </span>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.15] text-sand-800 sm:text-5xl text-balance">
            Recuerdos de las familias
          </h2>
          <p className="mt-5 text-[17px] leading-[1.7] text-sand-500">
            Memoriales, urnas y certificados creados para honrar a cada mascota.
          </p>
        </div>

        <div
          ref={ref}
          className={`mt-14 grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 ${
            visible ? 'visible' : ''
          } reveal`}
        >
          {GALLERY_IMAGES.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className={`group relative overflow-hidden rounded-xl bg-sand-50 transition-all duration-500 ${
                i % 5 === 0 ? 'row-span-2' : ''
              }`}
              aria-label={`Ver imagen: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full object-cover transition-all duration-700 group-hover:scale-[1.03] ${
                  i % 5 === 0 ? 'h-full min-h-[200px]' : 'aspect-square'
                }`}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-blue-900/0 opacity-0 transition-all duration-500 group-hover:bg-blue-900/20 group-hover:opacity-100">
                <ZoomIn className="h-6 w-6 text-white drop-shadow-lg" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-blue-950/85 backdrop-blur-md"
          onClick={close}
        >
          <button
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20"
            onClick={close}
            aria-label="Cerrar"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            className="absolute left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <figure
            className="mx-auto max-h-[85vh] max-w-4xl px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={GALLERY_IMAGES[lightbox].src}
              alt={GALLERY_IMAGES[lightbox].alt}
              className="max-h-[85vh] w-auto rounded-2xl object-contain shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <figcaption className="mt-4 text-center text-sm text-white/50">
              {GALLERY_IMAGES[lightbox].alt}
              <span className="mt-1 block text-xs text-white/30">
                {lightbox + 1} / {GALLERY_IMAGES.length}
              </span>
            </figcaption>
          </figure>
          <button
            className="absolute right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </section>
  );
}
