import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

const COLUMNS = [
  {
    title: 'Explore',
    links: ['Buy', 'Sell', 'Communities', 'Market Insights', 'About', 'Contact']
  },
  {
    title: 'Communities',
    links: ['Coal Harbour', 'Kitsilano', 'West Point Grey', 'Shaughnessy', 'Yaletown', 'West Vancouver']
  },
  {
    title: 'Resources',
    links: ['Home Valuation', 'Buyer Guide', 'Seller Guide', 'Mortgage Calculator', 'Privacy', 'Terms']
  }
];

export default function Footer() {
  return (
    <footer className="relative bg-brand-blue-deep text-white">
      {/* Trust bar */}
      <div className="border-b border-white/10 bg-gradient-to-r from-brand-blue-deep via-brand-blue to-brand-blue-deep">
        <div className="mx-auto flex max-w-hero flex-col items-center justify-center gap-3 px-6 py-6 text-center md:flex-row md:gap-6 md:py-7">
          <div className="flex items-center gap-2.5">
            <span className="text-brand-green" aria-hidden>●</span>
            <span className="text-[13px] font-semibold uppercase tracking-[0.18em] text-white sm:text-[14px]">
              Local Expertise · Trusted Guidance · Exceptional Results
            </span>
          </div>
          <span className="hidden h-4 w-px bg-white/25 md:inline-block" aria-hidden />
          <span className="text-[12px] tracking-wide text-white/70 sm:text-[13px]">
            Proudly serving Vancouver and the Lower Mainland
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-hero px-6 py-16 md:px-10 lg:px-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          {/* Brand block */}
          <div>
            <img
              src="/assets/strawhomes-logo.png"
              alt="Strawhomes"
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="mt-6 max-w-md text-[14.5px] font-light leading-relaxed text-white/65">
              Strawhomes is a Vancouver-based real estate boutique led by Richard Morrison.
              Curated representation for buyers and sellers across the Lower Mainland.
            </p>

            <ul className="mt-7 space-y-2.5 text-[14px] text-white/80">
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-brand-green" aria-hidden />
                <a href="tel:+17789002235" className="hover:text-white">
                  +1 (778) 900-2235
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-brand-green" aria-hidden />
                <a href="mailto:mls@strawhomes.com" className="hover:text-white">
                  mls@strawhomes.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-brand-green" aria-hidden />
                <span>Vancouver, BC</span>
              </li>
            </ul>

            <div className="mt-7 flex gap-3">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:-translate-y-0.5 hover:border-brand-green hover:bg-brand-green hover:text-white"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid gap-10 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-green">
                  {col.title}
                </h4>
                <ul className="mt-5 space-y-3 text-[14px] text-white/75">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="transition-colors hover:text-white">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center">
          <p className="text-[12px] text-white/55">
            © {new Date().getFullYear()} Strawhomes · Richard Morrison Personal Real Estate Corporation. All rights reserved.
          </p>
          <p className="text-[12px] text-white/55">
            Top 1% · Fraser Valley Real Estate Board
          </p>
        </div>
      </div>
    </footer>
  );
}
