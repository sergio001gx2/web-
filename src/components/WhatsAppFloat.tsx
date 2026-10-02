import { useEffect, useState } from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WHATSAPP_LINK } from '@/data/company';

export function WhatsAppFloat() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className={`group fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full bg-blue-700 py-3.5 pl-4 pr-5 text-white shadow-lg shadow-blue-900/25 transition-all duration-300 hover:bg-blue-800 hover:shadow-xl hover:-translate-y-0.5 ${
        show ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <span className="relative flex h-6 w-6 items-center justify-center">
        <span className="absolute inset-0 animate-ping rounded-full bg-blue-400/30" />
        <WhatsAppIcon className="relative h-6 w-6" />
      </span>
      <span className="hidden text-sm font-semibold sm:block">Escríbenos</span>
    </a>
  );
}
