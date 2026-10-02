import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Catalog } from '@/components/Catalog';
import { Gallery } from '@/components/Gallery';
import { Process } from '@/components/Process';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(147,197,253,0.55),_rgba(191,219,254,0.28)_24%,_rgba(239,246,255,0.96)_52%,_rgba(248,250,252,1)_100%)] text-sand-900">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(37,99,235,0.14),transparent_22%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.18),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(30,64,175,0.10),transparent_32%)]" />
      <div className="relative">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Catalog />
          <Gallery />
          <Process />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </div>
  );
}
