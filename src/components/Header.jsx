import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';

const NAV = [
  { label: 'Buy', href: '#listings' },
  { label: 'Sell', href: '#sell' },
  { label: 'Communities', href: '#communities' },
  { label: 'Market Insights', href: '#insights' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/40 bg-white/85 shadow-[0_4px_30px_-10px_rgba(11,34,57,0.18)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-hero items-center justify-between px-6 py-4 md:px-10 md:py-5 lg:px-14">
        <a href="#" aria-label="Strawhomes home" className="flex shrink-0 items-center">
          <img
            src="/assets/strawhomes-logo.png"
            alt="Strawhomes"
            className="h-9 w-auto transition-all duration-500 md:h-10"
          />
        </a>

        <nav className="hidden lg:flex" aria-label="Primary">
          <ul className="flex items-center gap-8">
            {NAV.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="group relative text-[14px] font-semibold tracking-wide text-brand-blue transition-colors hover:text-brand-blue-dark"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-brand-green transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="tel:+17789002235"
            className="flex items-center gap-2 text-[14px] font-semibold text-brand-blue transition-colors hover:text-brand-blue-dark"
          >
            <Phone className="h-4 w-4 text-brand-blue" aria-hidden />
            +1 (778) 900-2235
          </a>
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-brand-blue px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card focus-ring"
          >
            <span className="relative z-10">Get in Touch</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-brand-blue via-brand-blue-dark to-brand-blue transition-transform duration-500 group-hover:translate-x-0" />
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-brand-blue shadow-sm backdrop-blur transition-all hover:bg-white lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="lg:hidden"
        >
          <div className="mx-4 mb-3 rounded-2xl border border-white/60 bg-white/95 p-5 shadow-card backdrop-blur">
            <ul className="flex flex-col gap-1">
              {NAV.map((i) => (
                <li key={i.label}>
                  <a
                    href={i.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-[15px] font-semibold text-brand-blue transition-colors hover:bg-brand-soft hover:text-brand-blue-dark"
                  >
                    {i.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col gap-3 border-t border-brand pt-4">
              <a
                href="tel:+17789002235"
                className="flex items-center gap-2 px-3 text-sm font-semibold text-brand-blue"
              >
                <Phone className="h-4 w-4" aria-hidden /> +1 (778) 900-2235
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-brand-blue px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-blue-dark"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
